import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import App from "./App";
function Main(){
    return(
        <BrowserRouter>
        <div>
        <App/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    )
}
export default Main