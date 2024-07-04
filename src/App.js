import "./App.css";
import Home from "../src/Pages/Home/Home";
import Aside from "./Component/Aside/Aside";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="App">
      <Aside />
      <div className="box">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
