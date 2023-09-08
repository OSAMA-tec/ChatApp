import React from 'react';
import io from "socket.io-client";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';  // import Home component
import Chat from './components/Chat';  // import Chat component
import { BrowserRouter, Routes, Route } from "react-router-dom";

const socket = io.connect("http://localhost:3000");

function App() {
  return (
    <>
      <Navbar />
      <div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;