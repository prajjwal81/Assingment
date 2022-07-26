import { Container, Row, Col } from "react-bootstrap";
import Styles from "./smallbox.module.css";
import img from "../../Images/Polygon 1.png";
import img2 from "../../Images/Polygon 2.png";
import img3 from "../../Images/Arrow.png";
import img4 from "../../Images/user.png";
// import img from './img/Polygon 1.jpg'

import { NavLink } from "react-router-dom";
const SmallBox = () => {
  return (
    <>
      <div className={Styles.individualBox}>
        <div className={Styles.individual}>
          <Container>
            <Row>
              <Col sm={3} className={Styles.individualImg}>
                <img src={img} alt=""  />
              </Col>
              <Col sm={6} className={Styles.individual}>
                <span><NavLink to="/register">Individual</NavLink></span>
               
                <div className={Styles.individuals}>
                  Personal account to manageall you<img src={img3} alt="" className={Styles.arrow} />  activities.
                  
                </div>
              </Col>
              <Col sm={3}>
              
              </Col>
            </Row>
          </Container>
        </div>
      </div>


      <div className={Styles.individualBox}>
        <div className={Styles.individual}>
          <Container>
            <Row>
              <Col sm={3} className={Styles.individualImg}>
                <img src={img2} alt="" />
              </Col>
              <Col sm={6} className={Styles.individual}>
              Business
                <div className={Styles.individuals}>
                Own or belong to a company, this is for you.
                </div>
              </Col>
              <Col sm={3}></Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default SmallBox;
