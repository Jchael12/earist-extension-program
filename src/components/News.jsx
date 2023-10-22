import Image from "./Image";
import images from "../data/NewsData"
import { Link } from "react-router-dom";


function News() {
  return (
    <div className="flex items-center justify-center mt-28">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-24">
        {images.map((image) => (
          <Link to={image.link} key={image.id}>
            <Image
              key={image.id}
              imageUrl={image.imageUrl}
              title={image.title}
              description={image.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default News;
