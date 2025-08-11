import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { signIn } from "../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);

    try {
      await signIn(email, password);

      navigate("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">Connexion</h1>
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex flex-col gap-4">
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? "Connexion ..." : "Se connecter"}
        </Button>
        <Button variant="ghost" asChild>
          <NavLink to="/register">S'enregistrer</NavLink>
        </Button>
      </div>
    </div>
  );
}
