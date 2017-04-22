const baseUrl = 'http://10.48.20.238:8080/hot-offers/airports';

export const loadAirports = () => {
  return fetch(baseUrl)
    .then(res => res.json())
};

export const loadAirportsFrom = (code) => {
  return fetch(`${baseUrl}/${code}`)
    .then(res => res.json());
};

export const fetchAirportFromCoord = (lat, lon) => {
  const latLonUrl = `${baseUrl}?lat=${lat}&lon=${lon}`;
  return fetch(latLonUrl)
    .then(res => res.json())
} 
