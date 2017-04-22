import React from 'react';
import {partial} from '../../lib/utils'

export const Destination = (props) => {
  let addToWatchedHandler;
  if (props.addToWatched) {
    addToWatchedHandler = partial(props.addToWatched, props.airport);
  }

  const defaultUrl = "/img/default-destination.png";
  const imgUrl = `https://www.ryanair.com/etc/designs/ryanair/frontend/resources/ui/illustrations/destinations/${props.airport.iataCode}.png`;
  return (
    <div className={"section_single_dest " + (props.airport.isWatched ? ' disabled' : '')} id="barcelona" onClick={addToWatchedHandler}>
      <img src={imgUrl} className="section_single_dest__thumbnail" onError={(e)=>{e.target.src=defaultUrl}}/>
      <h4 className="section_single_dest__city">
        {props.airport.name}
      </h4>
      <p className="section_single_dest__code">{props.airport.iataCode}</p>
    </div>
  )
};
