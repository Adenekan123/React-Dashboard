import "./App.css";

import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Protected from "./pages/Protected";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import Createpost from "./pages/createpost";
import Editpost from "./pages/editpost";
import Posts from "./pages/posts";
import Farmvisits from "./pages/farmvisits";
import Careers from "./pages/careers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/createpost"
            element={
              <Protected>
                <Createpost />
              </Protected>
            }
          />
          <Route
            path="/editpost/:id"
            element={
              <Protected>
                <Editpost />
              </Protected>
            }
          />
          <Route
            path="/posts"
            element={
              <Protected>
                <Posts />
              </Protected>
            }
          />
          <Route
            path="/farmvisits"
            element={
              <Protected>
                <Farmvisits />
              </Protected>
            }
          />
          <Route
            path="/careers"
            element={
              <Protected>
                <Careers />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
