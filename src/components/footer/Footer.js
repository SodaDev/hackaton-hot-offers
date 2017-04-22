import React from 'react';

export const Footer = (props) => {
  return (
    <footer className="ho_card__save">
      <div className="ho_card__setting_save" onClick={props.submit}>Save</div>
    </footer>
  )
}
