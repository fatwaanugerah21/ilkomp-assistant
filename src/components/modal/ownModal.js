import React from 'react';
import './modal.css'

const OwnModal = (props) => {

  var visibility = props.show ? 'show' : 'display-none'

  const handleClick = (e) => {
    if (e.target === document.getElementById('modal')) {
      props.onClick()
    }
  }

  const header = props.header
  const footer = props.footer ? props.footer : ''
  return (
    <div className={"modal " + visibility} id="modal" onClick={handleClick}>
      <div className="modal-main" >
        <div className="modal-header">
          {header}
          <span onClick={() => props.onClick()}>&times;</span>
        </div>
        <div className="modal-content">
          {props.children}
        </div>
        <div className="modal-footer">
          <h1>{footer}</h1>
        </div>
      </div>
    </div >
  )
}
export default OwnModal