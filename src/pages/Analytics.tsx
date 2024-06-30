import { ArrowDown, ArrowUp } from "lucide-react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import {
    activeUsersData,
    customerSatisfactionData,
    newUsersData,
    products,
    revenueData,
    salesData,
    salesPerCategory,
    stocksData,
    supportTicketsData,
    userEngagementData,
    visitorsData,
} from "../assets/data";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";

const Analytics = () => {
    return (
        <div className="w-full h-full p-5 gap-4 grid grid-cols-1 grid-rows-12 md:grid-cols-2 md:grid-rows-9 lg:grid-cols-4 lg:grid-rows-8 xl:grid-rows-5 bg-customBackground">
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Sales
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center gap-2">
                        <p className="text-3xl font-bold">250</p>
                        <div className="flex items-center gap-1 font-medium text-green-600">
                            <p className="text-sm">+35%</p>
                            <ArrowUp size={18} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={salesData}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Revenue
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center gap-2">
                        <p className="text-3xl font-bold">1500</p>
                        <div className="flex items-center gap-1 font-medium text-green-600">
                            <p className="text-sm">+50%</p>
                            <ArrowUp size={18} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueData}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Visitors
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center gap-2">
                        <p className="text-3xl font-bold">530</p>
                        <div className="flex items-center gap-1 font-medium text-red-600">
                            <p className="text-sm">-5%</p>
                            <ArrowDown size={18} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={visitorsData}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Stocks
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center gap-2">
                        <p className="text-3xl font-bold">84</p>
                        <div className="flex items-center gap-1 font-medium text-green-600">
                            <p className="text-sm">+10%</p>
                            <ArrowUp size={18} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={stocksData}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard row-span-2 lg:col-span-2 xl:col-start-3 xl:row-start-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Revenue Overview
                </h2>
                <div className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={revenueData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="#82ca9d"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard row-span-2 lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Sale by Category
                </h2>
                <div className="w-full h-full">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                dataKey="value"
                                data={salesPerCategory}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard row-span-2 md:col-span-2">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Recent Sales
                </h2>
                <div className="w-full h-full">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.name}>
                                    <TableCell className="font-medium">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>
                                        {product.paymentStatus}
                                    </TableCell>
                                    <TableCell>
                                        {product.paymentMethod}
                                    </TableCell>
                                    <TableCell>{product.totalAmount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter className="bg-customCard">
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell>85,000.00</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard row-span-2 lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    User Engagement
                </h2>
                <div className="w-full h-full">
                    <ResponsiveContainer>
                        <BarChart width={150} height={40} data={userEngagementData}>
                            <Bar dataKey="uv" fill="#8884d8" />
                            <Tooltip />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Active Users
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center gap-2">
                        <p className="text-3xl font-bold">58</p>
                        <div className="flex items-center gap-1 font-medium text-green-600">
                            <p className="text-sm">+27%</p>
                            <ArrowUp size={18} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={activeUsersData}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    New Users
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center gap-2">
                        <p className="text-3xl font-bold">450</p>
                        <div className="flex items-center gap-1 font-medium text-green-600">
                            <p className="text-sm">+68%</p>
                            <ArrowUp size={18} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={newUsersData}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Support Tickets
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center gap-2">
                        <p className="text-3xl font-bold">60</p>
                        <div className="flex items-center gap-1 font-medium text-red-600">
                            <p className="text-sm">-70%</p>
                            <ArrowDown size={18} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={supportTicketsData}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard lg:col-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Customer Satisfaction
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center gap-2">
                        <p className="text-3xl font-bold">1500</p>
                        <div className="flex items-center gap-1 font-medium text-red-600">
                            <p className="text-sm">-30%</p>
                            <ArrowDown size={18} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={customerSatisfactionData}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
