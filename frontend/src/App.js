import React,{useState,useEffect} from "react"
import axios from 'axios';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Homepage from "./pages/Homepage";
import Add from "./pages/Add";
import Update from "./pages/Update";
function App() {
  

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/"element={<Homepage/>}/>
            <Route path="/add"element={<Add/>}/>
            {/* <Route path="/update"element={<Update/>}/> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
