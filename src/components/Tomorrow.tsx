import { Container } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export const Tomorrow = () => {
  return (
    <Container>
      <h1>Tomorrow's page</h1>
      <div>This is Tomorrow's page</div>
      <Link to="/">
        <Button>Go to Today's page</Button>
      </Link>
    </Container>
  );
};
