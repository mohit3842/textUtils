import './App.css';
import Navbar from './components/Navbar';  //components
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if(mode == "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#070f48";
      showAlert('Dark mode has been enabled',"success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('light mode has been enabled',"success");
    }
  }
  return (          
    <>
   <Router>
  <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert= {alert} />
  <div className='container my-3'>
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         {/*<Route path="/users">
            <Users />
          </Route>*/}
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> 
          </Route>
  </Switch>
   {/*<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />*/} 
   {/*<About />*/}
    </div>
    </Router>
    </>
  );
}
export default App;
