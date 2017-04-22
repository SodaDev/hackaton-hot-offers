// const baseUrl = 'http://10.48.21.136:8080/hot-offers';
const baseUrl = 'http://10.48.20.238:8080/hot-offers';
// const baseUrl = 'http://10.48.21.122:8080/hot-offers';

export const loadAirports = () => {
  return fetch(`${baseUrl}/airports`)
    .then(res => res.json())
};

export const loadAirportsFrom = (code) => {
  return fetch(`${baseUrl}/airports/${code}`)
    .then(res => res.json());
};

export const fetchAirportFromCoord = (lat, lon) => {
  const latLonUrl = `${baseUrl}/airports?lat=${lat}&lon=${lon}`;
  return fetch(latLonUrl)
    .then(res => res.json())
}

export const saveUserDetails = (currentLocation, watchedDestinations, availableBudgets) => {
    const airportFrom = currentLocation.iataCode;
    const destinations = watchedDestinations
        .map(dest => dest.iataCode);
    const selectedPrice = availableBudgets.find(budget => budget.selected).price;
    const body = JSON.stringify({
        userId: "12345",
        departureAirport: airportFrom,
        destinationAirports: destinations,
        budget: selectedPrice
    });

    fetch(`${baseUrl}/user-details`, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: body
    }).then(response => console.log(response));
};
