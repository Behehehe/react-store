import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

function App() {
  const [services, setServices] = React.useState([]);
  const [cartServices, setCartServices] = React.useState([]);
  const [favourite, setFavourite] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://67367294aafa2ef222308aa6.mockapi.io/Services")
      .then((res) => {
        setServices(res.data);
      });

    axios
      .get("https://67367294aafa2ef222308aa6.mockapi.io/Cart")
      .then((res) => {
        setCartServices(res.data);
      });

    axios
      .get("https://67464f6f512ddbd807fb7e60.mockapi.io/favourites")
      .then((res) => {
        setFavourite(res.data);
      });
  }, []);

  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const odAddToCart = async (obj) => {
    try {
      const existingItem = cartServices.find(
        (cartObj) => cartObj.id === obj.id
      );

      if (existingItem) {
        await axios.delete(
          `https://67367294aafa2ef222308aa6.mockapi.io/Cart/${existingItem.id}`
        );
        setCartServices((prev) =>
          prev.filter((cartItem) => cartItem.id !== existingItem.id)
        );
      } else {
        const { data } = await axios.post(
          "https://67367294aafa2ef222308aa6.mockapi.io/Cart",
          obj
        );
        setCartServices((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error("Ошибка добавления/удаления из корзины:", error);
    }
  };

  const onFavourite = async (obj) => {
    try {
      const existingItem = favourite.find((favObj) => favObj.id === obj.id);
      if (existingItem) {
        await axios.delete(
          `https://67464f6f512ddbd807fb7e60.mockapi.io/favourites/${existingItem.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://67464f6f512ddbd807fb7e60.mockapi.io/favourites",
          obj
        );
        setFavourite((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error("Ошибка добавления/удаления избранного:", error);
    }
  };

  const onRemoveServices = (id) => {
    axios.delete(`https://67367294aafa2ef222308aa6.mockapi.io/Cart/${id}`);
    setCartServices((prev) => prev.filter((services) => services.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart
          services={cartServices}
          Cart
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveServices}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              services={services}
              searchValue={searchValue}
              onFavourite={onFavourite}
              odAddToCart={odAddToCart}
              onChangeSearchInput={onChangeSearchInput}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites services={favourite} onFavourite={onFavourite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
