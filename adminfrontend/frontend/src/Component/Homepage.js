import { useNavigate } from 'react-router-dom';
import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";


const Homepage = () => {


  const navigate = useNavigate();
    function logoutSubmit(){
        localStorage.setItem("login", "");
        localStorage.setItem("loginStatus", "Logged out successfully!")
        navigate("/");
    }

  return (
    <div>
      <div className="container">
        <div class="right side">
          <Link to="/Homepage/Available_Request" className="nav-item-2">
            <button className="ab">
              <div class="paragraph-div-home">Available Request</div>
            </button>
          </Link>
        </div>
      </div>

      <div className="container">
        <div class="right side">
          <Link to="/Homepage/Accept_request" className="nav-item-2">
            <button className="ab">
              <div class="paragraph-div-home">Accepted Request</div>
            </button>
          </Link>
        </div>
      </div>

      <div className="container">
        <div class="right side">
          <Link to="/Homepage/laboratarian_view" className="nav-item-2">
            <button className="ab">
              <div class="paragraph-div-home">Laboratorian assign details</div>
            </button>
          </Link>
        </div>
      </div>

      <div className="container">
        <div class="right side">
          <Link to="/Homepage/Rejected_request" className="nav-item-2">
            <button className="ab">
              <div class="paragraph-div-home">Rejected Request</div>
            </button>
          </Link>
        </div>
      </div>

      

    </div>
  );
};

export default Homepage;
