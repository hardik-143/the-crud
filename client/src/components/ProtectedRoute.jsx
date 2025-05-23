import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Layout from "../pages/Layout";

const ProtectedRoute = () => {
  const { token, loading } = useSelector((state) => state.auth);
  const location = useLocation();

  console.log("ProtectedRoute - Auth state:", { token, loading });

  // Check both Redux state and localStorage for token
  const authToken = token || localStorage.getItem("token");

  if (!authToken) {
    console.log("Not authenticated, redirecting to login...");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
