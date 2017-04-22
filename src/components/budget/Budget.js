import React from 'react';
import {BudgetLimit} from './BudgetLimit';

export const Budget = (props) => {
  return (
    <section id="budget" className="ho_card__section">
      <div className="section_sub ho_card_budget">
        <h3 className="section_title">Select your Budget</h3>
        <p className="section_desc">Specify the maximum amount you would like to spend on the flight tickets.</p>
        <div className="section_bud_cards row">
          {props.budgets.map(budget => <BudgetLimit key={budget.id} budget={budget} selectBudget={props.selectBudget}/>)}
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
