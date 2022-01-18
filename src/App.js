import {BrowserRouter, Routes, Route} from 'react-router-dom';

//routes are imported from the js files
import ProfilePage from './Profile/ProfilePage';
import Myads from './Components/myads';
import Categoryscreen from './Category/Categoryscreen';
import ProductPage from './Product/ProductPage';

import PropCatPage from './SubCat1/PropCatPage';
import SpoCatPage from './SubCat2/SpoCatPage';
import BikeCatPage from './SubCat3/BikeCatPage';
import FunCatPage from './SubCat4/FunCatPage';
import ProfileDashBoardPage from './ProfileDash/ProfileDashBoardPage';
import Homepage from './Mainpages/Homepage';
import Loginpage from './Mainpages/Loginpage';
import Furniture from './pages/Furniture';
import Laptops from './pages/Laptops';
import Phones from './pages/Phones';
import Accessories from './pages/Accessories';
import Cameras from './pages/Cameras';
import Cycles from './pages/Cycles';
import Signup from './Mainpages/Signup';
import ProductDetails from './Mainpages/ProductDetails'

import {DataProvider} from "./ProductsAPI/GlobalState"

//App.js contains various routes present in the entire page
function App() {
  
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
                  <Route exact path="/profile" element={<ProfilePage />}></Route>
                
                  <Route exact path="/myads" element={<Myads />}></Route>
                
                  <Route exact path="/category" element={<Categoryscreen />}></Route>
                
                  <Route exact path="/product" element={<ProductPage />}></Route>
                
                  <Route exact path="/propertySubcategory" element={<PropCatPage />}></Route>
              
                  <Route exact path="/sportssubcategory" element={<SpoCatPage />}></Route>
                
                  <Route exact path="/bikessubcategory" element={<BikeCatPage />}></Route>
              
                  <Route exact path="/functionssubcategory" element={<FunCatPage />}></Route>
                
                  <Route exact path="/profiledashboard" element={<ProfileDashBoardPage />}></Route>

                  <Route exact path="/" element={<Homepage />}></Route>

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

                  <Route exact path="/productDetails" element={<ProductDetails />}>
                  </Route>

                  <Route>
                  Error 404 - page not found!
                  </Route>
          </Routes>
          
        
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;

