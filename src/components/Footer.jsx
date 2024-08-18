import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black text-white p-6">

    <div className=" flex  justify-between">
      <div className="first w-1/3">
        <h1 className="text-lg font-extrabold">Travel Agency</h1>
        <p className="text-xs pt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia
          aliquam aut! Ad inventore debitis repellendus deserunt
        </p>
      </div>

      <div className="second">
        <h1 className="text-lg font-extrabold">Quick Links</h1>
        <div className="links flex flex-col text-sm">
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact Us</Link>
        </div>
      </div>

      <div className="third">
        <h1 className="text-lg font-extrabold">Follow Us</h1>
        <div className="icons flex gap-2 py-2 cursor-pointer">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>

        <form>
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="px-2 py-1 text-sm bg-transparent border rounded-md"
          />
        </form>

      </div>
      
      </div>
      <div className="border-b-[1px] border-zinc-500 mt-2"></div>

      <div className="flex justify-between mt-2">
        <p>&copy;2024 Travel Agency. All rights reserved.</p>
        <div className="flex gap-4">
        <Link to="">Privacy Policy</Link>
        <Link to="">Terms of Service</Link>
        </div>
   
      </div>
      </div>


  );
};

export default Footer;
1