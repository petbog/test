import s from "./Home.module.scss";
import "../../../src/App.css";
import Prose from "../../Component/Prose/Prose";

const Home = () => {
  return (
    <div className="container">
      <div className={s.Home}>
        <Prose />
      </div>
    </div>
  );
};

export default Home;
