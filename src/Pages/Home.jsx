import React, { useEffect, useState } from "react";
import SearchArea from "../components/searchArea/SearchArea";
import Programme from "../components/Form/Programme";
import axios from "axios";
import ProgrammeCard from "../components/Cards/ProgrammeCard";

const ProgramList = ({
  tempProgrammes,
  handleOnDelete,
  handleOnUpdateProgramme,
}) => {
  if (tempProgrammes.length === 0) {
    return;
  }
  return (
    <div className="row">
      {tempProgrammes.map((p) => (
        <ProgrammeCard
          id={p.id}
          programme={p.programmeName}
          key={p.id}
          programmeDescription={p.programmeDescription}
          programmeCoordinator={p.programmeCoordinator}
          handleOnUpdateProgramme={(programme) =>
            handleOnUpdateProgramme(programme)
          }
          handleOnDelete={(id) => handleOnDelete(id)}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const [programmes, setProgrammes] = useState([]);
  const [tempProgrammes, setTempProgrammes] = useState([]);
  const [updateProgramme, setUpdateProgramme] = useState(null);

  const handleNewProgram = () => {
    // setProgrammes(...programmes, program);
    fetchData();
  };

  const handleOnDelete = async (id) => {
    try {
      const res = await axios.delete(`/Programme/delete-programme?id=${id}`);
      handleNewProgram();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnUpdateProgramme = (programme) => {
    setUpdateProgramme(programme);
    // setUpdateProgramme(programme);
    // handleProgrammeUpdate();
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`/Programme/get-all`);
      setProgrammes(res.data);
      setTempProgrammes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnSearch = (programme) => {
    const temp = programmes;
    const results = temp.filter((p) => {
      if (programme.trim() === "" || programme === null) {
        console.log("p")
        return p;
      }
      return p.programmeName.toLowerCase().includes(programme.toLowerCase());
    });
    // console.log("in search", results);
    setTempProgrammes(results);
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, [programmes]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SearchArea handleOnSearch={(programme) => handleOnSearch(programme)} />
      <Programme
        handleNewProgram={handleNewProgram}
        updateProgramme={updateProgramme}
      />
      <ProgramList
        tempProgrammes={tempProgrammes}
        handleOnDelete={(id) => handleOnDelete(id)}
        handleOnUpdateProgramme={(programme) =>
          handleOnUpdateProgramme(programme)
        }
      />
    </>
  );
};

export default Home;
