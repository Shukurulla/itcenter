import React from "react";

const CourseInfo = ({ icon, color, title, description }) => {
  return (
    <div className="course-info text-center">
      <div className="course-icon" style={{ backgroundColor: color }}>
        <i className={`${icon}`}></i>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CourseInfo;
