
import {  Container } from "react-bootstrap";
import Styles from "./selectaccountrightside.module.css";
import SmallBox from "./smallbox";
const Account = () => {
  return (
    <Container className={Styles.Container}>
      <div className={Styles.Signin}>Already have an account? Sign In </div>
      <div className={Styles.join}>Join Us!</div>
      <div className={Styles.small}>
        To begin this journey, tell us what type of account you’d be opening.
      </div>
      <SmallBox/>
     
    </Container>
  );
};
export default Account;
