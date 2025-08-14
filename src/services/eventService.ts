import { supabase } from "../lib/supabase";

export interface Event {
  id: number;
  title: string;
  date: string;
  active: boolean;
  user_id: number;
  description?: string;
  location?: string;
  image_url?: string;
}

const TABLE_NAME = "Events";

// Create
export async function createEvent(event: Omit<Event, "id" | "created_at">) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(event)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

// Read
export async function getEvents() {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .order("date", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
}

// Update
export async function updateEvent(id: number, updates: Partial<Event>) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

// Delete
export async function deleteEvent(id: number) {
  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);

  if (error) throw new Error(error.message);
}
