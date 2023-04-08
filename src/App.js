import React from "react";
import './App.css';
//import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Developers from "./Pages/HomePages/Developers";
import Naturalists from "./Pages/HomePages/Naturalists";
import Marketers from "./Pages/HomePages/Marketers";
import FirstPost from "./Pages/BlogPosts/FirstPost";
import SecondPost from "./Pages/BlogPosts/SecondPost";
import ThirdPost from "./Pages/BlogPosts/ThirdPost";

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Routes>
                    <Route path="/developers" element={<Developers  />}/>
                    <Route path="/naturalists" element={<Naturalists  />}/>
                    <Route path="/marketers" element={<Marketers  />}/>

                    <Route path="/firstpost" element={<FirstPost  />}/>
                    <Route path="/secondpost" element={<SecondPost  />}/>
                    <Route path="/thirdpost" element={<ThirdPost  />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

