import React from 'react';
import {Destination} from './Destination';

export const DestinationsTo = (props) => {
  return (
    <div className="section_sub ho_card_to">
      <h3 className="section_title">Select your Destinations</h3>
      <p className="section_desc">Select the destinations you want us to keep an eye on for you!</p>
      <div className="section_dest_cards row">
        {props.destinations.map(dest => <Destination key={dest.iataCode} airport={dest} />)}
        <div className="section_single_add" onClick={props.addDestination}>Add another destination</div>
      </div>
    </div>
  )
}
