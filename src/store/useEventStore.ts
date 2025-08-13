import { create } from "zustand";
import { getEvents, type Event } from "../services/eventService";

interface EventState {
  events: Event[];
  setEvents: (events: Event[]) => void;
  fetchEvents: () => Promise<void>;
}

export const useEventStore = create<EventState>((set) => ({
  events: [],
  setEvents: (events) => set({ events }),
  fetchEvents: async () => {
    const events = await getEvents();
    set({ events });
  },
}));
