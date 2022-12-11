import "./App.css";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar.jsx";
import Filters from "./Filters/Filters.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Filters />
      <Home />
    </div>
  );
}

export default App;
