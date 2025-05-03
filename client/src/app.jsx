import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ProtectedRoute from "./components/ProtectedRoute";

import "./scss/main.scss";
import PublicRoute from "./components/PublicRoute";
import Logout from "./components/Logout";
import { checkAuth } from "./reducers/authSlice";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    // Check if we have a token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      console.log("App mounted, checking auth... 00000");
      dispatch(checkAuth());
    }
  }, [dispatch]);

  //   if (loading) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center">
  //         <div className="text-xl">Loading...</div>
  //       </div>
  //     );
  //   }

  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Routes>
          {/* Public routes */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>

          {/* Protected routes */}
          <Route path="/" element={<ProtectedRoute />}>
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route index element={<Dashboard />} />
          </Route>

          {/* Redirect to login for unknown routes */}
          {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
