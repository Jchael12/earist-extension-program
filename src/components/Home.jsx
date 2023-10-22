import React from "react";
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
        <div className="custom-shape-divider-bottom-1697795198 hidden md:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            >
            </path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            >
            </path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            >
            </path>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-between text-center md:mt-24 mt-20 md:p-10 p-12 bg-red-900 md:bg-red-900 w-screen md:w-full rounded-md">
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
          className="rounded-md w-[1024px]"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-16 items-center justify-around">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-screen md:w-1/2 lg:w-1/3 h-8/12 p-8 ml-4 text-white text-center rounded-md mt-42 bg-gradient-to-l from-red-900 to-red-700"
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
        <div className="w-screen md:w-1/2 lg:w-1/3 h-8/12 p-8 mr-4 mb-3 text-white text-center rounded-md bg-gradient-to-r from-red-900 to-red-700">
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
        <ScrollCarousel
          autoplay
          autoplaySpeed={1}
        >
          {imageSrc.map((img, index) => (
            <div
              key={index}
              className="bg-gray-300/20 border-2 border-gray-300/70 rounded md:mt-48 w-full"
            >
              <img
                src={img}
                className="object-cover h-96"
              />
            </div>
          ))}
        </ScrollCarousel>
      </div>
      <div className="custom-shape-divider-bottom-1697799949 hidden md:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          >
          </path>
        </svg>
      </div>
      <About />
    </div>
  );
};

export default Home;
