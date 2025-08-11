import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CardContainer from "../components/container/CardContainer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
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
    <CardContainer title="Connexion">
      <div className="flex flex-col gap-5">
        <div className="grid gap-3">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <Label>Mot de passe</Label>
          <Input
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Button onClick={handleLogin} disabled={loading}>
            {loading ? "Connexion ..." : "Se connecter"}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Si vous n'avez pas de compte
          <NavLink to="/register" className="ml-2 underline">
            S'enregistrer
          </NavLink>
        </div>
      </div>
    </CardContainer>
  );
}
