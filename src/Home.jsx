import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import "./Index.css";
import plant from "./plant.jfif";
import {NavLink} from "react-router-dom";
const Home = () => {
return (
        <div className="container">
          <Navbar/>
       <h3 className="heading">Grow your business with</h3>
       <h5 className="body">Aashu Technical</h5>
       <p className="text">We are the team of talented developer making Website</p>
       <div className="mt-3 box">
      <NavLink to="/about"><button className="btn btn-primary"> Get Started</button></NavLink>
      <div className="shadow-md header">
        <img src={plant} className="img-fluid animated" width="400" height="180" alt="home img"></img>
      </div>
       </div>
       </div>
);
};
 export default Home;