import React from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Cart from './components/Cart';

import Home from './pages/Home';
import Favourites from './pages/Favourites';




function App() {
  const [doctors, setDoctors] = React.useState([]);
  const [cartDoctors, setCartDoctors] = React.useState([]);
  const [favourite, setFavourite] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://67367294aafa2ef222308aa6.mockapi.io/Doctors').then(res => {
      setDoctors(res.data);
    });

    axios.get('https://67367294aafa2ef222308aa6.mockapi.io/Cart').then(res => {
      setCartDoctors(res.data);
    });

    axios.get('https://67464f6f512ddbd807fb7e60.mockapi.io/favourites').then(res => {
      setFavourite(res.data);
    });
  }, []);

  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };


  const odAddToCart = (obj) => {
    axios.post('https://67367294aafa2ef222308aa6.mockapi.io/Cart', obj);
    setCartDoctors((prev) => [...prev, obj])
  };

  const onFavourite = async (obj) => {
    try {
      const existingItem = favourite.find(favObj => favObj.id === obj.id);
      if (existingItem) {
        await axios.delete(`https://67464f6f512ddbd807fb7e60.mockapi.io/favourites/${existingItem.id}`);
        console.log(`Товар ${existingItem.id} удалён с бэка, но остаётся визуально.`);
      } else {
        const { data } = await axios.post('https://67464f6f512ddbd807fb7e60.mockapi.io/favourites', obj);
        setFavourite((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error('Ошибка добавления/удаления избранного:', error);
    }
  };
  


  const onRemoveDoctor = (id) => {
    axios.delete(`https://67367294aafa2ef222308aa6.mockapi.io/Cart/${id}`);
    setCartDoctors((prev) => prev.filter((doctors) => doctors.id !== id));
  }

  return (
    <div className="wrapper clear">
      {cartOpened && < Cart doctors={cartDoctors} Cart onClose={() => setCartOpened(false)} onRemove={onRemoveDoctor} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/" element={
          <Home
            doctors={doctors}
            searchValue={searchValue}
            onFavourite={onFavourite}
            odAddToCart={odAddToCart}
            onChangeSearchInput={onChangeSearchInput}
          />
        } />
        <Route path="/favourites" element={
          <Favourites
            doctors={favourite}
            onFavourite={onFavourite}
          />
        } />
      </Routes>



    </div>

  );
}


export default App;
