import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox></TopBox>
      </div>
      <div className="box box2">
        <ChartBox></ChartBox>
      </div>
      <div className="box box3">
        <ChartBox></ChartBox>
      </div>
      <div className="box box4">
        <ChartBox></ChartBox>
      </div>
      <div className="box box5">
        <ChartBox></ChartBox>
      </div>
      <div className="box box6">
        <ChartBox></ChartBox>
      </div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </div>
  );
};

export default Home;
