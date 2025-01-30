import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = (mode) => {
    setMode(mode);
    document.body.style.backgroundColor = mode === 'dark' ? '#2c2c2c' : 'white';
    showAlert(`${mode.charAt(0).toUpperCase() + mode.slice(1)} mode enabled`, 'success');
  };

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
