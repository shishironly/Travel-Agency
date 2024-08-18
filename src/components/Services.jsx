
import { BiSupport } from "react-icons/bi";
import { FaHotel } from "react-icons/fa6";
import { MdOutlineFlight } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const services= [
  {
    icon:<MdOutlineFlight />,
    title: "Flight Booking",
    description:
      "Pokhara is a beautiful city located at the heart of Nepal.It is a popular tourist destination. ",
  },
  {
    icon:<FaHotel />,
    title: "Hotel Booking",
    description:
      "Mustang is a beautiful place located at the himalayas of Nepal.It is a popular tourist destination. ",
  },
  {
    icon: <BiSupport />,
    title: "Support",
    description:
      "Kathmandu is a beautiful city located at the centre of Nepal.It is a popular tourist destination. ",
  }
]

function PopularDestinations() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="container mx-auto px-2 md:px-4 lg:px-8" data-aos='fade-up'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              
              <div className="text-5xl center text-blue-500 flex justify-center mt-3">{service.icon}</div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-center ">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDestinations;
