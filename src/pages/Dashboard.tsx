import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventContainer from "../components/container/EventContainer";
import { useAuthStore } from "../store/useAuthStore";
import { useEventStore } from "../store/useEventStore";

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const events = useEventStore((state) => state.events);

  return (
    <div className="p-4">
      <h1 className="text-xl">Bienvenue, {user?.email}</h1>
      <ul>
        {events.map((event) => (
          <EventContainer event={event} />
        ))}
      </ul>
    </div>
  );
}
