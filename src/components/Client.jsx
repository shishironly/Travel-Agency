import {motion} from 'framer-motion';


const clients=[{
    name:"John Doe",
    image:"https://i0.wp.com/mrleica.com/wp-content/uploads/2018/08/39699055175_5876c32612_b1.jpg?fit=640%2C431&ssl=1",
    text:"Our trip to Nepal was beyond amazing!. The team’s expertise and local knowledge were invaluable." ,
    location:"New York,USA"
},
{
    name:"Steven McMahon",
    image:"https://i.pinimg.com/originals/77/71/68/7771683223d86b237a3304d6f32828b9.jpg",
    text:"Exploring the vibrant streets of Kathmandu and the serene beauty of Pokhara with such a professional and friendly guide was incredible.",
    location:"London,UK"
},
{
    name:"Rober Downey Jr.",
    image:"https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
    text:"Trekking in Nepal was a dream come true. Highly recommended!",
    location:"Sydney,Australia"
},
]

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


function Client() {
    return (
      <div className="bg-gray-100 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Client&apos;s Say ?</h2>
        <div className="container mx-auto px-2 md:px-4 lg:px-8">
          <motion.div
           variants={container}
           initial="hidden"
           animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div  
              variants={item}
                key={index}
                className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <img
                src={client.image}
                alt={client.title}
                className="w-20 h-20 rounded-full m-auto mt-5 object-cover transition-opacity duration-300 hover:opacity-90"
              />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-center ">{client.name}</h3>
                  <p className="text-gray-600 pb-2">{client.location}</p>
                  <p className="text-gray-600 italic">{client.text}</p>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
  
export default Client;
