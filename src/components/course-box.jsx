import { Button } from "../ui";
import { Link } from "react-router-dom";

const CourseBox = ({ image, courseName, briefInfo, slug }) => {
  return (
    <div className="course-box text-center my-3">
      <div className="image">
        <img className="w-100" src={image} alt={courseName} />
      </div>
      <div className="info">
        <h4>{courseName}</h4>
        <p>{briefInfo}</p>

        <Link to={`/courses/${slug}`}>
          <Button>Batafsil</Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseBox;
