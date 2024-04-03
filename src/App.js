import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/about";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#14437b";
      showAlert("Dark Mode Enabled", "success ");
    }

    // else if(mode === "red"){
    //   setMode("red");
    //   document.body.style.backgroundColor = '#ffffff';
    //   showAlert("Red Mode Enabled","success ");
    // }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success ");
    }
  };
  return (
    <Router>
        <Navbar
          title="TextUtils"
          about="About TextUtils"
          mode={mode}
          ToggleMode={ToggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Textform
                heading="Enter Your Text Here To Change"
                showalert={showAlert}
                mode={mode}
              />} />
            <Route exact path="/about" element={<About mode={mode} />}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
