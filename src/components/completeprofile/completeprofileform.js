import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Styles from "./CompleteProfileform.module.css";

const CompleteProfileForm = () => {
  return (
    <>
      {" "}
      <div className={Styles.upperbox}>
        <Container>
          <Row>
            <Col sm={6}>
              <div className={Styles.back}>Back</div>
            </Col>
            <Col sm={6}>
              <div className={Styles.step}>STEP 01/03</div>
              <div className={Styles.info}>Residency Info.</div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={Styles.heading}>Complete Your Profile!</div>
      <div className={Styles.subheading}>
        For the purpose of industry regulation, your details are required.
      </div>
      <div className={Styles.box}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Bank verification number (BVN)</Form.Label>
            <Form.Control type="email" placeholder="090912345567"  />
          </Form.Group>
          <br /><br /><br />

          

          
          
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Save & Continue
            </Button>
          </div>
          
        </Form>
      </div>
    </>
  );
};
export default CompleteProfileForm;
