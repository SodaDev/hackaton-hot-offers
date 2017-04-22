import React from 'react';
import {FilteredDestinations} from './FilteredDestinations';

export const DestinationsFrom = (props) => {
  return (
    <div className="section_sub ho_card_from">
      <h3 className="section_title">Starting Airport</h3>
      <input type="text" required
        name="from"
        className="ho_input"
        placeholder="Outbound airport"
        value={props.currentLocation}
        onChange={props.handleInputChange} />
      <FilteredDestinations airports={props.airports} selectDestinationFrom={props.selectDestinationFrom} />
    </div>
  )
}