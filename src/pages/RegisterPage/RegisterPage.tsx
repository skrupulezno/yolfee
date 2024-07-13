import "./RegisterPage.module.scss";
import { Link } from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp";

const RegisterPage = () => {
  return (
    <div>
      <h1>RegisterPage</h1>
      <SignUp></SignUp>
      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
