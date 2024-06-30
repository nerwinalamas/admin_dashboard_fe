import { Link } from "react-router-dom";
import { sidebarItems } from "../assets/data";
import useSidebarStore from "../hooks/useSidebar";

const Sidebar = () => {
    const { isOpen } = useSidebarStore();

    return (
        <div
            className={`w-60 ${
                isOpen ? "block" : "hidden"
            } flex flex-col bg-customCard`}
        >
            <div className="w-full h-20 flex items-center justify-center">
                <Link to="/">
                    <h2 className="text-xl font-bold">Lorem Corp.</h2>
                </Link>
            </div>
            <ul className="h-full flex flex-col gap-2 p-5">
                {sidebarItems.map((item) => (
                    <Link
                        to={item.url}
                        key={item.id}
                        className="flex items-center gap-5 py-2 px-3 rounded-md cursor-pointer hover:bg-white/5"
                    >
                        {item.icon}
                        <p>{item.label}</p>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
