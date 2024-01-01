// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mystyle, setstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [modetext, setmodetext] = useState("Enable Dark Mode");
  const [alert, updatealert] = useState(null);
  const setalert=(type,message)=>{
    updatealert({message:message,type:type});
    setTimeout(() => {
      updatealert(null)
    }, 1000);
  }


  const handeltoggle = () => {
    if (modetext === "Enable Dark Mode") {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";

      setmodetext("Disable Dark Mode");
      setstyle({
        color: "white",
        backgroundColor: "black",
      });
      setalert("dark","Dark mode enabled successfully.")
    } else {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";

      setmodetext("Enable Dark Mode");
      setstyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <HashRouter>
    <Navbar
        title="TextUtils"
        modetext={modetext}
        mystyle={mystyle}
        handeltoggle={handeltoggle}
      />
      <Alert alert={alert}/>
      <div className="container">
    <Routes>
      <Route exact path="/" element={<TextForm heading="Enter your text to Convert" setalert={setalert} />} />
      <Route exact path="/about" element={<About mystyle={mystyle} />} />
    </Routes>
    </div>
  </HashRouter>
  );
}

export default App;
