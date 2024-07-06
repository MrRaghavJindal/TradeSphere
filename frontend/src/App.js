import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Myproduct from './components/Myproduct';
import Navi from './components/Navi';
import PrivateComponent from './components/PrivateComponent';
import Product from './components/Product';
import Profile from './components/Profile';
import Signup from './components/Signup';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <div className="pb-12">
      <Navi/>
      </div>
      <Routes>

        <Route path='/' element={<Product/>}/>
        <Route element ={<PrivateComponent/>}>
        <Route path='/myproduct/' element={<Myproduct/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/profile' element={<Profile/>}/>
        </Route>

        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
    </>
  );
}

export default App;
