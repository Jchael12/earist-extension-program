import Nav from "./components/Nav";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <div className="font-lexend bg-red-700 w-full transition duration-500 ease-in-out dark:text-stone-300"
      >
        <div className="md:mx-auto md:w-full min-h-screen">
            <Nav />
            <AppRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
