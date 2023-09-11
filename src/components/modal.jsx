import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ msg, setModal }) => {
  const { status, message, path, label, image } = msg;
  return (
    <div className="modal-content">
      <div className="message-box">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <h4>{message}</h4>
        {status == "success" && <Link to={path}>{label}</Link>}
        {status == "danger" ? (
          <button onClick={() => setOpen(false)}>{label}</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Modal;
