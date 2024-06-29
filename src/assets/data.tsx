import {
    BarChart3,
    Calendar,
    LayoutDashboard,
    ListTodo,
    LogOut,
    MessageCircle,
    Settings,
    User,
} from "lucide-react";
import { SidebarItem } from "../types";
import {
    light,
    lightGreen,
    lightGray,
    dark,
    darkBlue,
    darkGray,
    darkPurple,
} from "./images";

export const salesData = [
    {
        name: "Product A",
        uv: 5000,
        pv: 3000,
        amt: 3500,
    },
    {
        name: "Product B",
        uv: 4000,
        pv: 2500,
        amt: 3100,
    },
    {
        name: "Product C",
        uv: 3500,
        pv: 2000,
        amt: 2800,
    },
    {
        name: "Product D",
        uv: 4500,
        pv: 3200,
        amt: 3700,
    },
    {
        name: "Product E",
        uv: 3000,
        pv: 1800,
        amt: 2600,
    },
    {
        name: "Product F",
        uv: 4200,
        pv: 2900,
        amt: 3300,
    },
    {
        name: "Product G",
        uv: 4800,
        pv: 3400,
        amt: 4000,
    },
];

export const revenueData = [
    {
        name: "January",
        uv: 8000,
        pv: 5000,
        amt: 6000,
    },
    {
        name: "February",
        uv: 10000,
        pv: 14000,
        amt: 16000,
    },
    {
        name: "March",
        uv: 1200,
        pv: 4000,
        amt: 5000,
    },
    {
        name: "April",
        uv: 8000,
        pv: 15000,
        amt: 17000,
    },
    {
        name: "May",
        uv: 9000,
        pv: 6000,
        amt: 7000,
    },
    {
        name: "June",
        uv: 20000,
        pv: 16000,
        amt: 18000,
    },
    {
        name: "July",
        uv: 18000,
        pv: 7000,
        amt: 8000,
    },
    {
        name: "August",
        uv: 21000,
        pv: 17000,
        amt: 19000,
    },
    {
        name: "September",
        uv: 11000,
        pv: 8000,
        amt: 9000,
    },
    {
        name: "October",
        uv: 22000,
        pv: 18000,
        amt: 20000,
    },
    {
        name: "November",
        uv: 12000,
        pv: 9000,
        amt: 10000,
    },
    {
        name: "December",
        uv: 23000,
        pv: 19000,
        amt: 21000,
    },
];

export const visitorsData = [
    {
        name: "Week 1",
        uv: 2000,
        pv: 1500,
        amt: 1800,
    },
    {
        name: "Week 2",
        uv: 2500,
        pv: 2000,
        amt: 2300,
    },
    {
        name: "Week 3",
        uv: 2200,
        pv: 1700,
        amt: 2100,
    },
    {
        name: "Week 4",
        uv: 2800,
        pv: 2300,
        amt: 2600,
    },
    {
        name: "Week 5",
        uv: 2600,
        pv: 2100,
        amt: 2400,
    },
    {
        name: "Week 6",
        uv: 3000,
        pv: 2500,
        amt: 2800,
    },
    {
        name: "Week 7",
        uv: 3200,
        pv: 2700,
        amt: 3000,
    },
];

export const stocksData = [
    {
        name: "Stock A",
        uv: 150,
        pv: 140,
        amt: 145,
    },
    {
        name: "Stock B",
        uv: 160,
        pv: 150,
        amt: 155,
    },
    {
        name: "Stock C",
        uv: 170,
        pv: 160,
        amt: 165,
    },
    {
        name: "Stock D",
        uv: 180,
        pv: 170,
        amt: 175,
    },
    {
        name: "Stock E",
        uv: 190,
        pv: 180,
        amt: 185,
    },
    {
        name: "Stock F",
        uv: 200,
        pv: 190,
        amt: 195,
    },
    {
        name: "Stock G",
        uv: 210,
        pv: 200,
        amt: 205,
    },
];

export const salesPerCategory = [
    { name: "Electronics", value: 50000 },
    { name: "Apparel", value: 35000 },
    { name: "Home Goods", value: 30000 },
    { name: "Books", value: 20000 },
];

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const products = [
    {
        name: "Laptop",
        paymentStatus: "Paid",
        totalAmount: "35,000.00",
        paymentMethod: "Credit Card",
    },
    {
        name: "Camera",
        paymentStatus: "Pending",
        totalAmount: "50,000.00",
        paymentMethod: "PayPal",
    },
];

export const sidebarItems: SidebarItem[] = [
    {
        id: "1",
        label: "Dashboard",
        icon: <LayoutDashboard />,
        url: "/",
    },
    {
        id: "2",
        label: "Analytics",
        icon: <BarChart3 />,
        url: "/analytics",
    },
    {
        id: "3",
        label: "Manage Users",
        icon: <User />,
        url: "/manage-users",
    },
    {
        id: "4",
        label: "Messages",
        icon: <MessageCircle />,
        url: "/messages",
    },
    {
        id: "5",
        label: "Calendar",
        icon: <Calendar />,
        url: "/calendar",
    },
    {
        id: "6",
        label: "Tasks",
        icon: <ListTodo />,
        url: "/tasks",
    },
    {
        id: "7",
        label: "Settings",
        icon: <Settings />,
        url: "/settings",
    },
    {
        id: "8",
        label: "Logout",
        icon: <LogOut />,
        url: "/logout",
    },
];

export const themeData = [
    {
        id: "1",
        mode: "light",
        title: "Light",
        image: light,
    },
    {
        id: "2",
        mode: "lightGreen",
        title: "Light Green",
        image: lightGreen,
    },
    {
        id: "3",
        mode: "lightGray",
        title: "Light Gray",
        image: lightGray,
    },
    {
        id: "4",
        mode: "dark",
        title: "Dark",
        image: dark,
    },
    {
        id: "5",
        mode: "darkBlue",
        title: "Dark Blue",
        image: darkBlue,
    },
    {
        id: "6",
        mode: "darkGray",
        title: "Dark Gray",
        image: darkGray,
    },
    {
        id: "7",
        mode: "darkPurple",
        title: "Dark Purple",
        image: darkPurple,
    },
];
