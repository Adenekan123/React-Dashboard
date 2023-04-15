import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, isAuthenticated } = useSelector(
    (store) => store.auth
  );

  useEffect(() => {
    if (isAuthenticated) navigate("/");
    if (error) alert("Unable to Login, Contact the programmer.");
  }, [isAuthenticated, error, navigate]);

  const [inputs, setInputs] = useState(initialState);

  const updateinputs = function (e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = function (e) {
    e.preventDefault();
    if (inputs.password === "" || inputs.email === "")
      return alert("Please enter all fields");
    dispatch(login({ ...inputs }));
  };

  return (
    <div className="h-screen w-100 bg-secondary flex justify-center items-center p-4 md:p-0">
      <div className="w-96">
        <div className="bg-white rounded shadow">
          <div className="card-header px-6 py-4 border-b">
            <h2 className="font-semibold text-gray-700 uppercase text-center">
              dashboard login
            </h2>
          </div>
          <div className="card-body p-6">
            <div className="mb-6">
              <label htmlFor="username" className="block mb-3 font-semibold">
                Email:
              </label>
              <input
                type="email"
                className=" w-full border rounded px-6 py-4"
                placeholder="Enter username"
                name="email"
                onChange={updateinputs}
              />
            </div>
            <div className=" mb-10">
              <label htmlFor="password" className="block mb-3 font-semibold">
                Password:
              </label>
              <input
                type="password"
                className=" w-full border rounded px-6 py-4"
                placeholder="Enter password"
                name="password"
                onChange={updateinputs}
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                className="bg-primary hover:bg-gray-700 px-6 py-3 capitalize rounded font-medium text-white"
                onClick={onSubmit}>
                {isLoading ? 'Login in...': 'Login'}
              </button>
            </div>
            <div className="flex justify-between items-center mt-10 text-sm text-gray-500">
              <Link to="/register" className="hover:text-blue-700">
                create a new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
