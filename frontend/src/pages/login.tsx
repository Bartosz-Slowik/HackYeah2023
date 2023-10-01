import Input from "components/Input";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "store/auth-actions";
import addIcon from "assets/image 7.svg";

const Login = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLogged);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = useAppSelector((state) => state.auth.loading);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const validEmail = email.includes("@");
  const validPassword = password.length >= 6;

  const formValid = validEmail && validPassword && !loading;

  const onSubmitHandler = () => {
    navigate("/", { replace: true });
    return;
    if (!formValid) return;
    dispatch(login(email, password));
  };

  const onRegisterHandler = () => {
    navigate("/register", { replace: true });
  };

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="w-full h-screen">
      <div className="p-4 flex justify-center xs:w-[500px]">
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-center mt-16 mb-4 ">
          <div className="relative flex flex-col">
            <img
              src={addIcon}
              className="w-20 h-20 z-10"
            />
            <div className="absolute bottom-0 -z-10 w-20 h-4 bg-gray-300 rounded-[50%] translate-y-1/2 animate-pulse"></div>
          </div></div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-800">
            Sign in to your account
          </h1>
          <Input
            type="text"
            title="Email"
            placeholder="Enter your email"
            errorMessage="Email is invalid"
            isValid={validEmail}
            name="email"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="password"
            title="Password"
            placeholder="Enter your password"
            errorMessage="Password is invalid"
            isValid={validPassword}
            name="password"
            value={password}
            onChange={setPassword}
          />
          <button
            className=" rounded-lg w-full bg-blue-600 text-white flex justify-center items-center p-4 font-medium"
            disabled={!formValid}
            onClick={onSubmitHandler}
          >
            Log in
          </button>
          <button
            className="text-sm font-medium text-gray-400"
            onClick={onRegisterHandler}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
