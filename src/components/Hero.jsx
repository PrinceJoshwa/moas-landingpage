

// import { motion, useSpring } from "framer-motion";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import bgimg1 from "../assets/bgimg1.jpeg";

// const CountUp = ({ end, duration = 2 }) => {
//   const [count, setCount] = useState(0);
//   const spring = useSpring(0, { duration: duration * 1000 });

//   useEffect(() => {
//     spring.set(end);
//   }, [spring, end]);

//   useEffect(() => {
//     return spring.onChange((latest) => {
//       setCount(Math.floor(latest));
//     });
//   }, [spring]);

//   return <>{count}</>;
// };

// export default function Hero() {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate function

//   const handleButtonClick = () => {
//     navigate("/course-finder"); // Navigate to the course-finder page
//   };

//   return (
//     <div id="hero" className="min-h-screen bg-white">
//       <main className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div className="space-y-8">
//           <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
//             Study abroad with expert guidance from{" "}
//             <span className="text-blue-900">international students</span>
//           </h1>

//           <div className="grid grid-cols-4 gap-4">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-blue-900">
//                 <CountUp end={1500} />+
//               </div>
//               <div className="text-sm text-gray-600">universities</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-blue-900">
//                 <CountUp end={3} />K
//               </div>
//               <div className="text-sm text-gray-600">mentors</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-blue-900">
//                 <CountUp end={40} />
//               </div>
//               <div className="text-sm text-gray-600">countries</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-blue-900">
//                 <CountUp end={90} />K+
//               </div>
//               <div className="text-sm text-gray-600">success stories</div>
//             </div>
//           </div>

//           {/* Updated button to use navigation */}
//           <button
//             className="bg-orange-500 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             onClick={handleButtonClick} // Handle navigation on click
//           >
//             Find my dream university
//             <motion.svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               animate={{ x: isHovered ? 5 : 0 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <path d="M5 12h14" />
//               <path d="m12 5 7 7-7 7" />
//             </motion.svg>
//           </button>
//         </div>

//         <div className="relative w-[500px] h-[500px]">
//           {/* Rotating flags */}
//           <motion.div
//             className="absolute inset-0"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           >
//             <div className="absolute inset-0 border-2 border-purple-100 rounded-full" />
//             <div className="absolute inset-8 border-2 border-purple-100 rounded-full" />

//             {/* Country flags */}
//             <div
//               className="absolute"
//               style={{
//                 top: "50%",
//                 left: "0%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs">
//                 🇮🇳
//               </div>
//             </div>

//             <div
//               className="absolute"
//               style={{
//                 top: "50%",
//                 right: "0%",
//                 transform: "translate(50%, -50%)",
//               }}
//             >
//               <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs">
//                 🇺🇸
//               </div>
//             </div>
//           </motion.div>

//           {/* Static text boxes */}
//           <div className="absolute inset-0 flex flex-col items-center justify-between py-8">
//             <div className="bg-white p-2 rounded-lg shadow-lg">
//               <p className="text-xs">
//                 Clarke is an alumni from Oxford University
//               </p>
//             </div>
//             <div className="bg-white p-2 rounded-lg shadow-lg">
//               <p className="text-xs">
//                 Arnav looking forward to join Oxford university
//               </p>
//             </div>
//           </div>

//           {/* Center image */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
//             <img
//               src={bgimg1}
//               alt="Student"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import { motion, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgimg1 from "../assets/bgimg1.jpeg";

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const spring = useSpring(0, { duration: duration * 1000 });

  useEffect(() => {
    spring.set(end);
  }, [spring, end]);

  useEffect(() => {
    return spring.onChange((latest) => {
      setCount(Math.floor(latest));
    });
  }, [spring]);

  return <>{count}</>;
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/course-finder");
  };

  return (
    <div id="hero" className="min-h-screen bg-white overflow-hidden">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-12 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Study abroad with expert guidance from{" "}
              <span className="text-blue-900">international students</span>
            </h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { end: 1500, label: "universities" },
                { end: 3, label: "mentors", suffix: "K" },
                { end: 40, label: "countries" },
                { end: 90, label: "success stories", suffix: "K+" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-bold text-blue-900">
                    <CountUp end={stat.end} />
                    {stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="w-full sm:w-auto bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleButtonClick}
            >
              <span className="text-sm sm:text-base">Find my dream university</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </motion.svg>
            </button>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
            {/* Rotating flags */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border-2 border-purple-100 rounded-full" />
              <div className="absolute inset-8 border-2 border-purple-100 rounded-full" />

              {/* Flags */}
              {[
                { flag: "🇮🇳", position: "left-0", bg: "bg-orange-600" },
                { flag: "🇺🇸", position: "right-0", bg: "bg-blue-700" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 ${item.position} transform -translate-y-1/2 ${
                    item.position === "left-0" ? "-translate-x-1/2" : "translate-x-1/2"
                  }`}
                >
                  <div className={`w-6 sm:w-8 h-6 sm:h-8 ${item.bg} rounded-full flex items-center justify-center text-white text-xs`}>
                    {item.flag}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Text Boxes */}
            <div className="absolute inset-0 flex flex-col items-center justify-between py-4 sm:py-8">
              {[
                "Clarke is an alumni from Oxford University",
                "Arnav looking forward to join Oxford university",
              ].map((text, index) => (
                <div key={index} className="bg-white p-2 rounded-lg shadow-lg max-w-[200px] sm:max-w-none">
                  <p className="text-[10px] sm:text-xs">{text}</p>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={bgimg1}
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}