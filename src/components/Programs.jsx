import Image from "./Image";
import images from "../data/ProgramEventsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Programs() {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-24">
        {images.map((image) => (
          <Link to={image.link} key={image.id}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                key={image.id}
                imageUrl={image.imageUrl}
                title={image.title}
                description={image.description}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Programs;
