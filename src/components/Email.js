import React from "react";

const email = (props) => {
  return (
    <div className="email-body">
      <div className="read-unread">
        <input name="checked" type="checkbox" />
      </div>
      <div className="email-description">
        <div className="inbox-header">
          <p>{props.sender}</p>
          <p>{props.subject}</p>
          <p>{props.date}</p>
        </div>
        <div className="email-content">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default email;
