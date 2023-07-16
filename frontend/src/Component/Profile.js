import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import prof from "./images/profile.png";
import axios from "axios";


const Profile = () => {
  // const [industry, setIndustry] = useState({industry: ""});
  const Username = localStorage.getItem('Username');
  const i = localStorage.getItem('industry');
  // const z = localStorage.getItem('industry');
  let url = 'http://localhost/testingpc/backend/Profile.php'
  axios.post(url, {
    Username: Username
  }).then(function(response) {
    console.log(response);
    if(response.data.success) {
      const industry = response.data.industry;
      localStorage.setItem('industry', industry);
      

      // setIndustry(industry);
    }
  })
  .catch(function(error){
    window.alert(error);
  })
  
  if(document.cookie.includes('sessionToken')){
  return (
    <div>
      <h3 className="bio">Bio Details</h3>
      <p className="bio-1">
        Hello <b>{Username} !</b> &nbsp; Welcome to TestingPC
      </p>
      <div className="content-center-Bx-prof">
        <img src={prof} class="mx-auto d-block rounded-circle" alt="Cinque Terre" width="150" height="150"/>
      <div class="card-body">
      <h4 class="card-title">{Username}</h4>
      <p class="card-text">Works at : {i} </p>
      <Link to="/order" className="btn btn-primary">Place Order</Link>
    </div>    
      </div> 
    </div>
  );
} else {
  window.location.href = '/';
}
}

export default Profile;