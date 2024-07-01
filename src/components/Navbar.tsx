import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useSidebarStore from "../hooks/useSidebar";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { sidebarItems } from "../assets/data";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [openSheet, setOpenSheet] = useState(false);
    const { toggleSidebar } = useSidebarStore();
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpenSheet(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="h-16 flex items-center justify-between p-4 md:px-10 bg-customCard">
            <div className="flex gap-5">
                <Menu
                    className="hidden cursor-pointer xl:block"
                    onClick={toggleSidebar}
                />
                <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                    <SheetTrigger asChild>
                        <Menu className="cursor-pointer xl:hidden" />
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="flex flex-col bg-customCard text-customPrimary"
                    >
                        <SheetHeader>
                            <div className="w-full h-20 flex items-center justify-center">
                                <Link
                                    to="/"
                                    onClick={() => setOpenSheet(false)}
                                >
                                    <h2 className="text-xl font-bold">
                                        Lorem Corp.
                                    </h2>
                                </Link>
                            </div>
                        </SheetHeader>
                        <ul className="h-full flex flex-col gap-2">
                            {sidebarItems.map((item) => (
                                <Link
                                    to={item.url}
                                    key={item.id}
                                    className="flex items-center gap-5 py-2 px-3 rounded-md cursor-pointer hover:bg-white/5"
                                    onClick={() => setOpenSheet(false)}
                                >
                                    {item.icon}
                                    <p>{item.label}</p>
                                </Link>
                            ))}
                        </ul>
                    </SheetContent>
                </Sheet>
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
                        : location.pathname === "/geography"
                        ? "Geography"
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
