// import { useSt ate } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import Pnf from './components/Pnf';
import Navbar from './components/Navbar'; 
import Fashion from './components/Fashion';
import Mobile from './components/Mobile';
import Laptop from './components/Laptop';
import Watches from './components/Watches';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route index element={<Signup/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<Fashion/>} />
          <Route path="mobiles" element={<Mobile />} />
          <Route path="laptops" element={<Laptop />} />
          <Route path="watches" element={<Watches />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>
        <Route path="product-details/:pid" element={<ProductDetails/>}/>
        <Route path="*" element={<Pnf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
