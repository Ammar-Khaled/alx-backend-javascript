export default function handleResponseFromAPI(promise) {
  const obj = { status: 200, body: 'Success' };
  return promise
    .then(() => obj)
    .catch(() => new Error())
    .finally(() => { console.warn('Got a response from the API'); });
}
