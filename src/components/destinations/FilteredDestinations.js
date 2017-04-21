import React from 'react';
import {partial} from '../../lib/utils'

export const FilteredDestinations = (props) => {
  return (
    <div>
      {props.airports.map(airport => {
        const handleClick = partial(props.selectDestinationFrom, airport)
        return <div key={airport.iataCode} onClick={handleClick} >{airport.name}</div>
      }) }
    </div>
  )
}
