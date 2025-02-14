import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import { createContext } from 'react';
import axios from 'axios';

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
        </Route>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext }
