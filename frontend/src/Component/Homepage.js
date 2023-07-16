import React from "react";
import "./home.css";
import lab from "./images/lab.png"
import lab1 from "./images/lab1.png";
import lab2 from "./images/lab2.png";

const dBlockStyle = {
  width : "100%"
};

function Homepage() {
  
  return (
    <div>
      <div className="container">
        <div className="content">
          <h2>Division of Polymer and Chemical Engineering Technology</h2>
          <h6>Scroll down to see Test Services we offer!</h6>
          {/*<img src={itum} className="right" alt="itum-logo"/>*/}
          {/*<img src={lab} className="center-lab" alt="lab"/>*/}
          <div id="demo" class="carousel slide" data-bs-ride="carousel">
            {/* <!-- Indicators/dots --> */}
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"
              ></button>
            </div>

            {/* <!-- The slideshow/carousel --> */}
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={lab1}
                  alt="Los Angeles"
                  class="d-block"
                  style={dBlockStyle}
                />
                <div class="carousel-caption">
                  <h3>Chemical Tests</h3>
                  <p>Have your test reports by ITUM</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={lab2}
                  alt="Chicago"
                  class="d-block"
                  style={dBlockStyle}
                />
                <div class="carousel-caption">
                  <h3>Polymer Tests</h3>
                  <p>Have your test reports as fast as possible!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={lab}
                  alt="New York"
                  class="d-block"
                  style={dBlockStyle}
                />
                <div class="carousel-caption">
                  <h3>Most accurate Tests</h3>
                  <p>Have your tests done by professional laboratories</p>
                </div>
              </div>
            </div>

            {/* <!-- Left and right controls/icons --> */}
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>

          <table class="table table-striped">
            <thead>
              <tr>
                <th>Test</th>
                <th>Rate (LKR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DSC/sample</td>
                <td>12610</td>
              </tr>
              <tr>
                <td>DSC-Modulated</td>
                <td>14625</td>
              </tr>
              <tr>
                <td>FTIR-ATR</td>
                <td>3100</td>
              </tr>
              <tr>
                <td>FTIR-KBr</td>
                <td>4550</td>
              </tr>
              <tr>
                <td>TGA</td>
                <td>9750</td>
              </tr>
              <tr>
                <td>Sieve Analyser( For 01kg max/20min)</td>
                <td>7600</td>
              </tr>

              <tr>
                <td>Moisture Content (Oven method or moisture balance)</td>
                <td>2280</td>
              </tr>
              <tr>
                <td>Turbidity</td>
                <td>1710</td>
              </tr>
              <tr>
                <td>Melting Point of Powder </td>
                <td>1900</td>
              </tr>
              <tr>
                <td>Viscosity Index</td>
                <td>5700</td>
              </tr>
              <tr>
                <td>Softening Point </td>
                <td>2850</td>
              </tr>
              <tr>
                <td>Torsion Viscometer</td>
                <td>1710</td>
              </tr>
              <tr>
                <td>Penetrometer</td>
                <td>1800</td>
              </tr>
              <tr>
                <td>Digital Viscometer </td>
                <td>1800</td>
              </tr>
              <tr>
                <td>Aniline Point</td>
                <td>7500</td>
              </tr>
              <tr>
                <td>Flash point and fire point (using open cup)</td>
                <td>4620</td>
              </tr>
              <tr>
                <td>Centrifuge (For minimum 15min)</td>
                <td>1800</td>
              </tr>
              <tr>
                <td>pH/Conductivity/Salinity</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>Total Solids</td>
                <td>2500</td>
              </tr>
              <tr>
                <td>Total Suspended Solids</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>Total Dissolved Solids</td>
                <td>2600</td>
              </tr>
              <tr>
                <td>Dissolved Oxygen</td>
                <td>3500</td>
              </tr>
              <tr>
                <td>Residual Chlorine</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>COD (open reflux and Tirametric method)</td>
                <td>2500</td>
              </tr>
              <tr>
                <td>BOD Winckler method</td>
                <td>4000</td>
              </tr>

              <tr>
                <td>Oil & Grease</td>
                <td>3600</td>
              </tr>
              <tr>
                <td>
                  Nitrate/ Nitrite/Total Nitrogen/Phosphate colorimetric method
                </td>
                <td>2100</td>
              </tr>
              <tr>
                <td>Total Hardness/ Bicarbonate</td>
                <td>3500</td>
              </tr>
              <tr>
                <td>Oven drying/ hour</td>
                <td>1800</td>
              </tr>
              <tr>
                <td>Distillation/ hour</td>
                <td>3500</td>
              </tr>
              <tr>
                <td>Soxhlet Extraction/hour</td>
                <td>3500</td>
              </tr>
              <tr>
                <td>Jar tester</td>
                <td>3500</td>
              </tr>
              <tr>
                <td>Vacuum oven/hour</td>
                <td>2500</td>
              </tr>
              <tr>
                <td>UV Spectroscopy (Preparing Callibartion curve)</td>
                <td>10000</td>
              </tr>
              <tr>
                <td>
                  UV Spectroscopy (Determining concentration of unknown sample
                  by using the calibration curve)sample )
                </td>
                <td>500</td>
              </tr>
              <tr>
                <td>
                  UV Spectroscopy (Determining maximum wavelength for a certain
                  chemical compound)/sample
                </td>
                <td>6000</td>
              </tr>
              <tr>
                <td>Internal Mixture / hour</td>
                <td>4500</td>
              </tr>
              <tr>
                <td>Two roll mill/hour</td>
                <td>2800</td>
              </tr>
              <tr>
                <td>Hydraulic press/hour</td>
                <td>2100</td>
              </tr>
              <tr>
                <td>De Mattia flexing test /sample</td>
                <td>8250</td>
              </tr>
              <tr>
                <td>Tensile properties test/ Tear Resistant test /sample</td>
                <td>1800</td>
              </tr>
              <tr>
                <td>DIN Abrasion test /sample</td>
                <td>2400</td>
              </tr>
              <tr>
                <td>Rheograph (MDR)</td>
                <td>3000</td>
              </tr>

              <tr>
                <td>Moony viscosity Test</td>
                <td>3150</td>
              </tr>

              <tr>
                <td>Rebound resilience test /sample</td>
                <td>1350</td>
              </tr>

              <tr>
                <td>Specific gravity test /sample</td>
                <td>1350</td>
              </tr>

              <tr>
                <td>Hardness test</td>
                <td>1350</td>
              </tr>

              <tr>
                <td>Melt Flow Index</td>
                <td>3000</td>
              </tr>

              <tr>
                <td>Spectrum Analysis</td>
                <td>10500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
