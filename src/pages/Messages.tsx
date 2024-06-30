import { conversationData, userData } from "../assets/data";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useState } from "react";
import { User } from "../types";

const Messages = () => {
    const [chat, setChat] = useState<User | null>(null);

    const filteredConversation = conversationData.find(conversation => 
        conversation.participants.includes(chat?.id ?? "") 
    );

    return (
        <div className="w-full h-full p-5 gap-4 grid grid-cols-1 grid-rows-4 lg:grid-cols-3 lg:grid-rows-1 xl:grid-cols-4">
            <div className="flex gap-5 p-4 shadow-md rounded-lg overflow-x-auto lg:flex-col bg-customCard">
                {userData.map((user) => (
                    <div
                        key={user.id}
                        className="p-5 rounded-xl flex flex-col items-center justify-center gap-5 cursor-pointer hover:bg-customBackground/30 lg:flex-row bg-customBackground/20"
                        onClick={() => setChat(user)}
                    >
                        <Avatar className="hover:cursor-pointer">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>NA</AvatarFallback>
                        </Avatar>
                        <p className="w-36 text-center lg:text-start">
                            {user.name}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-4 p-4 shadow-md rounded-lg bg-customCard row-span-3 lg:row-span-1 lg:col-span-2 xl:col-span-3">
                {chat && <div className="w-full flex items-center gap-5 border-b-2 border-customBackground px-1 py-4">
                    <Avatar className="hover:cursor-pointer">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>NA</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{chat?.name}</p>
                        <p>{chat?.email}</p>
                    </div>
                </div>}
                <div className="w-full h-96 overflow-y-auto p-4 flex flex-col gap-5 lg:h-[800px]">
                    {filteredConversation ? (
                        filteredConversation.convo.map((message) => (
                            <div
                                key={message.id}
                                className={`w-48 p-2 rounded-lg md:w-max max-w-sm lg:max-w-md bg-customSecondary ${message.messageBy === chat?.id ? "self-end" : "self-start"}`}
                            >
                                <p className="max-w-full">{message.message}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-customPrimary">Select a user to view the conversation</p>
                    )}
                </div>
                <form className="flex gap-2 border-t-2 border-customBackground pt-3">
                    <input
                        type="text"
                        placeholder="Type a message"
                        className="w-full py-3 px-1 border rounded-sm bg-customCard text-customBackground/100"
                    />
                    <input
                        type="submit"
                        className="px-3 rounded-sm bg-customBackground"
                    />
                </form>
            </div>
        </div>
    );
};

export default Messages;
