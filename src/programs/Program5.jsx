// importing images
import image5 from "/src/assets/premises.jpg";

function Program5() {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <img src={image5} className="w-[800px] mt-28" />
      <div className="text-justify flex flex-col items-center justify-center mt-5 text-white">
        <h1 className="text-3xl">Program 5</h1>
        <p className="p-12">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.
        </p>
      </div>
    </div>
  );
}

export default Program5;
