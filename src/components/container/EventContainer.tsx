import type { Event } from "../../services/eventService";

interface EventContainerProps {
  event: Event;
}

export default function EventContainer({ event }: EventContainerProps) {
  const { id, title } = event;

  return (
    <div key={id}>
      <h2>{title}</h2>
    </div>
  );
}
