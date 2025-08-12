import { signOut } from "../../services/auth";
import { ModeToggle } from "../themes/mode-toggle";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

export default function Header() {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="flex justify-between items-center w-full ">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <span className="text-2xl font-semibold">EventLoop</span>
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={handleLogout}>Deconexion</Button>
        <ModeToggle />
      </div>
    </div>
  );
}
