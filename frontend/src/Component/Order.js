import React from 'react'
import './order.css';
import orderImg from './images/order.jpg';

function Order() {
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
  <form>
    {/*1st row start */}
    <div class="row">
      <div class="col">
      <select id="tests" name="tests" className='form-control'>
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
        <input id='sample-name' type="text" className="form-control" placeholder="Enter Sample's name" name="sample-name"/>
      </div>
    </div>
    <br/>
{/*2nd row start */}
<div class='row'>
  <div class='col'>
  <input id='parameters' type="text" className="form-control" placeholder="Enter Test Parameters" name="parameters"/>
  </div>
  <div class='col'>
  <input id='shelf-life' type="text" className="form-control" placeholder="Enter Sample Shelf Life" name="shelf-life"/>
  </div>
</div>
<br/>
{/*3rd row start */}
<div class='row'>
  <div class='col'>
  <input id='storage' type="text" className="form-control" placeholder="Enter Sample storage condition" name="storage"/>
  </div>
  <div class='col'>
  <input id='sample-type' type="text" className="form-control" placeholder="Sample type (Organic/Inorganic/Polymer/Other)" name="sample-type"/>
  </div>
</div>
<br/>

{/*4th row start */}
<div class='row'>
  <div class='col'>
  <input id='hazardous' type="text" className="form-control" placeholder="Known hazardous of the sample (Organic/Inorganic/Polymer/Other) " name="hazardous"/>
  </div>
  <div class='col'>
  <input id='sample-disposition' type="text" className="form-control" placeholder="Sample Disposition" name="sample-disposition"/>
  </div>
</div>
<br/>
<br/>
{/*5th row start-checkbox agreement */}
<div class='row'>
  <div class='col'>
  <div class="form-check">
      <input type="checkbox" class="form-check-input" id="agree" name="agree" value="agree"/>
      <label class="form-check-label" for="check1">I clearly mentioned the test information & I agree to the terms and conditions</label>
    </div>
  </div>
<br/>
</div>
<input type="submit" class="btn-submit-order" value="Submit"></input>
  </form>
</div>
        </div>
        
      </section>
    </div>
  )
}

export default Order
