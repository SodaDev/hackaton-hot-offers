import React from 'react';
import {partial} from '../../lib/utils'

export const BudgetLimit = (props) => {
  const selectBudget = partial(props.selectBudget, props.budget);

  return (
    <div className={'section_single_bud' + (props.budget.selected ? ' selected' : '')} onClick={selectBudget}>
      <h4 className="single_bud_price">€{props.budget.price}</h4>
    </div>
  )
}
