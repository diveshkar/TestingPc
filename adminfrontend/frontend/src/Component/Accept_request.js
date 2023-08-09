import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav1 from './Nav';
import { useNavigate } from 'react-router-dom';
import img1 from './images/Untitled-3.jpeg';
import './accept_request.css';

function Accept_request() {
  const [employees, setEmployees] = useState([]);
  const [modeldata, setModeldata] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/TestingPc/adminbackend/avireq.php');
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  function Fwd_Pay() {
    navigate("/Homepage/Accept_request/payment");
  }

  const getDetails = async (orderId) => {
   
  };

  const acceptRequest = async (orderId) => {
    try {
      const response = await axios.post('http://localhost/TestingPc/adminbackend/accpetclick.php', {
        orderId: orderId,
      });
      console.log(response.data); // Handle the response from the backend
      fetchData(); // Fetch updated data after accepting the request
    } catch (error) {
      console.log(error);
    }
  };

  const rejectRequest = async (orderId) => {
    try {
      const response = await axios.post('http://localhost/TestingPc/adminbackend/rejectclick.php', {
        orderId: orderId,
      });
      console.log(response.data); // Handle the response from the backend
      fetchData(); // Fetch updated data after rejecting the request
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container_Acc">
      <div className="row mt-2 ">
        <div className="abcd">
          <h5 className="Hedding_Acc_Req">Accept Request</h5>
          <div class="Tab_Main">
            <table className="table table-striped table-sm">
              <thead className="Tab_head">
                <tr>
                  <th>orderID</th>
                  <th>tests</th>
                  <th>username</th>
                  <th>parameters</th>
                  <th>sampleName</th>
                  <th>sampleType</th>
                  <th>sampleDisposition</th>
                  <th>Upload File</th>
                  <th>payment</th>
                  <th>status</th>
                  <th>accept request</th>
                  <th>reject request</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.orderID}</td>
                    <td>{employee.tests}</td>
                    <td>{employee.username}</td>
                    <td>{employee.parameters}</td>
                    <td>{employee.sampleName}</td>
                    <td>{employee.sampleType}</td>
                    <td>{employee.sampleDisposition}</td>
                    <td>
                      <button type="button" class="btn btn-secondary" onClick={Fwd_Pay}>
                        Upload
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-primary"
                        onClick={() => getDetails(employee.orderID)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Get Details
                      </button>
                    </td>
                    <td>{employee.status}</td>
                    <td>
                      <button className="btn btn-success" onClick={() => acceptRequest(employee.orderID)}>
                        Accept
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => rejectRequest(employee.orderID)}>
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Model Box */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Detail No: {modeldata.orderID}</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <table className="table table-striped table-sm">
                <thead className="Tab_head">
                  <tr>
                    <th>orderID</th>
                    <th>tests</th>
                    <th>parameters</th>
                    <th>sampleName</th>
                    <th>sampleType</th>
                    <th>sampleDisposition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={modeldata.id}>
                    <td>{modeldata.orderID}</td>
                    <td>{modeldata.tests}</td>
                    <td>{modeldata.parameters}</td>
                    <td>{modeldata.sampleName}</td>
                    <td>{modeldata.sampleType}</td>
                    <td>{modeldata.sampleDisposition}</td>
                  </tr>
                </tbody>
              </table>

              <div className="Container_Cont">
                <img src={img1} height={"100%"} width={"100%"} />
              </div>
            </div>
            <div class="modal-btn">
              <button type="button" className="btn01" data-dismiss="modal">
                Close_btn01
              </button>
              <button type="button" className="btn02" data-dismiss="modal">
                Close_btn02
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accept_request;
