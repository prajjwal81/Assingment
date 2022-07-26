import { Container } from "react-bootstrap";
import Styles from "./bluebar.module.css";
import img from "../../Images/Union.jpg";
import img2 from "../../Images/comma.png";
import img3 from "../../Images/circle check full.png";
import img4 from "../../Images/Vector 1.png";

const Bluebar = () => {
  return (
    <Container className={Styles.Container}>
      <div className={Styles.img}>
        <img src={img} alt="" className={Styles.unionimg} />
        
        <div>
          {" "}
          <img src={img2} alt="" className={Styles.commaimg} />
        </div>
      </div>

      <div className={Styles.Content}>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software.
      </div>
      <p className={Styles.vince}>
        Vincent Obi <img src={img3} alt="" />
      </p>
      <img src={img4} alt="" className={Styles.vectorimg} />
    </Container>
  );
};
export default Bluebar;
