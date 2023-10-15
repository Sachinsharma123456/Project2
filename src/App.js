import './App.css';
import Navbar from './component/Navbar';
import { useState } from 'react';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

  function App() {
  return (
    <>
    
    <Navbar mode="dark" />
      <Alert alert={alert} />
      <div className="container">
       
          
              <TextForm heading="enter write a text" />
           
      </div>
    </>
  );
}

export default App;
