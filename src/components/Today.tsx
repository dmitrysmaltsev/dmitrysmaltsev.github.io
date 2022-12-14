import { Container } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export const Today = () => {
  return (
    <Container>
      <h1>Today's page</h1>
      <div>This is Today's page</div>
      <Link to="/tomorrow">
        <Button>Go to Tomorrow</Button>
      </Link>
    </Container>
  );
};
