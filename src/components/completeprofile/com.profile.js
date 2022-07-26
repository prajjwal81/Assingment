import { Container,Row , Col } from "react-bootstrap";
import Bluebar from "../mainbluebar/bluebar";
import CompleteProfileForm from "./completeprofileform";
const CompleteProfile = ()=>{
    return (
        <Container>
          <Row>
            <Col lg={6}>
              <Bluebar />
            </Col>
            <Col lg={6}>
              <CompleteProfileForm />
            </Col>
          </Row>
        </Container>
      );
}
export default CompleteProfile