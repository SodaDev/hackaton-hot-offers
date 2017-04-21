import React from 'react';

export const Modal = (props) => {
  return (
    <div className={"overlay " + (props.modalActive ? 'is-open' : '')}>
      <div className="modal">
          {props.children}
          <div className="close-btn" onClick={props.toggleModal}>Close</div>
      </div>
    </div>
  )
}
