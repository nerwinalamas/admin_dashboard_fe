import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useSidebarStore from "../hooks/useSidebar";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const { toggleSidebar } = useSidebarStore();
    const location = useLocation();

    return (
        <div className="h-16 flex items-center justify-between p-4 md:px-10 bg-customCard">
            <div className="flex gap-5">
                <Menu className="cursor-pointer" onClick={toggleSidebar} />
                <h1 className="text-lg font-bold">
                    {location.pathname === "/"
                        ? "Admin Dashboard"
                        : location.pathname === "/analytics"
                        ? "Analytics"
                        : location.pathname === "/products"
                        ? "Products"
                        : location.pathname === "/manage-users"
                        ? "Manage Users"
                        : location.pathname === "/messages"
                        ? "Messages"
                        : location.pathname === "/calendar"
                        ? "Calendar"
                        : location.pathname === "/tasks"
                        ? "Tasks"
                        : location.pathname === "/settings"
                        ? "Settings"
                        : ""}
                </h1>
            </div>
            <div className="flex items-center gap-5">
                <p className="hidden md:block">
                    Hello 👋,{" "}
                    <span className="font-bold hover:underline hover:cursor-pointer">
                        Nerwin Alamas
                    </span>
                </p>
                <Avatar className="hover:cursor-pointer">
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>NA</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
};

export default Navbar;
