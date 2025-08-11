import { supabase } from "../lib/supabase";
import { useAuthStore } from "../store/useAuthStore";

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  useAuthStore.getState().setUser(data.user);
}

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw new Error(error.message);
  useAuthStore.getState().setUser(data.user);
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
  useAuthStore.getState().setUser(null);
}

export function listenToAuthChanges() {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log("📢 Auth event:", event);
    useAuthStore.getState().setUser(session?.user ?? null);
  });
}
