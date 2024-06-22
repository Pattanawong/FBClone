import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './page/Login';
import Main from './page/Main';
import Create from './page/Create';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Create" element={<Create />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
