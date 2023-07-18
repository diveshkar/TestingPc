import React from 'react';
import "./laboratarian_view.css";
import { Link } from 'react-router-dom';

const Laboratarian_View =() => {
  
  return (
    <div>
           
      <div className="Hedding">Laboratorian assign details</div>
      <div className="container">
       <div class = "right side">
       
       <Link to="/Homepage/laboratarian_view/Labo_01" className='nav-item-2'>
       <button className="ab">
           <div class ="paragraph-div-home">
           Laboratorian 01
           </div>
           </button>
        </Link>
        
        </div>
       
       
      </div>

      <div className="container">
       <div class = "right side">
       <Link to="/Homepage/laboratarian_view/Labo_02" className='nav-item-2'>
       <button className="ab">
        <div class ="paragraph-div-home">
        Laboratorian 02
        </div>
        </button>
        </Link>
       </div>
      </div>

       <div className ='container02'>
       <button className="sml_LbView">
                 FFF
          </button>
        </div>

      <div className="container">
       <div class = "right side">
        <Link to = "/Homepage/laboratarian_view/Labo_03" className='nav-item-2'>
        <button className="ab">
        <div class ="paragraph-div-home">
         Laboratorian 03
        </div>
        </button>
        </Link>
       </div>
      </div>

      

    </div>
  )
}

export default Laboratarian_View;