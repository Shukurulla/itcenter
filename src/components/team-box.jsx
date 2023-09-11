import React from "react";

const TeamBox = ({ item }) => {
  return (
    <div className="team-box text-center">
      <div className="team-image">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="social-media">
          <a href={`tel:${item.phoneNumber}`}>
            <i className="bi bi-phone"></i>
          </a>
          <a href={item.instagramUrl}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href={item.telegramUrl}>
            <i className="bi bi-telegram"></i>
          </a>
        </div>
      </div>
      <div className="team-info">
        <h4>{item.name}</h4>
        <p>{item.course}</p>
      </div>
    </div>
  );
};

export default TeamBox;
