import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
// import Categories from "./Components/Categories";
import Home from './Components/Routes/Home/Home';
import NavigationBar from './Components/Routes/Navigation';
import Authentication from './Components/Routes/Authentication';
import Shop from './Shop/Shop';
import Checkout from './CheckOut/checkout';


function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NavigationBar/>}>
     <Route index element={<Home/>}/>
     <Route path='shop' element={<Shop/>}/>
     <Route path='contact' element={<></>}/>
     <Route path='auth' element={<Authentication/>}/>
      <Route path = 'checkout' element={<Checkout/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
