import React from 'react';
import {Destination} from './Destination';

export const DestinationsTo = (props) => {
  const isEmpty = props.destinations.length === 0;
  const flyAnywhere = {
      name: 'Anywhere',
  };
  return (
    <div className="section_sub ho_card_to">
      <h3 className="section_title">Select your Destinations</h3>
      <p className="section_desc">Select the destinations you want us to keep an eye on for you!</p>
      <div className="section_dest_cards row">
        {
            isEmpty ?
            <Destination key="Anywhere" airport={flyAnywhere} defaultImage="/img/everywhere-icon.png"/> :
            props.destinations.map(dest => <Destination key={dest.iataCode} airport={dest} />)
        }
        <div className="section_single_add" onClick={props.addDestination}>
            { isEmpty ? 'Pick your destination' : 'Add destination' }
        </div>
      </div>
    </div>
  )
}
