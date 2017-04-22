const baseUrl = 'http://10.48.20.238:8080/hot-offers/airports';
const userDetailsUrl = 'http://10.48.20.238:8080/hot-offers/user-details';

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

export const saveUserDetails = (currentLocation, watchedDestinations, availableBudgets) => {
    const airportFrom = currentLocation.iataCode;
    const destinations = watchedDestinations
        .map(dest => dest.iataCode);
    const selectedPrice = availableBudgets.find(budget => budget.selected).price;
    const body = JSON.stringify({
        userId: "userId123",
        departureAirport: airportFrom,
        destinationAirports: destinations,
        budget: selectedPrice
    });

    fetch(userDetailsUrl, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: body
    }).then(response => console.log(response));
};
