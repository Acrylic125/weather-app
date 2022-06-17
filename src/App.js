import logo from "./logo.svg";
import "./App.css";
import Container from "./components/container/Container";
import ContainerHeader from "./components/heading/ContainerHeader";
import MainHeader from "./components/heading/MainHeader";
import Row from "./components/layout/Row";
import SingleStatisticItem from "./components/item/SingleStatisticItem";

function App() {
  return (
    <div className="App bg-slate-800 w-full h-full min-h-screen">
      <div className="flex flex-col mx-auto w-full p-3 max-w-4xl">
        <MainHeader className="w-60 text-xl self-center">
          Your Week in Weather Report
        </MainHeader>
        <div className="w-100">
          <div className="flex flex-col w-100 md:w-75">
            <ContainerHeader className="self-start text-left">
              Week In Report
            </ContainerHeader>
            <Row>
              <SingleStatisticItem
                className="flex-1"
                label="Average Temperature"
                statistic="30 °C"
              />
              <span className="mx-1"></span>
              <SingleStatisticItem
                className="flex-1"
                label="Average Humidity"
                statistic="10 %"
              />
              <span className="mx-1"></span>
              <SingleStatisticItem
                className="flex-1"
                label="Average Wind Speed"
                statistic="10 m/s"
              />
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
