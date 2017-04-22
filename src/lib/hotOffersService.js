const wroUrl = 'http://localhost:8080/wro';
// const allUrl = 'http://localhost:8080/airports'
const allUrl = 'http://10.48.20.238:8080/hot-offers/airports';

export const loadAirports = () => {
  // return fetch(baseUrl)
  return fetch(allUrl)
    .then(res => res.json())
}

export const loadAirportsFrom = (code) => {
  // return fetch(`${baseUrl}/${code}`)
  //   .then(res => res.json())
  return fetch(wroUrl)
    .then(res => res.json())
}
