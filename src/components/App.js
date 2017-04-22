import React, {Component} from 'react';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {Budget} from './budget/Budget';
import {Settings} from './settings/Settings';
import {DestinationsFrom} from './destinations/DestinationsFrom';
import {DestinationsTo} from './destinations/DestinationsTo';
import {Modal} from './modal/Modal';
import {DestinationsList} from './destinations/DestinationsList';
import {loadAirports, loadAirportsFrom, saveUserDetails, fetchAirportFromCoord} from "../lib/hotOffersService";
import {addToWatchedList, toggleBudget, removeSelection} from '../lib/destinationsHelpers';
import {SnackBar} from './snackbar/SnackBar';

let timeouts = [];
const removeTimeouts = (list) => list.map(timeout => clearTimeout(timeout));

class App extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <article className="ho_card">
                    <Header className="Header"/>
                    <main className="ho_card__content">
                        <section id="destinations" className="ho_card__section">
                            <DestinationsFrom
                                currentLocation={this.state.currentLocation.name}
                                airports={this.state.filteredAirports}
                                handleInputChange={this.handleInputChange}
                                selectDestinationFrom={this.selectDestinationFrom}
                                useCurrentLocation={this.useCurrentLocation}
                                loadingLocation={this.state.loadingLocation} />
                            <DestinationsTo
                                destinations={this.state.watchedDestinations}
                                addDestination={this.addDestination}/>
                            <Modal modalActive={this.state.modalActive} toggleModal={this.toggleModal}>
                                <DestinationsList destinations={this.state.airportsTo} addToWatched={this.addToWatched}/>
                            </Modal>
                        </section>
                        <Budget budgets={this.state.availableBudgets} selectBudget={this.selectBudget}/>
                        <Settings />
                    </main>
                    <Footer className="Footer" submit={this.submit}/>
                    <SnackBar {...this.state.message} />
                </article>
            </div>
        );
    }

    state = {
        currentLocation: {
            name: '',
            iataCode: ''
        },
        watchedDestinations: [],
        allAirports: [],
        filteredAirports: [],
        airportsTo: [],
        modalActive: false,
        availableBudgets: [
            {id: 1, price: 20, selected: false},
            {id: 2, price: 50, selected: false},
            {id: 3, price: 60, selected: false},
            {id: 4, price: 80, selected: false},
            {id: 5, price: 100, selected: false},
            {id: 6, price: 150, selected: true}
        ],
        loadingLocation: false,
        message: {
            isShowing: false,
            severity: '',
            text: ''
        }
    }

    componentDidMount () {
        loadAirports().then(allAirports => this.setState({allAirports}));
    }

    componentWillUnmount () {
        removeTimeouts(timeouts);
    }

    selectBudget = (selectedBudget) => {
        const newBudgets = this.state.availableBudgets.map(budget => budget.id === selectedBudget.id ? toggleBudget(selectedBudget) : removeSelection(budget));
        this.setState({
            availableBudgets: newBudgets
        });
    }

    selectDestinationFrom = (airport) => {
        this.setState({
            currentLocation: airport,
            filteredAirports: [],
            watchedDestinations: []
        });
    };

    loadNearestAirport = (geolocation) => {
        fetchAirportFromCoord(geolocation.coords.latitude, geolocation.coords.longitude)
            .then(airport => {
                this.setState({
                    currentLocation: airport[0],
                    loadingLocation: false
                });
            }, () => {
                this.setState({
                    loadingLocation: false,
                    message: {
                        isShowing: true,
                        severity: 'danger',
                        text: 'Cannot find your location.'
                    }
                });
                this.hideMessage();
            });
    };

    useCurrentLocation = () => {
        this.setState({loadingLocation: true});
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(this.loadNearestAirport, this.loadDeafaultAirport);
        } else {
            this.setState({
                loadingLocation: false,
                message: {
                    isShowing: true,
                    severity: 'danger',
                    text: 'Cannot access your location.'
                }
            });
            this.hideMessage();
        }
    }

    loadDeafaultAirport = () => {
        this.setState({
            currentLocation: {}
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

    addDestination = () => {
        this.toggleModal();
        loadAirportsFrom(this.state.currentLocation.iataCode)
            .then(airportsTo => {
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
    };

    hideMessage = () => {
        const newTimeout = setTimeout(() => {
            const message = Object.assign({}, this.state.message, {isShowing: false});
            this.setState({message});
        }, 2000);
        timeouts = [...timeouts, newTimeout];
    }

    onSaveSuccess = () => {
        this.setState({
            message: {
                isShowing: true,
                severity: 'success',
                text: 'Settings saved.'
            }
        });
        this.hideMessage();
    }

    onSaveError = () => {
        this.setState({
            message: {
                isShowing: true,
                severity: 'danger',
                text: 'Something went wrong.'
            }
        });
        this.hideMessage();
    }

    submit = () => {
        saveUserDetails(this.state.currentLocation, this.state.watchedDestinations, this.state.availableBudgets)
            .then(res => this.onSaveSuccess(res), () => this.onSaveError());
    }
}

export default App;
