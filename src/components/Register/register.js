import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "./Registerform";
import Bluebar from "../mainbluebar/bluebar";

function Register() {
  return (
    <Container>
    <Row>
      <Col lg={6}>
        <Bluebar />
      </Col>
      <Col lg={6}>
        <RegisterForm />
      </Col>
    </Row>
  </Container>
    
    
  );
}

export default Register;