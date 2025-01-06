// import React from 'react';
// import { motion } from 'framer-motion';
// import scholarBackground from '../assets/scholarship.png'; // Import the image from the assets folder

// function Scholar() {
//   return (
//     <section 
//     className="min-h-screen 0 text-white bg-cover bg-center bg-no-repeat relative"
//     style={{ 
//       backgroundImage: `url(${scholarBackground})`, 
//       backgroundSize: 'cover', 
//       backgroundPosition: 'center',  
//     }}
//   >
//     </section>
//   );
// }

// export default Scholar;


import React from 'react';
import scholarBackground from '../assets/scholarship.png'; // Import the image from the assets folder
import '../index.css'; // Import the custom CSS file

function Scholar() {
  return (
    <section className="text-white">
      <img 
        id="scholar-section" 
        src={scholarBackground} 
        alt="Scholar Background" 
        className="w-auto mx-auto"
      />
    </section>
  );
}

export default Scholar;
