import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import { Homepage } from "./Component/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
