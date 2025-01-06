
// import React from 'react';
// import sopBackground from '../assets/sop.png'; // Import the image from the assets folder

// function SOP() {
//   return (
//     <section 
//     className="min-h-screen bg-orange-500 text-white bg-cover bg-center bg-no-repeat relative"
//     style={{ 
//       backgroundImage: `url(${sopBackground})`, 
//       backgroundSize: 'cover', 
//       backgroundPosition: 'center',  
//     }}
//   >
//     </section>
//   );
// }

// export default SOP;

import React from 'react';
import sopBackground from '../assets/sop.png'; // Import the image from the assets folder
import '../index.css'; // Import the custom CSS file

function SOP() {
  return (
    <section className="text-white">
      <img 
        id="sop" 
        src={sopBackground} 
        alt="SOP Background" 
        className="w-auto mx-auto"
      />
    </section>
  );
}

export default SOP;
