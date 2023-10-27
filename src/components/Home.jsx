import ScrollCarousel from "scroll-carousel-react";
import "../styles/shapeStyle.css";
import About from "./About";
import { motion } from "framer-motion";

//importing images
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import bgImg from "../assets/ILE.png";
import "../styles/shapeStyle.css";

const Home = () => {
  const imageSrc = [image1, image2, image3, image4];

  return (
    <div className="overflow-hidden mt-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-12 w-full">
        <div className="flex flex-col items-center justify-between text-center md:mt-24 mt-20 md:p-10 p-12 bg-red-700/90 md:bg-red-700/90 w-screen md:w-full rounded-md border-t-2 border-amber-300">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="md:font-bold md:text-4xl text-3xl text-amber-300"
          >
            Earist Cavite Extension Programs of Information Technology
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block mt-14 text-justify px-7 text-stone-100"
          >
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </motion.p>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 1.5,
            delay: 1,
          }}
          src={bgImg}
          className="rounded-md w-[800px] mt-6"
        />
      </div>
      <div className="custom-shape-divider-bottom-1698169600 hidden md:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col md:flex-row gap-16 items-center justify-around">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-screen md:w-1/2 lg:w-1/3 h-8/12 p-8 ml-4 text-white text-center rounded-md mt-42 bg-red-700/90 border-t-2 border-amber-300"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-5xl mb-3 text-amber-300"
          >
            Mission
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-xl text-justify"
          >
            Turn out vocationally, technically, technologically, and
            scientifically trained graduates who will be economically
            productive, self-sufficient, effective, responsible and discipline
            citizen of the Philippines.
          </motion.p>
        </motion.div>
        <div className="w-screen md:w-1/2 lg:w-1/3 h-8/12 p-8 mr-4 mb-3 text-white text-center rounded-md bg-red-700/90 border-t-2 border-amber-300">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="mb-5 text-5xl text-amber-300"
          >
            Vision
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-xl text-justify"
          >
            EARIST is envisioned to be a center of excellence in trades,
            business, arts, science and technology education.
          </motion.p>
        </div>
      </div>
      <div>
        <ScrollCarousel autoplay autoplaySpeed={1}>
          {imageSrc.map((img, index) => (
            <div
              key={index}
              className="bg-gray-300/20 border-2 border-gray-300/70 rounded md:mt-60 w-full"
            >
              <img src={img} className="object-cover h-96" />
            </div>
          ))}
        </ScrollCarousel>
      </div>
      <About />
    </div>
  );
};

export default Home;
