import React from 'react';

export const Destinations = () => {
  return (
    <section id="destinations" className="ho_card__section">
      <div className="section_sub ho_card_from">
        <h3 className="section_title">Starting Airport</h3>
        <input type="text" name="from" className="ho_input" placeholder="Outbound airport" required />
      </div>
      <div className="section_sub ho_card_to">
        <h3 className="section_title">Select your Destinations</h3>
        <p className="section_desc">Select the destinations you want us to keep an eye on for you!</p>
        <div className="section_dest_cards row">
          <div className="section_single_dest" id="barcelona">
            <h4 className="section_single_dest__city">Barcelona<span className="section_dest__country">, Spain</span></h4>
            <p className="section_single_dest__code">BCN</p>
          </div>
          <div className="section_single_add">Add another destination</div>
        </div>
      </div>
    </section>
  )
}
