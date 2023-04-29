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

// https://www.javaguides.net/2020/07/react-js-crud-application-example.html
// https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/

export default App;
