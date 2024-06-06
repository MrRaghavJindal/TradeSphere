import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import Login from './components/Login';
import Myproduct from './components/Myproduct';
import Navi from './components/Navi';
import PrivateComponent from './components/PrivateComponent';
import Product from './components/Product';
import Profile from './components/Profile';
import Signup from './components/Signup';
import UpdateProduct from './components/UpdateProduct';
import LoginForm from './components/Test';
function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <div className="pb-12"> {/* Add padding top equal to the height of Navbar */}
      <Navi/>
      </div>
      {/* <LoginForm/> */}
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
      {/* <Footer/> */}
    </>
  );
}

export default App;
