import { removeToken } from "utils/auth";
import "./App.css";
import store from "store";
import { RouterProvider, redirect } from "react-router";
import { authenticate, logout } from "store/auth-actions";
import Main from "pages/main";
import Login from "pages/login";
import Register from "pages/register";
import { createBrowserRouter } from "react-router-dom";
import { useAppDispatch } from "hooks/redux-hooks";
import { useEffect } from "react";

const logoutLoader = () => {
  removeToken();
  store.dispatch(logout());
  return redirect("/");
};

const BrowserRouter = createBrowserRouter([
  { path: "/", element: <Main />, id: "main" },
  { path: "/login", element: <Login />, id: "login" },
  {
    path: "/register",
    element: <Register />,
    id: "register",
  },
  { path: "/logout", id: "logout", loader: logoutLoader },
  { path: "*", element: <div>Not found</div>, id: "not-found" },
]);

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authenticate());
  }, []);
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
