import { Col, Container , Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Styles from "./Registerform.module.css";
import { NavLink } from "react-router-dom";


const RegisterForm = () => {
  return (
    <>
      {" "}
      <div className={Styles.upperbox}>
        <Container>
            <Row>
                <Col sm={6}><div className={Styles.back}>Back</div>
                </Col>
                <Col sm={6}><div className={Styles.step}>STEP 01/03</div>
                <div className={Styles.info}>Personal Info.</div>
                </Col>
            </Row>
        </Container>

      </div>
      <div className={Styles.heading}>
        Register Individual Account!
      </div>
      <div className={Styles.subheading} >For the purpose of industry regulation, your details are required.</div>

      <div className={Styles.box}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your fullname*</Form.Label>
            <Form.Control type="email" placeholder="Invictus Innocent" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Create password*</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password                                                                                     
                 show" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" />
          </Form.Group>
          <div className="d-grid gap-2">
  
            <Button variant="primary" size="lg" style={{color:"white !important"}}>
            <NavLink to="/profile" style={{color:"white",textDecoration:"none"}}>Register Account</NavLink>
            </Button>
            
          </div>
          <div className={Styles.or}>
            <br />
            or
            <br /> <br />
            </div>
          <div className="d-grid gap-2">
            <Button variant="light" size="lg">
              Register with Google
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default RegisterForm;
