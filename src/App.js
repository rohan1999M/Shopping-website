import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
// import Categories from "./Components/Categories";
import Home from './Components/Routes/Home/Home';
import NavigationBar from './Components/Routes/Navigation';
import Authentication from './Components/Routes/Authentication';


function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NavigationBar/>}>
     <Route index element={<Home/>}/>
    
     <Route path='auth' element={<Authentication/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
