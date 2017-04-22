import React from 'react';

export const Settings = () => {
  return (
    <section id="settings" className="ho_card__section">
      <div className="section_sub ho_card_info">
        <h3 className="section_title">Notifications Settings</h3>
        <p className="section_desc">Set the starting airport, frequency of the notifications, weekly mail and red alert.</p>
      </div>
      <div className="section_sub ho_card_freq hidden">
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
  )
}
