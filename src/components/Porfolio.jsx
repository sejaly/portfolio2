// import React from "react";
// import java from "../assets/java.png";
// import python from "../assets/python.webp";
// import mongoDB from "../assets/mongodb.jpg";
// import express from "../assets/express.png";
// import reactjs from "../assets/reactjs.png";
// import nodejs from "../assets/node.png";
// function Porfolio() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: mongoDB,
//       name: "MongoDB",
//     },
//     {
//       id: 2,
//       logo: express,
//       name: "Express",
//     },
//     {
//       id: 3,
//       logo: reactjs,
//       name: "ReactJS",
//     },
//     {
//       id: 4,
//       logo: nodejs,
//       name: "NodeJS",
//     },
//     {
//       id: 5,
//       logo: python,
//       name: "Python",
//     },
//     {
//       id: 6,
//       logo: java,
//       name: "Java",
//     },
//   ];
//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
//         <span className=" underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img
//                 src={logo}
//                 className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
//                 alt=""
//               />
//               <div>
//                 <div className="px-2 font-bold text-xl mb-2">{name}</div>
//                 <p className="px-2 text-gray-700">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//               <div className=" px-6 py-4 space-x-3 justify-around">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
//                   Video
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   Source code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Porfolio;

import React from "react";
import java from "../assets/java.png";
import python from "../assets/python.webp";
import mongoDB from "../assets/image1.png";
import express from "../assets/express.png";
import reactjs from "../assets/image.png";
import nodejs from "../assets/image2.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "Online Exam Proctoring System",
      description: "An online exam proctoring system to prevent cheating and ensure the integrity of online exams.",
      sourceCode: "https://github.com/sejaly/Online_Exam_Proctoring",
      liveSite: "https://drive.google.com/file/d/1uNl_4gi3Wg06lr2hsXzjcTpGoutXtCmq/view?usp=sharing",
    },
    {
      id: 2,
      logo: nodejs,
      name: "Course Portal",
      description: "A course portal that provides resources and materials for students to access course content.",
      sourceCode: "https://github.com/sejaly/course_portal",
      liveSite: "https://course-portal1.onrender.com",
    },
    {
      id: 3,
      logo: mongoDB,
      name: "Blogging Platform",
      description: "A blogging platform that allows users to create, edit, and publish blog posts.",
      sourceCode: "https://github.com/sejaly/Our_Blogs",
      liveSite: "https://sparkly-panda-d2d806.netlify.app/",
    },
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {cardItem.map(({ id, logo, name, description, sourceCode, liveSite }) => (
            <div
              className="md:w-[300px] h-[400px] border-[2px] rounded-lg shadow-lg p-4 flex flex-col justify-between cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <div className="flex flex-col items-center">
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mb-4"
                  alt={name}
                />
                <div className="text-center">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
              <div className="flex justify-around mt-4">
                <a
                  href={liveSite}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold px-4 py-2 rounded-full shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
                <a
                  href={sourceCode}
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold px-4 py-2 rounded-full shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
