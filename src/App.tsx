import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

// function PrivateRoute({ children }: { children: JSX.Element }) {
//   const user = useAuthStore((s) => s.user);
//   return user ? children : <Navigate to="/login" />;
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes Protégées */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Rediriger vers Dashboard si connecté */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
