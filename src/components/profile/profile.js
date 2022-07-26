import { Container,Row , Col } from "react-bootstrap";
import Bluebar from "../mainbluebar/bluebar";
import ProfileForm  from "./profileForm";
const Profile = ()=>{
    return (
        <Container>
          <Row>
            <Col lg={6}>
              <Bluebar />
            </Col>
            <Col lg={6}>
              <ProfileForm />
            </Col>
          </Row>
        </Container>
      );
}
export default Profile