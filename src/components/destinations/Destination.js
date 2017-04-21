import React from 'react';
import {partial} from '../../lib/utils'

export const Destination = (props) => {
  let addToWatchedHandler;
  if (props.addToWatched) {
    addToWatchedHandler = partial(props.addToWatched, props.airport);
  }

  return (
    <div className={"section_single_dest " + (props.airport.isWatched ? ' disabled' : '')} id="barcelona" onClick={addToWatchedHandler}>
      <h4 className="section_single_dest__city">
        {props.airport.name}
      </h4>
      <p className="section_single_dest__code">{props.airport.iataCode}</p>
    </div>
  )
}
