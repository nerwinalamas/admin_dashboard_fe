import useThemeStore from "../hooks/useTheme";
import { themeData } from "../assets/data";
import { CircleCheckBig } from "lucide-react";

const Settings = () => {
    const { setTheme, theme } = useThemeStore();

    return (
        <div className="w-full h-full p-5 grid grid-cols-1 grid-rows-1">
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg col-span-1 row-span-1 bg-customCard">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Settings
                </h2>
                <div>
                    <h3 className="text-customPrimary border-white border-b-2">
                        Themes
                    </h3>
                    <ul className="grid grid-cols-1 place-items-center gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {themeData.map((themeItem) => (
                            <li key={themeItem.id}>
                                <div
                                    className="flex flex-col items-center justify-center w-max gap-2"
                                    onClick={() =>
                                        setTheme(`${themeItem.mode}`)
                                    }
                                >
                                    <div
                                        className={`w-60 relative flex justify-center p-2 cursor-pointer rounded-md overflow-hidden ${
                                            theme === themeItem.mode
                                                ? "bg-blue-700"
                                                : "bg-slate-700"
                                        }`}
                                    >
                                        <img
                                            src={themeItem.image}
                                            alt={themeItem.title}
                                            className="object-cover"
                                        />
                                        {theme === themeItem.mode && (
                                            <CircleCheckBig className="absolute bottom-3 right-3 text-blue-700" />
                                        )}
                                    </div>
                                    <label htmlFor={themeItem.mode} className="cursor-pointer">
                                        {themeItem.title}
                                    </label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        id={themeItem.mode}
                                        className="hidden"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Settings;
