const URL = 'api.postcodes.io/postcodes'

function getSingleEvent (body: string) {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then(res => console.log(res))
    .catch((err) => console.log(err));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSingleEvent };
