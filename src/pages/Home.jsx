// import Client from "../components/Client";
// import PopularDestinations from "../components/PopularDestinations";
// import Services from "../components/Services";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import Typewriter from 'typewriter-effect/dist/core';



// const Home = () => {
//   useEffect(()=>{
//     AOS.init({duration:1000})
//   },[])
//   return (
//     <>
//       <div
//         className="h-screen w-screen bg-cover bg-center relative text-white" data-aos='fade-up'
//         style={{
//           backgroundImage:
//             "url(https://www.state.gov/wp-content/uploads/2023/07/shutterstock_655126330v2.jpg)",
//         }}
//       >
//         <div className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
//           <h1 className="text-3xl whitespace-nowrap font-extrabold md:text-5xl">
//             <div>
//             <Typewriter 
//             options={{
//               autoload:false,
//               loop:true,
//               delay:50,
//               strings:["Explore Nepal with us"]
//             }}/> 
//             </div>
            
//           </h1>
//           <p className="mt-1">Discover amazing places at exclusive deals</p>
//           <button className="px-3 py-1 border-2 rounded-full mt-4 hover:bg-blue-100 hover:text-black transition duration-300 ease-in-out transform ">
//             Get Started
//           </button>
//         </div>
//       </div>

//       <PopularDestinations />
//       <Services />
//       <Client />
//     </>
//   );
// };

// export default Home;


import Client from "../components/Client";
import PopularDestinations from "../components/PopularDestinations";
import Services from "../components/Services";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';



const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const typewriter = new Typewriter('.typewriter-text', {
      loop: true,
      delay: 50,
    });

    typewriter.typeString("Explore Nepal with us")
      .pauseFor(2000)  // Optional pause for 2 seconds after each string
      .deleteAll()
      .typeString("Discover amazing places at exclusive deals")
      .pauseFor(2000)
      .start();

    return () => typewriter.stop(); // Clean up typewriter instance on unmount
  }, []);

  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center relative text-white"
        style={{
          backgroundImage:
            "url(https://www.state.gov/wp-content/uploads/2023/07/shutterstock_655126330v2.jpg)",
        }}
      >
        <div className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl whitespace-wrap md:whitespace-nowrap font-extrabold md:text-4xl typewriter-text"></h1>
          {/* <p className="mt-1">Discover amazing places at exclusive deals</p> */}
          <button className="px-3 py-1 border-2 rounded-full mt-4 hover:bg-blue-100 hover:text-black transition duration-300 ease-in-out transform ">
            Get Started
          </button>
        </div>
      </div>

      <PopularDestinations />
      <Services />
      <Client />
    </>
  );
};

export default Home;
