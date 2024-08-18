import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div
        className="h-96 w-screen bg-cover bg-center relative text-white"
        style={{
          backgroundImage:
            "url(https://www.state.gov/wp-content/uploads/2023/07/shutterstock_655126330v2.jpg)",
        }}
      >
        <div className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl whitespace-nowrap font-extrabold md:text-5xl">
            Contact Us
          </h1>
        </div> 
      </div>

      <div className=" flex flex-col md:flex-row justify-between p-4 items-center gap-4 ">
        <div className="first-col  rounded-lg shadow-md w-full md:w-1/2 bg-gray-100 h-80 p-4 ">
          <h1 className="text-2xl p-1">Contact Details</h1>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <p>info@travelagency.com</p>
          </div>

          <div className="flex items-center gap-2">
            <FaPhone />
            <p>9805400958</p>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkedAlt />
            <p>Butwal,Rupandehi</p>
          </div>
        </div>

        <div className="second-col  rounded-lg shadow-md w-full md:w-1/2 px-2 py-4 h-1.2 bg-gray-100 h-80 p-4">
          <h1 className="text-2xl p-1">Get in Touch</h1>
          <form className="flex flex-col gap-2">
            <label>Name</label>
            <input type="text" placeholder="Enter name" className="px-2 py-1" />

            <label>E-mail</label>
            <input
              type="text"
              placeholder="Enter e-mail"
              className="px-2 py-1"
            />

            <label>Message</label>
            <textarea
              placeholder="Write message"
              className="px-2 py-1"
              cols="50"
              rows="4"
            />
          </form>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between p-4 items-center gap-4">
      <div className="first-col rounded-lg shadow-md w-full md:w-1/2 bg-gray-100 h-80 p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
        <h1 className="text-2xl p-1">Contact Details</h1>
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <p>info@travelagency.com</p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone />
          <p>9805400958</p>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkedAlt />
          <p>Butwal, Rupandehi</p>
        </div>
      </div>

      <div className="second-col rounded-lg shadow-md w-full md:w-1/2 px-2 py-4 h-80 bg-gray-100 p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
        <h1 className="text-2xl p-1">Get in Touch</h1>
        <form className="flex flex-col gap-2">
          <label>Name</label>
          <input type="text" placeholder="Enter name" className="px-2 py-1 rounded border border-gray-300" />
          <label>E-mail</label>
          <input type="email" placeholder="Enter e-mail" className="px-2 py-1 rounded border border-gray-300" />
          <label>Message</label>
          <textarea placeholder="Write message" className="px-2 py-1 rounded border border-gray-300" cols="50" rows="4" />
        </form>
      </div>
    </div> */}
    </div>
  );
};

export default Contact;
