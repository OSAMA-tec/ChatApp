import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      <motion.div
        className="absolute w-full h-full bg-gradient-to-r from-blue-500 to-green-500"
        animate={{
          opacity: [0, 0.5, 0, 0.5],
          scale: [1, 1.05, 1, 1.05],
        }}
        transition={{
          duration: 4,
          loop: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="z-10">
        <Link
          to="/get-started"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700"
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
          >
            Get Started
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Home;