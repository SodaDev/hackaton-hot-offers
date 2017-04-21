import React, {Component} from 'react';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {Budget} from './budget/Budget';
import {Settings} from './settings/Settings';
import {DestinationsFrom} from './destinations/DestinationsFrom';
import {DestinationsTo} from './destinations/DestinationsTo';
import {loadAirports, loadAirportsFrom} from '../lib/hotOffersService';

class App extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <article className="ho_card">
                    <Header className="Header" />
                    <main className="ho_card__content">
                        <section id="destinations" className="ho_card__section">
                            <DestinationsFrom 
                                currentLocation={this.state.currentLocation}
                                airports={this.state.filteredAirports}
                                handleInputChange={this.handleInputChange}
                                selectDestinationFrom={this.selectDestinationFrom} />
                            <DestinationsTo destinations={this.state.watchedDestinations} />
                        </section>
                        <Budget />
                        <Settings />
                    </main>
                    <Footer className="Footer" />
                </article>
            </div>
        );
    }

    state = {
        currentLocation: 'Wroclaw',
        watchedDestinations: [
            {country: 'Spain', city: 'Barcelona', iataCode: 'BCN'},
            {country: 'Poland', city: 'Warsaw', iataCode: 'WAW'}
        ],
        allAirports: [],
        filteredAirports: []
    }

    componentDidMount () {
        loadAirports().then(res => {
            this.setState({
                allAirports: res
            });
        });

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(this.loadNearestAirport, this.loadDeafaultAirport);
        } else {
            console.log('no geolocation')
        }
        // loadAirports().then(res => console.log(res));
    }

    selectDestinationFrom = (airport) => {
        this.setState({
            currentLocation: airport.name
        });
    }

    loadNearestAirport = (geolocation) => {
        console.log(geolocation.coords.latitude, geolocation.coords.longitude)
        this.setState({
            currentLocation: 'London'
        });
    }

    loadDeafaultAirport = () => {
        this.setState({
            currentLocation: 'Wroclaw'
        });
    }

    handleInputChange = (e) => {
        const inputVal = e.target.value;
        this.setState({
            currentLocation: inputVal
        });

        if (inputVal.length >= 3) {
            const filteredAirports = this.state.allAirports.filter(airport => airport.name.includes(inputVal));
            this.setState({
                filteredAirports: filteredAirports
            });
        } else {
            this.setState({
                filteredAirports: []
            });
        }
    }

    addDestination = () => {
        console.log('add dest')
        // loadAirportsFrom(this.state.currentLocation.iataCode)
    }
}

export default App;
