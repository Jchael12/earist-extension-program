import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/shapeStyle.css";

const About = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center p-20 overflow-hidden justify-between bg-red-700 text-white">
      <div className="bg-red-900 md:bg-transparent  md:p-5 p-10 w-screen md:w-1/2 lg:w-1/3 rounded-lg">
        <h1 className="text-2xl text-center mb-2 text-amber-300">
          Earist Cavite Campus
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-12 md:mt-0 rounded-md">
        <h2 className="text-lg text-amber-300">Follow Us</h2>
        <div className="flex gap-12 ">
          <Link
            to="https://www.facebook.com/EARISTOfficial"
            className="hover:text-amber-300 hover:scale-125"
          >
            <FaFacebook
              size={25}
              className="icon"
            />
          </Link>
          <Link to="/" className="hover:text-amber-300 hover:scale-125">
            <FaInstagram size={25} className="icon" />
          </Link>
          <Link to="/" className="hover:text-amber-300 hover:scale-125">
            <FaTwitter size={25} className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
