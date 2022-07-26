import { Container, Row, Col } from "react-bootstrap";
import Bluebar from "../mainbluebar/bluebar";
import Account from "./selectaccountrightside";

const FormOne = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Bluebar />
        </Col>
        <Col lg={6}>
          <Account />
        </Col>
      </Row>
    </Container>
  );
};
export default FormOne;
