import React, { useContext, useEffect } from "react";
import { homeImage } from "../constants";
import { Button } from "../ui";
import { Context } from "../context";

const Home = () => {
  document.title = "Xojeli IT Center";
  const {setActive} = useContext(Context)
  useEffect(() => {
    setActive(0)
  }, [])
  return (
    <div className="home container py-5">
      <div className="row py-5 align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="home-about">
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex?
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              dolorem quo necessitatibus totam mollitia!
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="home-image">
            <img className="w-100" src={homeImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
