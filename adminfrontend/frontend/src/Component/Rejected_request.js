import React, { useState } from 'react';
import './rejected_request.css';
import { Link } from 'react-router-dom';



function Rejected_request() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleAcceptClick = () => {
    setShowPopup(true);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
    console.log(`Accepted ${selectedOption}`);
  };

 //Reject
  const handleRejectClick = () => {
    setShowRejectPopup(true);
  };

  const handleRejectOptionClick = (option) => {
    console.log(`Selected ${option}`);
  };
  

  return (
        
        <>

         <button className="back-button">Back</button>
         <div className='Avb_Req'>Reject Request</div>
      
     <div className="container_Ab">
      
              <div className="left-pane">
                     <div className={`row ${selectedRow === 1 ? 'active' : ''}`} onClick={() => handleRowClick(1)}>Reject request 1</div>
                     <div className={`row ${selectedRow === 2 ? 'active' : ''}`} onClick={() => handleRowClick(2)}>Reject request 2</div>
                     <div className={`row ${selectedRow === 3 ? 'active' : ''}`} onClick={() => handleRowClick(3)}>Reject request 3</div>
                     <div className={`row ${selectedRow === 4 ? 'active' : ''}`} onClick={() => handleRowClick(4)}>Reject request 4</div>
                     <div className={`row ${selectedRow === 5 ? 'active' : ''}`} onClick={() => handleRowClick(5)}>Reject request 5</div>
              </div>
    

      <div className="right-pane">
        {selectedRow && <div>{`Information for Row ${selectedRow}`}</div>}
      

       
      

         
        {/* {confirmMessage && <div>{5555}</div>}  */}

        
        </div>
      </div>
    </>
  )
        }
      


export default Rejected_request;