import {useEffect,useState} from 'react';
import './quotation.css';
 
const Quotation = () => {
   
  const[record,setRecord] = useState([])
  const [modeldata,setModeldata] = useState({
     id:'',
     userName:'',
     username:'',
     email:'',
     website:''
  })
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users/')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },[])
   
    const showDetail = (id) =>
    {
      
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(resposne=> resposne.json())
      .then(res=>setModeldata(res))
    }
 
 
    return (
    <div className="container_Acc">
        <div className="row mt-2 "> 
            <div className="abcd">
              <h5 className="Hedding_Acc_Req">
               Accept Request
              </h5>
                <div class="Tab_Main">
                    <table className="table table-striped table-sm">
                        <thead className="Tab_head">
                            <tr>
                                <th>React ID</th>
                                <th>User ID</th>
                                <th>User name</th>
                                <th>Contact No</th>
                                <th>Date</th>
                                <th>paiment</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                          {record.map((names,index)=>
                           <tr key={index}>
                               <td>{names.id}</td>
                              <td>{names.name}</td>
                              <td>{names.username}</td>
                              <td>{names.email}</td>
                              <td>{names.website}</td>
                              <td><button class="btn btn-primary" onClick={(e)=>showDetail(names.id)} data-toggle="modal" data-target="#myModal">Get Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            
                          </div>     
 
 
{/* 
 Model Box  */}
 
      <div className="modal" id="myModal">
        <div className="modal-dialog" style={{width:"700px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Row No : {modeldata.id}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
             
            <div class="modal-body">
            <table class="table table-striped table-sm">
                        <thead class="thead-light">
                            <tr>
                                <th>React ID</th>
                                <th>User ID</th>
                                <th>User name</th>
                                <th>Contact No</th>
                                <th>Date</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                           <tr >
                              <td>{modeldata.id}</td>
                              <td>{modeldata.name}</td>
                              <td>{modeldata.username}</td>
                              <td>{modeldata.email}</td>
                              <td>{modeldata.website}</td>
                               
                           </tr>
                          
                        </tbody>
                    </table>
            </div>
             
             
            <div class="modal-footer">
              <button type="button" class="close_btn" data-dismiss="modal">Close</button>
            </div>
             
          </div>
        </div>
      </div>
 
    </div>
    )
}
 
 
export default Quotation


