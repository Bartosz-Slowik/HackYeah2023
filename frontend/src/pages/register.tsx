import Input from "components/Input";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "store/auth-actions";

const Register = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLogged);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const loading = useAppSelector((state) => state.auth.loading);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const validEmail = email.includes("@");
  const validPassword = password.length >= 6;
  const validName = name.length > 0;

  const formValid = validEmail && validPassword && validName && !loading;

  const onSubmitHandler = () => {
    if (!formValid) return;
    dispatch(login(email, password));
  };

  const onLoginHandler = () => {
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    if (user) {
      navigate("/login", { replace: true });
    }
  }, [user]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="w-full h-screen">
      <div className="p-4 flex justify-center xs:w-[500px]">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-800">
            Sign in to your account
          </h1>
          <Input
            type="text"
            title="Name"
            placeholder="Enter your name"
            errorMessage="Name is invalid"
            isValid={validName}
            name="name"
            value={name}
            onChange={setName}
          />
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
            Register
          </button>
          <button
            className="text-sm font-medium text-gray-400"
            onClick={onLoginHandler}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
