import React from 'react';
import {partial} from '../../lib/utils'

export const FilteredDestinations = (props) => {
  return (
    <div className="dropdown-section">
      {props.airports.map(airport => {
        const handleClick = partial(props.selectDestinationFrom, airport)
        return <div className="section_single_add" key={airport.iataCode} onClick={handleClick} >{airport.name}</div>
      }) }
    </div>
  )
}
