import React from 'react';

export const Budget = () => {
  return (
    <section id="budget" className="ho_card__section">
      <div className="section_sub ho_card_budget">
        <h3 className="section_title">Select your Budget</h3>
        <p className="section_desc">Specify the maximum amount you would like to spend on the flight tickets.</p>
        <div className="section_bud_cards row">
          <div className="section_single_bud selected">
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
        <p className="section_desc hidden" >Pick your own:</p>
        <div className="section_bud_own hidden">
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
  )
}
