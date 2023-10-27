// importing images
import image6 from "/src/assets/courtside.jpg";

function Program6() {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <img src={image6} className="w-[500px] mt-24" />
      <div className="bg-red-600 text-justify flex flex-col items-center justify-center mt-5 p-5 text-white rounded-md border-t-2 border-amber-300">
        <h1 className="text-3xl">Program 6</h1>
        <p className="p-12">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.
        </p>
      </div>
    </div>
  );
}

export default Program6;
