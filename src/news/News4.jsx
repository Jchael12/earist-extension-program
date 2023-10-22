// importing images
import image4 from "/src/assets/image4.jpg";

function News4() {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <img src={image4} className="w-[800px] mt-28"/>
      <div className="text-justify flex flex-col items-center justify-center mt-5 text-white">
        <h4 className="text-4xl">News 4</h4>
        <p className="p-44">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.
        </p>
      </div>
    </div>
  );
}

export default News4;
