import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';


function App() {
  const [doctors, setDoctors] = React.useState([]);
  const [cartDoctors, setCartDoctors] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://67367294aafa2ef222308aa6.mockapi.io/Doctors').then(res => {
      setDoctors(res.data);
    });

    axios.get('https://67367294aafa2ef222308aa6.mockapi.io/Cart').then(res => {
      setCartDoctors(res.data);
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

  const onRemoveDoctor = (id) => {
    axios.delete(`https://67367294aafa2ef222308aa6.mockapi.io/Cart/${id}`);
    setCartDoctors((prev) => prev.filter(doctors => doctors.id !== id));
  }

  return (
    <div className="wrapper clear">
      {cartOpened && < Cart doctors={cartDoctors} Cart onClose={() => setCartOpened(false)} onRemove = {onRemoveDoctor} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40 ml-30">
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все врачи</h1>
          <div className="search-block d-flex">
            <input onChange={onChangeSearchInput} placeholder="Поиск..." />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="40px" height="40px"><path d="M 13 3 C 7.4889971 3 3 7.4889971
                    3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001
                    0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5
                    C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" fill="#1C274C" />
            </svg>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {doctors.filter(item => item.rank.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              rank={item.rank}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavourite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => odAddToCart(obj)} />
          ))}

        </div>
      </div>
    </div>

  );
}

export default App;
