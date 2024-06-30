import {
    BarChart3,
    Calendar,
    LayoutDashboard,
    ListTodo,
    LogOut,
    MessageCircle,
    Settings,
    ShoppingCart,
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
        label: "Products",
        icon: <ShoppingCart />,
        url: "/products",
    },
    {
        id: "4",
        label: "Manage Users",
        icon: <User />,
        url: "/manage-users",
    },
    {
        id: "5",
        label: "Messages",
        icon: <MessageCircle />,
        url: "/messages",
    },
    {
        id: "6",
        label: "Calendar",
        icon: <Calendar />,
        url: "/calendar",
    },
    // {
    //     id: "7",
    //     label: "Tasks",
    //     icon: <ListTodo />,
    //     url: "/tasks",
    // },
    {
        id: "8",
        label: "Settings",
        icon: <Settings />,
        url: "/settings",
    },
    {
        id: "9",
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

export const productsData = [
    {
        id: "1",
        name: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        stockQuantity: 150,
        description: "Ergonomic wireless mouse with adjustable DPI settings.",
        brand: "Logitech",
    },
    {
        id: "2",
        name: "Gaming Keyboard",
        category: "Electronics",
        price: 79.99,
        stockQuantity: 75,
        description: "Mechanical gaming keyboard with RGB lighting.",
        brand: "Razer",
    },
    {
        id: "3",
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 49.99,
        stockQuantity: 200,
        description: "Portable Bluetooth speaker with high-fidelity sound.",
        brand: "JBL",
    },
    {
        id: "4",
        name: "Running Shoes",
        category: "Sportswear",
        price: 59.99,
        stockQuantity: 120,
        description: "Lightweight running shoes with breathable mesh upper.",
        brand: "Nike",
    },
    {
        id: "5",
        name: "Yoga Mat",
        category: "Sportswear",
        price: 25.99,
        stockQuantity: 300,
        description: "Non-slip yoga mat with cushioning for comfort.",
        brand: "Gaiam",
    },
    {
        id: "6",
        name: "Smartwatch",
        category: "Electronics",
        price: 199.99,
        stockQuantity: 50,
        description: "Smartwatch with fitness tracking and notifications.",
        brand: "Apple",
    },
    {
        id: "7",
        name: "Water Bottle",
        category: "Accessories",
        price: 14.99,
        stockQuantity: 250,
        description: "Insulated water bottle that keeps drinks cold or hot.",
        brand: "Hydro Flask",
    },
    {
        id: "8",
        name: "Laptop Stand",
        category: "Accessories",
        price: 39.99,
        stockQuantity: 100,
        description: "Adjustable laptop stand for ergonomic working posture.",
        brand: "Rain Design",
    },
    {
        id: "9",
        name: "Desk Lamp",
        category: "Furniture",
        price: 24.99,
        stockQuantity: 80,
        description:
            "LED desk lamp with adjustable brightness and color temperature.",
        brand: "BenQ",
    },
    {
        id: "10",
        name: "Office Chair",
        category: "Furniture",
        price: 149.99,
        stockQuantity: 40,
        description:
            "Ergonomic office chair with lumbar support and adjustable height.",
        brand: "Herman Miller",
    },
];

export const userData = [
    {
        id: "1",
        name: "John Doe",
        email: "johndoe@example.com",
        contactNumber: "123-456-7890",
        address: "123 Main St, Springfield, IL",
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "janesmith@example.com",
        contactNumber: "234-567-8901",
        address: "456 Elm St, Springfield, IL",
    },
    {
        id: "3",
        name: "Michael Johnson",
        email: "michaelj@example.com",
        contactNumber: "345-678-9012",
        address: "789 Oak St, Springfield, IL",
    },
    {
        id: "4",
        name: "Emily Davis",
        email: "emilyd@example.com",
        contactNumber: "456-789-0123",
        address: "101 Pine St, Springfield, IL",
    },
    {
        id: "5",
        name: "William Brown",
        email: "williamB@example.com",
        contactNumber: "567-890-1234",
        address: "202 Maple St, Springfield, IL",
    },
    {
        id: "6",
        name: "Jessica Taylor",
        email: "jessicat@example.com",
        contactNumber: "678-901-2345",
        address: "303 Birch St, Springfield, IL",
    },
    {
        id: "7",
        name: "David Wilson",
        email: "davidw@example.com",
        contactNumber: "789-012-3456",
        address: "404 Cedar St, Springfield, IL",
    },
    {
        id: "8",
        name: "Sarah Martin",
        email: "sarahm@example.com",
        contactNumber: "890-123-4567",
        address: "505 Walnut St, Springfield, IL",
    },
    {
        id: "9",
        name: "James Lee",
        email: "jamesl@example.com",
        contactNumber: "901-234-5678",
        address: "606 Chestnut St, Springfield, IL",
    },
    {
        id: "10",
        name: "Olivia Anderson",
        email: "oliviaa@example.com",
        contactNumber: "012-345-6789",
        address: "707 Aspen St, Springfield, IL",
    },
];

export const activeUsersData = [
    {
        name: "User A",
        uv: 5000,
        pv: 3000,
        amt: 3500,
    },
    {
        name: "User B",
        uv: 4000,
        pv: 2500,
        amt: 3100,
    },
    {
        name: "User C",
        uv: 3500,
        pv: 2000,
        amt: 2800,
    },
    {
        name: "User D",
        uv: 4500,
        pv: 3200,
        amt: 3700,
    },
    {
        name: "User E",
        uv: 3000,
        pv: 1800,
        amt: 2600,
    },
    {
        name: "User F",
        uv: 4200,
        pv: 2900,
        amt: 3300,
    },
    {
        name: "User G",
        uv: 4800,
        pv: 3400,
        amt: 4000,
    },
];

export const newUsersData = [
    {
        name: "New User A",
        uv: 1500,
        pv: 800,
        amt: 1000,
    },
    {
        name: "New User B",
        uv: 1200,
        pv: 700,
        amt: 900,
    },
    {
        name: "New User C",
        uv: 1000,
        pv: 600,
        amt: 800,
    },
    {
        name: "New User D",
        uv: 1800,
        pv: 1000,
        amt: 1200,
    },
    {
        name: "New User E",
        uv: 1300,
        pv: 750,
        amt: 950,
    },
    {
        name: "New User F",
        uv: 1600,
        pv: 900,
        amt: 1100,
    },
    {
        name: "New User G",
        uv: 1400,
        pv: 850,
        amt: 1050,
    },
];

export const supportTicketsData = [
    {
        name: "Server downtime",
        uv: 5000,
        pv: 3000,
        amt: 3500,
    },
    {
        name: "Billing inquiry",
        uv: 4000,
        pv: 2500,
        amt: 3100,
    },
    {
        name: "Feature enhancement",
        uv: 3500,
        pv: 2000,
        amt: 2800,
    },
    {
        name: "Login problem",
        uv: 4500,
        pv: 3200,
        amt: 3700,
    },
    {
        name: "Product inquiry",
        uv: 3000,
        pv: 1800,
        amt: 2600,
    },
];

export const customerSatisfactionData = [
    {
        name: "Survey A",
        uv: 85,
        pv: 10,
        amt: 5,
    },
    {
        name: "Survey B",
        uv: 70,
        pv: 20,
        amt: 10,
    },
    {
        name: "Survey C",
        uv: 90,
        pv: 5,
        amt: 5,
    },
    {
        name: "Survey D",
        uv: 75,
        pv: 15,
        amt: 10,
    },
    {
        name: "Survey E",
        uv: 80,
        pv: 10,
        amt: 10,
    },
];

export const userEngagementData = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export const conversationData = [
    {
        id: "1",
        participants: ["1", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message: "Hi, how are you?",
                messageBy: "Nerwin Alamas",
                messageTo: "1",
            },
            {
                id: "2",
                message: "I'm good, thanks! How about you?",
                messageBy: "1",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "3",
                message: "I'm doing well, just busy with work.",
                messageBy: "Nerwin Alamas",
                messageTo: "1",
            },
            {
                id: "4",
                message: "I can relate. There's a lot going on right now.",
                messageBy: "1",
                messageTo: "Nerwin Alamas",
            },
        ],
    },
    {
        id: "2",
        participants: ["2", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message: "Did you complete the project?",
                messageBy: "Nerwin Alamas",
                messageTo: "2",
            },
            {
                id: "2",
                message: "Yes, I did. I'll send it over shortly.",
                messageBy: "2",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "3",
                message: "Great, thanks!",
                messageBy: "Nerwin Alamas",
                messageTo: "2",
            },
        ],
    },
    {
        id: "3",
        participants: ["3", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message:
                    "Can you help me with this task? I'm having trouble understanding how the API integration works. I've gone through the documentation multiple times, but I still can't get it to work correctly. Every time I try to make a request, I get an error response, and I'm not sure what I'm doing wrong. Could you please take a look at my code and see if there's anything obvious that I'm missing?",
                messageBy: "3",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "2",
                message:
                    "Sure, what do you need help with? Can you send me the specific part of the code that's giving you trouble, along with the error message you're receiving? It would also be helpful to know what you're trying to achieve with the API call. This way, I can get a better understanding of the issue and provide more targeted assistance.",
                messageBy: "Nerwin Alamas",
                messageTo: "3",
            },
            {
                id: "3",
                message:
                    "I'm having trouble with the API integration. The error message says something about an invalid token, but I'm sure that the token I'm using is correct. Here's the code snippet: ... , I've double-checked the token, and it's valid. Do you see anything wrong with this code?",
                messageBy: "3",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "4",
                message:
                    "Let's set up a call to go over it. It might be easier to debug this issue in real-time. How about we hop on a quick call where you can share your screen, and I can walk you through some troubleshooting steps? That way, we can get to the bottom of this issue more efficiently. Does that work for you?",
                messageBy: "Nerwin Alamas",
                messageTo: "3",
            },
            {
                id: "5",
                message:
                    "That sounds good. How about 2 PM? I'll be available then, and it shouldn't take too long to figure out. I'll prepare a list of things to check and some alternative approaches we can try. Looking forward to resolving this with your help. Thanks for offering to assist!",
                messageBy: "3",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "6",
                message:
                    "Perfect. I'll send you the invite. Please make sure you have your code and any relevant documentation ready so we can jump right into the troubleshooting session. See you at 2 PM!",
                messageBy: "Nerwin Alamas",
                messageTo: "3",
            },
        ],
    },
    {
        id: "4",
        participants: ["4", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message:
                    "Are you available for a meeting tomorrow? We need to discuss the project timeline and make sure everyone is on the same page regarding the upcoming deadlines. It's important that we align our efforts and ensure that all tasks are assigned and tracked properly. Your input will be valuable in identifying any potential roadblocks and coming up with solutions.",
                messageBy: "Nerwin Alamas",
                messageTo: "4",
            },
            {
                id: "2",
                message:
                    "Yes, what time? I want to make sure that I block off my calendar so I can fully focus on the meeting. It's crucial that we have this discussion to prevent any delays in the project. Also, if there's any specific preparation needed, please let me know in advance so I can come prepared.",
                messageBy: "4",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "3",
                message:
                    "How about 10 AM? That should give us enough time to cover all the important points without rushing. I'll prepare an agenda and share it with everyone beforehand. Please review it and add any additional topics you think we should discuss. Looking forward to a productive meeting.",
                messageBy: "Nerwin Alamas",
                messageTo: "4",
            },
            {
                id: "4",
                message:
                    "That works for me. See you then! I'll make sure to go through the agenda and add any points from my side. Thanks for organizing this, it's going to be very helpful in keeping us on track.",
                messageBy: "4",
                messageTo: "Nerwin Alamas",
            },
        ],
    },
    {
        id: "5",
        participants: ["5", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message:
                    "Can you review my code? I've been working on this new feature and I want to make sure that everything is implemented correctly before merging it into the main branch. There are a few areas where I'm not entirely confident about my approach, and I could use a second pair of eyes to catch any potential issues. Your feedback would be greatly appreciated.",
                messageBy: "5",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "2",
                message:
                    "Sure, please send it over. I'll take a look at it as soon as I can and provide you with detailed feedback. If there are any specific parts of the code that you want me to focus on, let me know. This will help me provide more targeted and useful comments.",
                messageBy: "Nerwin Alamas",
                messageTo: "5",
            },
            {
                id: "3",
                message:
                    "Sending it now. Thanks! I've highlighted a few sections where I'm particularly unsure. Any insights you can offer on those would be especially helpful. I appreciate you taking the time to review my work.",
                messageBy: "5",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "4",
                message:
                    "Got it. I'll take a look and get back to you soon. I'll make sure to go through the highlighted sections in detail and provide you with my thoughts. If I have any questions or need further clarification, I'll reach out to you.",
                messageBy: "Nerwin Alamas",
                messageTo: "5",
            },
        ],
    },
    {
        id: "6",
        participants: ["6", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message: "What are the next steps for the project?",
                messageBy: "Nerwin Alamas",
                messageTo: "6",
            },
            {
                id: "2",
                message:
                    "We need to finalize the requirements and then start the design phase.",
                messageBy: "6",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "3",
                message:
                    "Alright, let's schedule a meeting to discuss the requirements.",
                messageBy: "Nerwin Alamas",
                messageTo: "6",
            },
            {
                id: "4",
                message: "How about Monday at 11 AM?",
                messageBy: "6",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "5",
                message: "That works. I'll set up the meeting.",
                messageBy: "Nerwin Alamas",
                messageTo: "6",
            },
        ],
    },
    {
        id: "7",
        participants: ["7", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message: "When is the deadline?",
                messageBy: "Nerwin Alamas",
                messageTo: "7",
            },
            {
                id: "2",
                message: "It's due by the end of the month.",
                messageBy: "7",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "3",
                message: "Got it. I'll make sure everything is ready by then.",
                messageBy: "Nerwin Alamas",
                messageTo: "7",
            },
        ],
    },
    {
        id: "8",
        participants: ["8", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message: "Can you join the call at 3 PM?",
                messageBy: "8",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "2",
                message: "Yes, I'll be there.",
                messageBy: "Nerwin Alamas",
                messageTo: "8",
            },
            {
                id: "3",
                message: "Great! See you then.",
                messageBy: "8",
                messageTo: "Nerwin Alamas",
            },
        ],
    },
    {
        id: "9",
        participants: ["9", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message: "Have you seen the latest updates?",
                messageBy: "9",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "2",
                message: "Yes, they look great!",
                messageBy: "Nerwin Alamas",
                messageTo: "9",
            },
            {
                id: "3",
                message:
                    "I'm glad you like them. We worked hard on this release.",
                messageBy: "9",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "4",
                message: "It shows! The new features are really impressive.",
                messageBy: "Nerwin Alamas",
                messageTo: "9",
            },
        ],
    },
    {
        id: "10",
        participants: ["10", "Nerwin Alamas"],
        convo: [
            {
                id: "1",
                message: "What time is the presentation?",
                messageBy: "Nerwin Alamas",
                messageTo: "10",
            },
            {
                id: "2",
                message: "It's at 10 AM tomorrow.",
                messageBy: "10",
                messageTo: "Nerwin Alamas",
            },
            {
                id: "3",
                message: "Thanks! I'll be ready.",
                messageBy: "Nerwin Alamas",
                messageTo: "10",
            },
        ],
    },
];
