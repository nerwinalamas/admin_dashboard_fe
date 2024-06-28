const Dashboard = () => {
    return (
        <div className="w-full p-5 mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-12 lg:grid-cols-4 lg:grid-rows-9 xl:grid-cols-4 xl:grid-rows-5 gap-4">
            <div className="border-2 border-red-600 lg:col-span-2 xl:col-span-1">
                Sales
            </div>
            <div className="border-2 border-red-600 lg:col-span-2 xl:col-span-1">
                Revenue
            </div>
            <div className="border-2 border-red-600 lg:col-span-2 xl:col-span-1">
                Visitors
            </div>
            <div className="border-2 border-red-600 lg:col-span-2 xl:col-span-1">
                Stocks
            </div>
            <div className="border-2 border-red-600 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2 xl:col-span-3 xl:row-span-2">
                Revenue Overview Bar Chart
            </div>
            <div className="border-2 border-red-600 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2 xl:col-span-1">
                Sale by Category Pie Chart
            </div>
            <div className="border-2 border-red-600 md:col-span-2 md:row-span-3 lg:col-span-2 lg:row-span-3 xl:col-span-1 xl:row-span-2">
                Top Products Table
            </div>
            <div className="border-2 border-red-600 md:col-span-2 md:row-span-3 lg:col-span-2 lg:row-span-3 xl:col-span-3 xl:row-span-2">
                Recent Sales Table
            </div>
        </div>
    );
};

export default Dashboard;
