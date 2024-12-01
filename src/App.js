// Filename - App.js

import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
           <br />
            <h1 className="geeks">SOFTWARE ENGINEERS & DEVELOPERS</h1>
            <h3>CRUD: Create, Read, Upload, Delete</h3>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>   
            </Router>
        </div>
    );
}

export default App;