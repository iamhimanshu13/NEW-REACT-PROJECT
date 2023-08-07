import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import MyApp from "./MyApp/MyApp"
import './App.css';
// import HomePage from './MyApp/HomePage';


function App() {

  return (
    <div className="App">
     <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
