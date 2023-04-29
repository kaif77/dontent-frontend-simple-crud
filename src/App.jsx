import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Home";

function App() {
  // const tempProgrammes = [
  //   {
  //     Id: 1,
  //     ProgrammeName: "Programme 01",
  //     ProgrammeDescription: "Programme Description 01",
  //     ProgrammeCoordinator: "Programme Coordinator 01",
  //   },
  //   {
  //     Id: 2,
  //     ProgrammeName: "Programme 02",
  //     ProgrammeDescription: "Programme Description 02",
  //     ProgrammeCoordinator: "Programme Coordinator 02",
  //   },
  // ];

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
