import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CardContainer from "../../components/container/CardContainer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { signUp } from "../../services/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);
    try {
      await signUp(email, password);
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
    <CardContainer title="S'enregistrer">
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
        <div className="flex flex-col gap-4">
          <Button onClick={handleRegister} disabled={loading}>
            {loading ? "Création..." : "S'inscrire"}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Si vous avez déjà un compte
          <NavLink to="/login" className="ml-2 underline">
            Se connecter
          </NavLink>
        </div>
      </div>
    </CardContainer>
  );
}
