import React from 'react'

export const Header = () => {
  return (
    <header className="ho_card__header">
      <div className="row">
        <div className="col70">
          <h1 className="ho_card__title">Hot Offers</h1>
        </div>
        <div className="col30 slider">
          <switch className="ho_card__onoff"></switch>
        </div>
      </div>
      <div className="row">
        <div className="col70">
          <h2 className="ho_card__subtitle">The feature is switched <span id="ho_card__state">on</span></h2>
        </div>
        <div className="col30 expandable">
          <div className="ho_card__info">More info</div>
        </div>
      </div>
    </header>
  )
}
