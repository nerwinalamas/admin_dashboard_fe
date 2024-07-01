import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import useThemeStore from "./hooks/useTheme";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import ManageUsers from "./pages/ManageUsers";
import Messages from "./pages/Messages";
import CalendarView from "./pages/CalendarView";
import Tasks from "./pages/Tasks";
import Geography from "./pages/Geography";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

const Layout = () => {
    return (
        <div className="flex min-h-[1000px]">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

const App = () => {
    const { theme } = useThemeStore();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className="max-w-screen-2xl mx-auto font-poppins text-customPrimary">
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/manage-users" element={<ManageUsers />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/calendar" element={<CalendarView />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/geography" element={<Geography />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
