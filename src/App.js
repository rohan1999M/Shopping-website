import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
// import Categories from "./Components/Categories";
import Home from './Components/Routes/Home/Home';
import NavigationBar from './Components/Routes/Navigation';
import SignIn from './Components/Routes/SignIn';


function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NavigationBar/>}>
     <Route index element={<Home/>}/>
    
     <Route path='signIn' element={<SignIn/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
