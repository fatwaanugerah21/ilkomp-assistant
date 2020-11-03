import React, { useEffect } from "react";
import "./modal.min.css";

const OwnModal = (props) => {
  var visibility = props.show ? "modal-open show" : "display-none";

  const handleClick = (e) => {
    if (e.target === document.getElementById("modal") || e.keyCode === 27) {
      props.onClick();
    }
  };

  useEffect(() => {
    const event = window.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        props.onClick();
      }
      return window.removeEventListener("keyup", event);
    });
  });

  const footer = props.footer ? props.footer : "";
  return (
    <div className={"modal " + visibility} id="modal" onClick={handleClick}>
      <div className="modal-main">
        <div className="modal-header">
          <h1>{props.headerText}</h1>
          <span onClick={() => props.onClick()}>&times;</span>
        </div>
        <div className="modal-content">{props.children}</div>
        <div className="modal-footer">
          <h1>{footer}</h1>
        </div>
      </div>
    </div>
  );
};
export default OwnModal;
