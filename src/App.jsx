import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import { createContext } from 'react';
import axios from 'axios';
import ProductDetails from './Pages/ProductDetails';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries');
  },[]);

  const getCountry = async (url) => {
    const response = await axios.get(url).then((res) => {
      console.log(res.data.data);
      setCountryList(res.data.data);
    });
  }

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry
  }

  return (
    <MyContext.Provider value={values}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/product-details" exact={true} element={<ProductDetails />} />
        </Route>

        <Route path="/signin" exact={true} element={<SignIn />} />
        <Route path="/signup" exact={true} element={<SignUp />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext }
