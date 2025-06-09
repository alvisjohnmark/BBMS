import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/Protected";
import { Toaster } from "react-hot-toast";
import "./App.css";

// Client Pages
import SecretaryLogin from "./pages/secretary/secretaryLogin";
import SecretaryDashboard from "./pages/secretary/secretaryDashboard";

// Admin Pages
import AdminLogin from "./pages/admin/adminLogin";
import AdminRegister from "./pages/admin/adminRegister";
import AdminDashboard from "./pages/admin/adminDashboard";

// Not Found Page
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<SecretaryLogin />} />
        <Route path="/dashboard" element={<SecretaryDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
