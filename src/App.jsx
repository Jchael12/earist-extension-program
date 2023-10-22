import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <div className="font-lexend bg-red-700 w-full transition duration-500 ease-in-out dark:text-stone-300"
      >
        <div className="md:mx-auto md:w-full min-h-screen">
          <Router>
            <Nav />
            <AppRoutes />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
