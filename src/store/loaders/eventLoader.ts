/* eslint-disable @typescript-eslint/no-unused-vars */
import type { LoaderFunctionArgs } from "react-router-dom";
import { getEvents } from "../../services/eventService";
import { useEventStore } from "../useEventStore";

export async function eventsLoader(_args: LoaderFunctionArgs) {
  const events = await getEvents();

  useEventStore.getState().setEvents(events);

  return events;
}
