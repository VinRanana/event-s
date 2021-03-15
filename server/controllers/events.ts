import { Request, Response } from 'express';
const { Events } = require('../models/events');
const { User } = require('../models/users');
const axios = require('axios');

exports.getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Events.find();
    res.status(200);
    res.send(events);
  } catch (O_O) {
    console.error('GET EVENTS: ',O_O);
    res.status(500);
    res.send(O_O);
  }
};
exports.getSingleEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await Events.find({_id: id});
    res.status(200);
    res.send(event);
  } catch (O_O) {
    console.error('SINGLE EVENT: ',O_O);
    res.status(500);
    res.send(O_O);
  }
};
exports.postEvent = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body.user; // Added the '.body' in
    let { location } = req.body;
    const getGeoLocation = await axios.get(`http://api.postcodes.io/postcodes/${location}`);
    const geolocation = `${getGeoLocation.data.result.longitude},${getGeoLocation.data.result.latitude}`;
    const newEvent = {...req.body, geolocation, owner: _id};
    const events = await Events.create(newEvent);
    const addToUser = await User.findByIdAndUpdate(_id, { $push: { eventList: events._id}},{new:true});
    res.status(201);
    res.send(events);
  } catch (O_O) {
    console.error('POST EVENT: ',O_O);
    res.status(400);
    res.send(O_O);
  }
};

exports.deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await Events.findOne({ _id: id});
    await Promise.all(event.list.map(async (el: any, i: any) => { // Added both 'any's to see if it'll work
      await User.findByIdAndUpdate(event.list[i], { $pull: { eventList: event._id}},{new:true});
    }));
    const deleteFromHost = await User.findByIdAndUpdate(event.owner, { $pull: { eventList: event._id}},{new:true});
    const deleteEvent = await Events.deleteOne({ _id: id});
    res.status(204);
    res.send({msg: `Deleted event ${id}`});
  } catch (error) {
    console.error('DELETE EVENT: ',error);
    res.status(500);
    res.send(error);
  }
};

exports.updateEvent = async (req: Request, res: Response) => {

  try {
    const { id } = req.params;
    const event = await Events.findByIdAndUpdate(
      id,
      req.body,
      { new: true}
    );
    res.send(event);
  } catch (error) {
    console.error('UPDATE EVENT: ',error);
    res.status(500);
    res.send(error);
  }
};


exports.attendEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { _id } = req.body.user;
    const addToEvent = await Events.findByIdAndUpdate(id, { $push: { list: _id}, $inc: { attendees: 1 }},{new:true});
    const addToUser = await User.findByIdAndUpdate(_id, { $push: { eventList: id}},{new:true});
    res.status(201);
    res.send(addToEvent);
  } catch (error) {
    res.status(404).send({ error, message: 'Could not assign user to event' });
  }
};
exports.unattendEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { _id } = req.body.user;
    const deleteFromEvent = await Events.findByIdAndUpdate(id, { $pull: { list: _id}, $inc: { attendees: -1}},{new:true});
    const deleteFromUser = await User.findByIdAndUpdate(_id, { $pull: { eventList: id}},{new:true});
    res.status(201);
    res.send(deleteFromEvent);
  } catch (error) {
    res.status(404).send({ error, message: 'Could not assign user to event' });
  }
};
