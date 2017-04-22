import React from 'react';

export const SnackBar = (props) => {
  return (
    <div className={`${props.severity} ` + (props.isShowing ? 'snackbar_show' : 'snackbar_hidden')}>
      <p>{props.text}</p>
    </div>
  )
}
