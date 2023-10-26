import image2 from "/src/assets/image2.jpg";

const Programs2 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <img src={image2} className="w-[800px] mt-28" />
      <div className="bg-red-600 text-justify flex flex-col items-center justify-center mt-5 p-5 text-white rounded-md border-t-2 border-amber-300">
        <h1 className="text-3xl">Program 2</h1>
        <p className="p-12">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.
        </p>
      </div>
    </div>
  );
};

export default Programs2;
