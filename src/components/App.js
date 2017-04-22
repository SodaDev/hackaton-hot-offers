import React, {Component} from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Budget} from "./budget/Budget";
import {Settings} from "./settings/Settings";
import {DestinationsFrom} from "./destinations/DestinationsFrom";
import {DestinationsTo} from "./destinations/DestinationsTo";
import {Modal} from "./modal/Modal";
import {DestinationsList} from "./destinations/DestinationsList";
import {loadAirports, loadAirportsFrom} from "../lib/hotOffersService";
import {flatten} from "../lib/utils";
import {addToWatchedList} from "../lib/destinationsHelpers";

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
                            <DestinationsTo 
                                destinations={this.state.watchedDestinations}
                                addDestination={this.addDestination} />
                            <Modal modalActive={this.state.modalActive} toggleModal={this.toggleModal}>
                                <DestinationsList destinations={this.state.airportsTo} addToWatched={this.addToWatched}/>
                            </Modal>
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
        watchedDestinations: [],
        allAirports: [],
        filteredAirports: [],
        airportsTo: [],
        modalActive: false
    };

    componentDidMount () {
        loadAirports().then(allAirports => this.setState({allAirports}));

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(this.loadNearestAirport, this.loadDeafaultAirport);
        } else {
            console.log('no geolocation')
        }
    }

    selectDestinationFrom = (airport) => {
        this.setState({
            currentLocation: airport.iataCode,
            filteredAirports: []
        });
    };

    loadNearestAirport = (geolocation) => {
        console.log(geolocation.coords.latitude, geolocation.coords.longitude)
        this.setState({
            currentLocation: 'London'
        });
    };

    loadDeafaultAirport = () => {
        this.setState({
            currentLocation: 'Wroclaw'
        });
    };

    handleInputChange = (e) => {
        const inputVal = e.target.value;
        this.setState({
            currentLocation: inputVal
        });

        if (inputVal.length >= 3) {
            const filteredAirports = this.state.allAirports.filter(airport => airport.name.match(new RegExp(inputVal, 'i')));
            this.setState({
                filteredAirports: filteredAirports
            });
        } else {
            this.setState({
                filteredAirports: []
            });
        }
    };

    // load airport from here or after starting airport selected???
    addDestination = () => {
        this.toggleModal();
        loadAirportsFrom(this.state.currentLocation.iataCode)
            .then(airportsTo => {
                // const newList = airportsTo.map(port => {
                //     if (this.state.watchedDestinations.length) {
                //         const filteredList = this.state.watchedDestinations.map(dest => {
                //             if (dest.iataCode === port.iataCode) {
                //                 console.log(port)
                //                 return Object.assign({}, port, {isWatched: true});
                //             } else {
                //                 return Object.assign({}, port, {isWatched: false});
                //             }
                //         });
                //         return filteredList[0];
                //     } else {
                //         return Object.assign({}, port, {isWatched: false});
                //     }
                // });
                this.setState({airportsTo})
            })
    };

    addToWatched = (airport) => {
        const res = this.state.watchedDestinations.filter(dest => dest.iataCode === airport.iataCode);
        if (res.length) {
            return;
        }
        this.toggleModal();
        const updatedList = addToWatchedList(this.state.watchedDestinations, airport);
        
        this.setState({
            watchedDestinations: updatedList
        });
    };

    toggleModal = () => {
        const bodyEl = document.querySelector('body');
        
        this.setState({
            modalActive: !this.state.modalActive
        });
        
        if (bodyEl.classList.contains('noscroll')) {
            bodyEl.classList.remove('noscroll')
        } else {
            bodyEl.classList.add('noscroll')
        }
    }
}

export default App;
