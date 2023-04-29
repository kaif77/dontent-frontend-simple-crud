import React, { useEffect, useState } from "react";
import "./Programme.css";
import { Button, CloseButton } from "react-bootstrap";
import axios from "axios";

const Programme = ({ handleNewProgram, updateProgramme }) => {
  const [show, setShow] = useState(false);
  const [programmeToUpdate, setProgrammeToUpdate] = useState(false);

  const [inputs, setInputs] = useState({
    programmeName: "",
    programmeDescription: "",
    programmeCoordinator: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (!updateProgramme) {
      return;
    }
    setInputs({
      id:updateProgramme.id,
      programmeName: updateProgramme.programme,
      programmeDescription: updateProgramme.programmeDescription,
      programmeCoordinator: updateProgramme.programmeCoordinator,
    });
    setProgrammeToUpdate(true);
    setShow(true);
  }, [updateProgramme]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(programmeToUpdate){
      const res = await axios.put(`/Programme/update-programme?id=${inputs.id}`, inputs);
      if (res.data.statusCode === 200) {
        setShow(false);
        handleNewProgram();
        setInputs({});
      }
      return;
    }
    try {
      const res = await axios.post("/Programme/create-program", inputs);
      if (res.data.statusCode === 201) {
        setShow(false);
        handleNewProgram();
        setInputs({});
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setShow(false);
    if(programmeToUpdate){
      setInputs({});
    }
  } 
    
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="sub-heading p-2 mt-3 bg-secondary text-end text-white">
        <div className="create">
          <Button variant="primary" onClick={handleShow}>
            + Add New Programme
          </Button>
        </div>
      </div>
      {show && (
        <form>
          <div className="form-row">
            <CloseButton onClick={handleClose} />
            <div className="text-center">
              <div className="form-group mb-2">
                <label>Programme Name</label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="formGroupExampleInput"
                  placeholder="Programme Name"
                  name="programmeName"
                  value={inputs.programmeName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <label>Programme Description</label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="formGroupExampleInput2"
                  placeholder="Programme Description"
                  name="programmeDescription"
                  value={inputs.programmeDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <label>Programme Coordinator</label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="formGroupExampleInput2"
                  placeholder="Programme Coordinator"
                  name="programmeCoordinator"
                  value={inputs.programmeCoordinator}
                  onChange={handleChange}
                />
              </div>
              <Button onClick={handleSubmit}>
                {programmeToUpdate ? "Update" : "Create"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Programme;
