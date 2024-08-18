import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const destinations = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Pokhara_and_Phewa_Lake.jpg/800px-Pokhara_and_Phewa_Lake.jpg",
    title: "Pokhara",
    description:
      "Pokhara is a beautiful city located at the heart of Nepal.It is a popular tourist destination. ",
  },
  {
    image:
      "https://i.ytimg.com/vi/8cDvYXCZad8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAfJlkqbx2hP0E-JTJbkc6G0SuZAg",
    title: "Mustang",
    description:
      "Mustang is a beautiful place located at the himalayas of Nepal.It is a popular tourist destination. ",
  },
  {
    image:
      "https://www.muchbetteradventures.com/magazine/content/images/2023/10/GettyImages-894593212.jpeg",
    title: "Kathmandu",
    description:
      "Kathmandu is a beautiful city located at the centre of Nepal.It is a popular tourist destination. ",
  },
  //   {
  //     image:
  //       "https://nepaltraveller.com/images/main/1605091331.sidetrackimagerara.jpg",
  //     title: "Mugu",
  //     description:
  //       "Mugu is a beautiful place located at the himalayas of Nepal.It is a popular tourist destination. ",
  //   },
];

function PopularDestinations() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Popular Destinations
      </h2>
      <div className="container mx-auto px-2 md:px-4 lg:px-8" data-aos='fade-up'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={city.image}
                alt={city.title}
                className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90 animate__animated animate__bounce"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{city.title}</h3>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDestinations;
