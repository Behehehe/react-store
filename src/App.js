import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';


function App() {
  const [doctors, setDoctors] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://67367294aafa2ef222308aa6.mockapi.io/Doctors')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setDoctors(json);
      });
  }, []);
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Cart onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40 ml-30">
        <h1 className="mb-40">Название специальности врача</h1>

        <div className="d-flex flex-wrap">
          {doctors.map((obj) => (
            <Card title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickFavourite={() => console.log("Добавили в закладки")}
              onClickPlus={() => console.log("Добавили в корзину")} />
          ))}

        </div>
      </div>
    </div>

  );
}

export default App;
