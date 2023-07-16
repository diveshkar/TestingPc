import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import prof from "./images/profile.png";

const Profile = () => {
  return (
    <div>
      <h3 className="bio">Bio Details</h3>
      <p className="bio-1">
        Hello <b>Isuru!</b> &nbsp; Welcome to TestingPC
      </p>
      <div className="content-center-Bx-prof">
        <img src={prof} class="mx-auto d-block rounded-circle" alt="Cinque Terre" width="150" height="150"/>
      <div class="card-body">
      <h4 class="card-title">M.J.A Isuru Madhushanka</h4>
      <p class="card-text">Works at : University of Colombo</p>
      <Link to="/order" className="btn btn-primary">Place Order</Link>
    </div> 
        
      </div>
      
    </div>
  );
};

export default Profile;
