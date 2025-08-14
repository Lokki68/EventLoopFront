import { useAuthStore } from "../../store/useAuthStore";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../ui/sidebar";

export default function AppSidebar() {
  const user = useAuthStore((state) => state.user);
  return (
    <Sidebar>
      <SidebarHeader>Navigation</SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>Username</SidebarFooter>
    </Sidebar>
  );
}
