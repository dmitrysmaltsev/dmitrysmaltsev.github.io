import { Container } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { Timetable } from "./Timetable";

export const Today = () => {
  return (
    <Container>
      <h1>Today's page</h1>
      <Timetable />
    </Container>
  );
};
