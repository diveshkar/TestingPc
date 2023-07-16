import React, { useState } from 'react'
import './order.css';
import orderImg from './images/order.jpg';
import axios from 'axios';
// import Quotation from './Quotation';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Order() {
  
  const navigate = useNavigate();
  const [formdata , setFormdata] = useState({
    tests: "",
    parameters: "",
    sampleName:"",
    shelfLife: "",
    storage:"",
    sampleType:"",
    hazardous:"",
    sampleDisposition:"",
    agree: false,
  });
  // const [quotation , setQuotation] = useState({});
  // useEffect(() => {
  //   if (Object.keys(quotation).length > 0) {
  //     window.location.href = '/quotation';
  //   }
  // }, [quotation]);
  const Change = (e) => {
    if (e.target.type === 'checkbox') {
      setFormdata({ ...formdata, [e.target.id]: e.target.checked });
    } else if (e.target.type === 'select-one') {
      setFormdata({ ...formdata, tests: e.target.value });
    } else {
      setFormdata({ ...formdata, [e.target.id]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let url = 'http://localhost/testingpc/backend/order.php';
    axios.post(url , {
      formdata: formdata,
      Username: localStorage.getItem('Username'),
      Email: localStorage.getItem('Email')
    }).then(function(response) {
      console.log(response);
      // setQuotation(response.data.quotation);
      // console.log(quotation);
      if(response.data.success) {
        // window.location.href = '/purchase';
        window.alert("order submited");
        const quotationData = response.data.quotation;
        // setQuotation(quotationData);
        navigate('/quotation', { state: { quotation: quotationData } });
        // console.log(quotation);
        // console.log(formdata);
        // window.location.reload();
      }
    })
    .catch(function(error){
      window.alert(error);
    })
    
  }
  if(document.cookie.includes('sessionToken'))
  {
    return (
      <div>
        <section>
        <div className="imgOrder">
            <img src={orderImg} alt='chemical-lab-vector'/>
          </div>
          <div className="contentBxOrder">
          <div class="container mt-3">
    <h2>Select your test here!</h2>
    <br/>
    <form onSubmit={handleSubmit}>
      {/*1st row start */}
      <div class="row">
        <div class="col">
        <select id="tests" value = {formdata.tests} onChange={Change} name="tests" className='form-control'>
      <option>Select tests</option>
      <option value="DSC/Sample">DSC/Sample</option>
      <option value="DSC-Modulated">DSC-Modulated</option>
      <option value="FTIE-ATR">FTIE-ATR</option>
      <option value="FTIR-KBr">FTIR-KBr</option>
      <option value="TGA">TGA</option>
      <option value="Sieve">Sieve Analyser(For 01kg max/20min)</option>
      <option value="Moisture">Moisture Content(Oven method or moisture balance)</option>
      <option value="Turbidity">Turbidity</option>
      <option value="Melting-point-of-powder">Melting Point of Powder</option>
      <option value="Softening-point">Softening Point</option>
      <option value="Torsion-viscometer">Torsion Viscometer</option>
      <option value="Penetrometer">Penetrometer</option>
      <option value="Digital-Viscometer">Digital Viscometer</option>
      <option value="Aniline-point">Aniline Point</option>
      <option value="Flash-point">Flash point and fire point(using open cup)</option>
      <option value="Centrifuge">Centrifuge(For minimum 15min)</option>
      <option value="pH">pH/Conductivity/Salinity</option>
      <option value="Total-solids">Total Solids</option>
      <option value="Total-suspended-solids">Total Suspended Solids</option>
      <option value="Total-dissolved-solids">Total Dissolved Solids</option>
      <option value="Dissolved-oxygen">Dissolved Oxygen</option>
      <option value="Residual-chlorine">Residual Chlorine</option>
      <option value="COD">COD(open reflux and Tirametric method)</option>
      <option value="BOD">BOD Winckler method</option>
      <option value="Oil-and-grease">Oil & Grease</option>
      <option value="Nitrate">Nitrate/Nitrite/Total Nitrogen/Phosphate colorimetric method</option>
      <option value="Total-hardness">Total Hardness/Bicarbonate</option>
      <option value="Oven-drying">Oven drying/hour</option>
      <option value="Distillation">Distillation/hour</option>
      <option value="Soxhlet-extraction">Soxhlet Extraction/hour</option>
      <option value="Jar-tester">Jar tester</option>
      <option value="Vaccum-oven">Vacuum oven/hour</option>
      <option value="UV-1">UV Spectroscopoy(Preparing Callibartion curve)</option>
      <option value="UV-2">UV Spectroscopy(Determining concentration of unkown sample by using teh calibration curve)/sample</option>
      <option value="UV-3">UV Spectroscopy(Determining maximum wavelength for a certain chemical compound)/sample</option>
      <option value="Internal-mixture">Internal Mixture/hour</option>
      <option value="Two-roll-mill">Two roll mill/hour</option>
      <option value="Hydraulic-press">Hydraulic press/hour</option>
      <option value="De-mattia">De Mattia flexing test/sample</option>
      <option value="Tensile">Tensile properties test/Tear Resistent test/sample</option>
      <option value="DIN">DIN Abrasion test/sample</option>
      <option value="MDR">Rheograph(MDR)</option>
      <option value="Moony-viscosity">Moony viscosity Test</option>
      <option value="Rebound-resilience">Rebound resilience test/sample</option>
      <option value="Specific-gravity">Specific-gravity test/sample</option>
      <option value="Hardness-test">Hardness test</option>
      <option value="Melt-flow">Melt Flow Index</option>
      <option value="Spectrum-analysis">Spectrum Analysis</option>
      
    </select>
        </div>
        <div class="col">
          <input id='sampleName' value={formdata.sampleName} onChange={Change} type="text" className="form-control" placeholder="Enter Sample's name" name="sample-name"/>
        </div>
      </div>
      <br/>
  {/*2nd row start */}
  <div class='row'>
    <div class='col'>
    <input id='parameters'value={formdata.parameters} onChange={Change} type="text" className="form-control" placeholder="Enter Test Parameters" name="parameters"/>
    </div>
    <div class='col'>
    <input id='shelfLife' value={formdata.shelfLife} onChange={Change} type="text" className="form-control" placeholder="Enter Sample Shelf Life" name="shelf-life"/>
    </div>
  </div>
  <br/>
  {/*3rd row start */}
  <div class='row'>
    <div class='col'>
    <input id='storage' value={formdata.storage} onChange={Change} type="text" className="form-control" placeholder="Enter Sample storage condition" name="storage"/>
    </div>
    <div class='col'>
    <input id='sampleType' value={formdata.sampleType} onChange={Change} type="text" className="form-control" placeholder="Sample type (Organic/Inorganic/Polymer/Other)" name="sample-type"/>
    </div>
  </div>
  <br/>
  
  {/*4th row start */}
  <div class='row'>
    <div class='col'>
    <input id='hazardous' value={formdata.hazardous} onChange={Change} type="text" className="form-control" placeholder="Known hazardous of the sample (Organic/Inorganic/Polymer/Other) " name="hazardous"/>
    </div>
    <div class='col'>
    <input id='sampleDisposition' value={formdata.sampleDisposition} onChange={Change} type="text" className="form-control" placeholder="Sample Disposition" name="sample-disposition"/>
    </div>
  </div>
  <br/>
  <br/>
  {/*5th row start-checkbox agreement */}
  <div class='row'>
    <div class='col'>
    <div class="form-check">
        <input type="checkbox" checked = {formdata.agree} onChange={Change} class="form-check-input" id="agree" name="agree" />
        <label class="form-check-label" for="check1">I clearly mentioned the test information & I agree to the terms and conditions</label>
      </div>
    </div>
  <br/>
  </div>
  <input type="submit"  class="btn-submit-order" value="Submit"></input>
    </form>
  </div>
          </div>  
        </section>
      </div>
    )
}else {
  // <Homepage />
  window.location.href = '/';
}
}
export default Order;
