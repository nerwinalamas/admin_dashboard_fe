import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <div className="w-screen max-w-screen-2xl mx-auto flex gap-2">
            <div className="hidden w-80 bg-slate-700"></div>
            <Dashboard />
        </div>
    );
};

export default App;
