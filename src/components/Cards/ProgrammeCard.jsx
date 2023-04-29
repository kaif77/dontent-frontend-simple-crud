import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import "./ProgrammeCard.css";

const ProgrammeCard = ({
  id,
  programme,
  programmeCoordinator,
  programmeDescription,
  handleOnDelete,
  handleOnUpdateProgramme,
}) => {
  // useEffect(() =>  {
    
  // })
  let uProgramme = {
    id: id,
    programme: programme,
    programmeCoordinator: programmeCoordinator,
    programmeDescription: programmeDescription
  }
  return (
    <div className="cards col-md-3 mx-4 my-3">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{programme}</Card.Title>
          <Card.Text>{programmeDescription}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {programmeCoordinator}
          </Card.Subtitle>

          <Card.Link
            className="btn btn-danger"
            onClick={() => handleOnDelete(id)}
          >
            Delete
          </Card.Link>
          <Card.Link
            className="btn btn-warning"
            onClick={() => handleOnUpdateProgramme(uProgramme)}
          >
            Update
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProgrammeCard;
