const URL = 'http://localhost:4000'

interface OptionsInterface {
  method: string;
  credentials:RequestCredentials;
  mode: RequestMode;
  headers: {},
  body: string
}

function getEvents () {
  return fetchRequest('/events');
}

function getSingleEvent (id: string) {
  return fetchRequest('/events/' + id);
}

function createEvent (body: string) {
  return fetchRequest('/events', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
    }
  )
}

function signUp (id: string) {

  return fetch(`${URL}/events/${id}/up`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function signDown (id: string) {
  return fetch(`${URL}/events/${id}/down`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function fetchRequest (path: string, options?: OptionsInterface) {
  return fetch(URL + path, options)
    .then(res => res.status <= 400 ? res: Promise.reject())
    .then(response => response.status === 204 ? response : response.json())
    .catch(err => {
      console.log(`Error fetching ${path}: `, err)
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getEvents, getSingleEvent, createEvent, signUp, signDown };
