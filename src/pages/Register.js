import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../features/auth/authSlice";

const initialState = {
  firstname: "",
  lastname: "",
  title: "",
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, loggedin, user } = useSelector(
    (store) => store.auth
  );

  useEffect(() => {
    if (loggedin && user) navigate("/");
    if (error) alert("Unable to register");
  }, [loggedin, user, error, navigate]);

  const [inputs, setInputs] = useState(initialState);
  // const [error, setError] = useState("");

  const updateinputs = function (e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = function (e) {
    e.preventDefault();
    if (
      inputs.password === "" ||
      inputs.email === "" ||
      inputs.title === "" ||
      inputs.firstname === "" ||
      inputs.lastname === ""
    )
      return alert("Please enter all fields");
    dispatch(register({ ...inputs }));
  };
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="md:h-screen w-100 bg-secondary flex justify-center items-center p-4 md:p-0">
      <div className=" w-full md:w-1/3">
        <div className="bg-white rounded shadow">
          <div className="card-header px-6 py-4 border-b">
            <h2 className="font-semibold text-gray-700 uppercase text-center">
              Register
            </h2>
          </div>
          <div className="md:grid grid-cols-12 gap-3 card-body p-6">
            <div className="mb-6 md:col-span-6">
              <label htmlFor="username" className="block mb-3 font-semibold">
                First Name:
              </label>
              <input
                type="text"
                className=" w-full border rounded px-6 py-4"
                placeholder="Enter firstname"
                name="firstname"
                value={inputs.firstname}
                onChange={updateinputs}
              />
              <span></span>
            </div>
            <div className="mb-10 md:col-span-6">
              <label htmlFor="password" className="block mb-3 font-semibold">
                Last name:
              </label>
              <input
                type="text"
                className=" w-full border rounded px-6 py-4"
                placeholder="Enter lastname"
                name="lastname"
                value={inputs.lastname}
                onChange={updateinputs}
              />
            </div>
            <div className=" mb-10 md:col-span-6">
              <label htmlFor="password" className="block mb-3 font-semibold">
                Title:
              </label>
              <input
                type="text"
                className=" w-full border rounded px-6 py-4"
                placeholder="Enter title"
                name="title"
                value={inputs.title}
                onChange={updateinputs}
              />
            </div>
            <div className=" mb-10 md:col-span-6">
              <label htmlFor="password" className="block mb-3 font-semibold">
                Email:
              </label>
              <input
                type="text"
                className=" w-full border rounded px-6 py-4"
                placeholder="Enter email"
                name="email"
                value={inputs.email}
                onChange={updateinputs}
              />
            </div>
            <div className=" mb-10 md:col-span-12">
              <label htmlFor="password" className="block mb-3 font-semibold">
                Password:
              </label>
              <input
                type="password"
                className=" w-full border rounded px-6 py-4"
                placeholder="Enter email"
                name="password"
                value={inputs.password}
                onChange={updateinputs}
              />
            </div>
            <div className="text-center col-span-12">
              <button
                className="bg-primary hover:bg-gray-700 px-6 py-3 capitalize rounded font-medium text-white"
                onClick={onSubmit}>
                register
              </button>
            </div>
            <div className="col-span-12 flex justify-center items-center mt-6 text-sm text-gray-500">
              <span>
                Already registered ?
                <Link to="/login" className="hover:text-blue-700 ml-2">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
