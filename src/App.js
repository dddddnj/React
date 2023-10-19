import React from "react";
import About from "./public/about";
import Content from "./public/content";
import Footer from "./public/footer";
import Navbar from "./public/navbar";
import Home from "./public/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./public/error404";
import Staste from "./public/staste";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Content" element={<Content />} />
            <Route path="/About" element={<About />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div> */}


      <Staste/>
    </div>
  );
};

export default App;
