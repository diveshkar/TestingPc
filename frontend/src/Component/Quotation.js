// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function Quotation() {
//   const location = useLocation();
//   const { quotation } = location.state || {}; // Use default empty object if location.state is null

//   if (document.cookie.includes('sessionToken')) {
//     if (!quotation) {
//       // Render a loading state or error message if quotation is null
//       return <p>Loading...</p>;
//     } else{
//       return (
//         <div>
//           <div>
//             <p>Username: {quotation.username}</p>
//             <p>Tests: {quotation.tests}</p>
//             <p>Parameters: {quotation.parameters}</p>
//             <p>sampleName: {quotation.sampleName}</p>
//             <p>shelfLife: {quotation.shelfLife}</p>
//             <p>storage: {quotation.storage}</p>
//             <p>sampleType: {quotation.sampleType}</p>
//             <p>hazardous: {quotation.hazardous}</p>
//             <p>sampleDisposition: {quotation.sampleDisposition}</p>
//             <p>total_price: {quotation.total_price}</p>
//             <p>discounted_price: {quotation.discounted_price}</p>
//           </div>
//         </div>
//       );
//     }    
//   } else {
//     window.location.href = '/';
//     return null; // Render nothing or a loading state while redirecting
//   }
// }

// export default Quotation;
