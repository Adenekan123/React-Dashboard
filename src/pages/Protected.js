import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Protected({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((store) => store.auth);
  // const isAuthenticated = localStorage.getItem("mktoken");
  useEffect(() => {
    if (!isAuthenticated) return navigate("/login");
  }, [isAuthenticated, navigate]);

  return isAuthenticated && children;
}

export default Protected;
