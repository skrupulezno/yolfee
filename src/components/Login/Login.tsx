import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div>
      <h1>Login</h1> <Form title="sign in" handleClick={handleLogin}></Form>
    </div>
  );
};

export default Login;
