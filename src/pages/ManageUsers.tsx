import { Plus } from "lucide-react";
import { userData } from "../assets/data";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";

const ManageUsers = () => {
    return (
        <div className="w-full h-full p-5 grid grid-cols-1 grid-rows-1">
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg col-span-1 row-span-1 bg-customCard">
                <div className="flex justify-end items-center">
                    <div className="flex gap-5">
                        <input
                            type="text"
                            placeholder="Search user"
                            className="hidden md:block md:w-60 md:p-2 md:rounded-sm md:text-customBackground"
                        />
                        <button className="flex items-center gap-1 px-4 py-2 rounded-sm font-semibold bg-customPrimary text-customBackground">
                            <Plus size={18} />
                            Create
                        </button>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Contact Number</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {userData.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">
                                    {user.name}
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.contactNumber}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell className="flex items-center gap-4">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ManageUsers;
