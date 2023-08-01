import React from "react";

const TeamBox = ({ image, name, job, social }) => {
  return (
    <div className="team-box text-center">
      <div className="team-image">
        <div className="image">
          <img src={`${image}`} alt={name} />
        </div>
        <div className="social-media">
          <a href={`tel:${social.phone}`}>
            <i className="bi bi-phone"></i>
          </a>
          <a href={social.instagramm}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href={social.telegramm}>
            <i className="bi bi-telegram"></i>
          </a>
        </div>
      </div>
      <div className="team-info">
        <h4>{name}</h4>
        <p>{job}</p>
      </div>
    </div>
  );
};

export default TeamBox;
