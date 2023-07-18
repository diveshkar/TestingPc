
import React, { useEffect, useState } from 'react';
import './available_request.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Available_Request() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
//from here
  const [orderData, setOrderData] = useState({});

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const fetchOrderData = (row) => {
    fetch(`http://localhost/react/order_view.php?row=${row}`)
      .then(response => response.json())
      .then(data => setOrderData(data))
      .catch(error => console.error(error));
  };
  // fro here


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

 

 
  {/*function Bb() {
   const rejectB= (e) => {
    e.preventDefault();
      
    <div className="button-container">
      <div className='Pop_Title'>Please conform and select laboratarian...!</div>
      <button className="accept-button" onClick={handleAcceptClick} >Accept</button>
      <button className="rejectB">Reject</button>
    </div>
  } */}
  

   {/* if (selectedOption) {
      setShowPopup(false);
      setConfirmMessage(`Accepted ${selectedOption}`);
             }
     else {
      setConfirmMessage('Please select an option.');
              }     */}
  
              const navigate = useNavigate();
              function backt(){
                  navigate("/home");
              }
          
  return (
        
        <>

         <button className="back-button" onClick={backt}>Back</button>
         <div className='Avb_Req'>Available Request</div>
      
     <div className="container_Ab">
      
              <div className="left-pane">
                <div className={`row ${selectedRow === 1 ? 'active' : ''}`} onClick={() => { handleRowClick(1); fetchOrderData(1); }}>Row 1</div>
                <div className={`row ${selectedRow === 2 ? 'active' : ''}`} onClick={() => { handleRowClick(2); fetchOrderData(2); }}>Row 2</div>
                <div className={`row ${selectedRow === 3 ? 'active' : ''}`} onClick={() => { handleRowClick(3); fetchOrderData(3); }}>Row 3</div>
                <div className={`row ${selectedRow === 4 ? 'active' : ''}`} onClick={() => { handleRowClick(4); fetchOrderData(4); }}>Row 4</div>
                <div className={`row ${selectedRow === 5 ? 'active' : ''}`} onClick={() => { handleRowClick(5); fetchOrderData(5); }}>Row 5</div>
              </div>
    

      <div className="right-pane">
      {selectedRow && <div>{`Order ID for Row ${selectedRow}: ${orderData.order_id}`}</div>}
      

        { showPopup && (
           <div className="popup-container_Con">
            <div className='Pop_Title'>Please conform and select laboratarian...!</div>

            <label>
              <input
                type="radio"
                value="A"
                checked={selectedOption === 'A'}
                onChange={() => handleOptionChange('A')}
              />
                      Laboratarian 01
            </label>

            <label>
              <input
                type="radio"
                value="B"
                checked={selectedOption === 'B'}
                onChange={() => handleOptionChange('B')}
              />
                      Laboratarian 02
            </label>

            <label>
              <input
                type="radio"
                value="C"
                checked={selectedOption === 'C'}
                onChange={() => handleOptionChange('C')}
              />
                       Laboratarian 03
            </label>

            <label>
              <input
                type="radio"
                value="D"
                checked={selectedOption === 'D'}
                onChange={() => handleOptionChange('D')}
              />
                      Laboratarian 04
            </label>
  
            <button className='Click_con' onClick={handleConfirmClick}>Confirm</button>
        </div>
      

         )}
        {/* {confirmMessage && <div>{5555}</div>}  */}

        {showRejectPopup && (
            <div className="popup-container_Reg">
              <div className="Pop_Title">Please select an option...!</div>
              

              <div className="horizontal-buttons">
              <Link to="/Homepage/Available_Request/Rejected_request" className='nav-item-2'>
                <button className='Reject-btn' onClick={() => handleRejectOptionClick('Reject')}>Reject</button>
              </Link>
                <button className='Cancel-btn' onClick={() => handleRejectOptionClick('cansel')}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>

    
        <div className="button-container">

          <button className="accept-button" onClick={handleAcceptClick} >Accept</button>
          <button className="reject-button" onClick={handleRejectClick}>Reject</button>
        </div>



      
    
    </>
  )
        }
      


export default Available_Request;
