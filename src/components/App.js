import React from "react";
import './../styles/App.css';
import { Link } from "react-router-dom";

const App = () => {
  
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li>
            <Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About</Link></li>
        </ul>
    </div>
  )
}

export default App
