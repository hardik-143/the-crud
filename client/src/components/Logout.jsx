import { useDispatch } from "react-redux";
import { handleLogout, logout } from "../reducers/authSlice";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Logout 00000");
    // dispatch(handleLogout());
  }, [dispatch, navigate]);

  let previousLocation = useLocation();
  return <Navigate to="/login" state={{ from: previousLocation }} />;
}
