import React from 'react';

export const Main = () => {
  return (
    <main className="ho_card__content">
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
      <section id="budget" className="ho_card__section">
        <div className="section_sub ho_card_budget">
          <h3 className="section_title">Select your Budget</h3>
          <p className="section_desc">Specify the maximum amount you would like to spend on the flight tickets.</p>
          <div className="section_bud_cards row">
            <div className="section_single_bud">
              <h4 className="single_bud_price">€20</h4>
            </div>
            <div className="section_single_bud">
              <h4 className="single_bud_price">€50</h4>
            </div>
            <div className="section_single_bud">
              <h4 className="single_bud_price">€60</h4>
            </div>
            <div className="section_single_bud">
              <h4 className="single_bud_price">€80</h4>
            </div>
            <div className="section_single_bud">
              <h4 className="single_bud_price">€100</h4>
            </div>
            <div className="section_single_bud">
              <h4 className="single_bud_price">€150</h4>
            </div>
          </div>
          <p className="section_desc">Pick your own:</p>
          <div className="section_bud_own">
            <div className="bud_own__input">
              <label htmlFor="budget">Under<br /></label>
              <input type="number" id="budget" name="budget" className="ho_input" placeholder="Set your budget" />
            </div>
            <div className="bud_own__cta">
              <input type="submit" className="bud_own__submit" />
            </div>
          </div>
        </div>
      </section>
      <section id="settings" className="ho_card__section">
        <div className="section_sub ho_card_info">
          <h3 className="section_title">Notifications Settings</h3>
          <p className="section_desc">Set the starting airport, frequency of the notifications, weekly mail and red alert.</p>
        </div>
        <div className="section_sub ho_card_freq">
          <h3 className="section_title">Frequency of the Notifications</h3>
            <select className="ho_select" defaultValue="">
              <option disabled>Select the frequency</option>
              <option>Every Day</option>
              <option>Every 3 Days</option>
              <option>Every 5 Days</option>
              <option>Every Week</option>
            </select>
        </div>
        <div className="section_sub ho_card_red">
          <h3 className="section_title red_tool tooltip">Red Alert Feature</h3>
          <input className="ho_checkbox" id="red_alert" type="checkbox" value="red_select" />
            <label className="ho_label" htmlFor="red_alert">Allow Red Alerts</label>
        </div>
        <div className="section_sub ho_card_mails">
          <h3 className="section_title mail_tool tooltip">Hot Offers Emails</h3>
          <input className="ho_checkbox" id="mail" type="checkbox" value="mail_select" />
            <label className="ho_label" htmlFor="mail">Enable Hot Offers Emails</label>
        </div>
      </section>
    </main>
  );
}