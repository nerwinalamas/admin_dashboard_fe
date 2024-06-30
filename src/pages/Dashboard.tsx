import { ArrowDown, ArrowUp } from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
} from "recharts";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import {
    COLORS,
    salesData,
    revenueData,
    visitorsData,
    stocksData,
    salesPerCategory,
    products,
} from "../assets/data";

const Dashboard = () => {
    return (
        <div className="w-full h-full p-5 gap-4 grid grid-cols-1 grid-rows-12 md:grid-cols-2 md:grid-rows-10 lg:grid-cols-4 lg:grid-rows-6 xl:grid-rows-5 bg-customBackground">
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
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-3 xl:row-span-2">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Revenue Overview
                </h2>
                <div className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={200}
                            height={60}
                            data={revenueData}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            <Area
                                type="monotone"
                                dataKey="uv"
                                stackId="1"
                                stroke="#8884d8"
                                fill="#8884d8"
                            />
                            <Area
                                type="monotone"
                                dataKey="pv"
                                stackId="1"
                                stroke="#82ca9d"
                                fill="#82ca9d"
                            />
                            <Area
                                type="monotone"
                                dataKey="amt"
                                stackId="1"
                                stroke="#ffc658"
                                fill="#ffc658"
                            />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-1">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Sale by Category
                </h2>
                <div className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={100} height={400}>
                            <Pie
                                data={salesPerCategory}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {salesPerCategory.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Legend verticalAlign="bottom" />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard row-span-2 md:col-span-2">
                <h2 className="text-lg font-semibold text-customSecondary">
                    Top Products
                </h2>
                <div className="w-full h-full">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.name}>
                                    <TableCell className="font-medium">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>{product.totalAmount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
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
        </div>
    );
};

export default Dashboard;
