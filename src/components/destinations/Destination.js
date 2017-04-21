import React from 'react';

export const Destination = (props) => {
  return (
    <div className="section_single_dest" id="barcelona">
      <h4 className="section_single_dest__city">
        {props.city}
        <span className="section_dest__country">, {props.country}</span>
      </h4>
      <p className="section_single_dest__code">{props.iataCode}</p>
    </div>
  )
}
