import Login from "../../components/Login/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <Login></Login>
      <p>
        Dont have account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
