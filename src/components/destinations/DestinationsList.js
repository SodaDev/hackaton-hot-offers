import React from "react";
import {Destination} from "./Destination";

export const DestinationsList = (props) => (
    <div className="section_dest_cards">
        {
            props.destinations.map(airport => (
                <Destination key={airport.iataCode}
                             airport={airport}
                             addToWatched={props.addToWatched}/>
            ))
        }
    </div>
);
