import { Navigate } from "react-router-dom";
import { removeUser } from "../../store/slices/userSlice";
import { useAuth } from "../../hooks/use-auth";
import { useAppDispatch } from "../../hooks/redux-hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>welcome {email}</h1>
      <button onClick={() => dispatch(removeUser())}>
        log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default HomePage;
