import React, { useState } from "react";
import { motion } from "framer-motion";

const users = [
  { name: "User1", messageCount: 5 },
  { name: "User2", messageCount: 10 },
  // Add more users as needed
];

const messages = [
  { user: "User1", content: "Hello!" },
  { user: "User2", content: "Hi there!" },
  // Add more messages as needed
];

const Chat = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log("Message sent:", message);
    setMessage("");
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <motion.div
        className="w-full md:w-1/4 bg-gray-200 p-4 overflow-auto"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.name} className="mb-2">
              <span className="font-semibold">{user.name}</span> -{" "}
              <span>{user.messageCount} messages</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="w-full md:w-3/4 bg-gray-100 p-4 flex flex-col justify-between"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-y-auto">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`p-2 rounded mb-2 ${
                message.user === "User1" ? "bg-green-500" : "bg-blue-500"
              }`}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <strong>{message.user}</strong>
              <p>{message.content}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            className="flex-grow border-2 border-gray-300 rounded p-2 mr-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;
