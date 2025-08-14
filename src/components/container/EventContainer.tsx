import clsx from "clsx";
import { formatDate } from "../../lib/utils";
import type { Event } from "../../services/eventService";

interface EventContainerProps {
  event: Event;
}

export default function EventContainer({ event }: EventContainerProps) {
  const { id, title, date, active, description } = event;
  const formattedDate = formatDate(date);

  console.log(event);

  return (
    <div
      key={id}
      className="flex w-full border-2 border-primary-foreground p-4 rounded-xl relative overflow-hidden"
    >
      <div
        className={clsx(
          active ? "bg-green-300" : "bg-red-300",
          "absolute top-0 bottom-0 left-0 w-3 "
        )}
      />
      <div className="flex w-full">
        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <h2 className="font-bold">{title}</h2>
            <span className="text-sm">- {description}</span>
          </div>
          <span className="text-sm">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}
