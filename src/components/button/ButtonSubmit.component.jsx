import React from "react";
import "./button.css";
export default function ButtonSubmitComponent(props) {
  return (
    <div className="btn-submit" onClick={props.handleSubmitForm}>
      <span>{props.title}</span>
    </div>
  );
}
