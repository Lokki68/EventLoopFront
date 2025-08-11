import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dashboard user", user);
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div className="p-4">
      <h1 className="text-xl">Bienvenue, {user?.email}</h1>
    </div>
  );
}
