import { useState } from 'react';
import './App.css';
// import About from './components/About'; 
import Navbar from './components/Navbar';
import Alert from './components/Alert';

import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // To check whether dark mode is enabled or not
   const[alert,setAlert]=useState(null);
   const showAlert =(message,type)=>{
    setAlert(
      {
        msg : message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1000);
   }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'; // Dark mode background color
      showAlert("Dark mode is enabled" ,"success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background color
      showAlert("Light mode is enabled" ,"success")
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />

    <Alert Alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
