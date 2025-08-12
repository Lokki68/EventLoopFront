import { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";
import Header from "./Header";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const user = useAuthStore((s) => s.user);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {user ? children : <Navigate to="/login" />}
      </SidebarInset>
    </SidebarProvider>
  );
}
