import 'animate.css';
// import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";



const images = [
  {
    image:
      "https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image:
      "https://images.pexels.com/photos/3287165/pexels-photo-3287165.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image:
      "https://images.pexels.com/photos/3097592/pexels-photo-3097592.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image:
      "https://images.pexels.com/photos/2040471/pexels-photo-2040471.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image:
      "https://images.pexels.com/photos/25912672/pexels-photo-25912672/free-photo-of-scenic-view-of-the-annapurna-mountain-range-in-nepal.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image:
      "https://images.pexels.com/photos/4277491/pexels-photo-4277491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Gallery = () => {
  const constraintsRef = useRef(null);


  // useEffect(()=>{
  //   AOS.init({duration:2000})
  // },[])
  return (
    <div>
      <div>
        <div
          className="h-96 w-screen bg-cover bg-center relative text-white fade" 
          style={{
            backgroundImage:
              "url(https://www.state.gov/wp-content/uploads/2023/07/shutterstock_655126330v2.jpg)",
          }}
        >
          <div className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-3xl whitespace-nowrap font-extrabold md:text-5xl">
              Gallery
            </h1>
          </div>
        </div>

        <div 
        ref={constraintsRef}
        
        className="images grid grid-cols-1 md:grid-cols-3 p-10 gap-6 overflow-hidden" data-aos='fade-right'>
          {images.map((x, index) => (
            
            <motion.img
            drag dragConstraints={constraintsRef}             
            key={index}
              src={x.image}
              className="rounded-md h-full w-full object-cover overflow-hidden transform transition-transform duration-300 hover:scale-105"
            />
        
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
