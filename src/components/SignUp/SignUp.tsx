import { useAppDispatch } from "../../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import { setUser } from "../../store/slices/userSlice";

function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/");
      })
      .catch(console.error);
  };
  return <Form title="register" handleClick={handleRegister} />;
}

export default SignUp;
