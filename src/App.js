import React  from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Mainpages/Homepage';
import Loginpage from './Mainpages/Loginpage';
import Furniture from './pages/Furniture';
import Laptops from './pages/Laptops';
import Phones from './pages/Phones';
import Accessories from './pages/Accessories';
import Cameras from './pages/Cameras';
import Cycles from './pages/Cycles';
import Signup from './Mainpages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Homepage />}>
            </Route>

            <Route exact path="/login" element={<Loginpage />}>
            </Route>

            <Route exact path="/signup" element={<Signup/>}>
            </Route>

            <Route exact path="/phones" element={<Phones />}>
            </Route>

            <Route exact path="/furtinures" element={<Furniture />}> 
            </Route>

            <Route exact path="/laptops" element={<Laptops />}>
            </Route>

            <Route exact path="/accessories" element={<Accessories />}>
            </Route>

            <Route exact path="/cameras" element={<Cameras />}>
            </Route>

            <Route exact path="/cycle" element={<Cycles />}>
            </Route>

            <Route>
            Error 404 - page not found!
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
