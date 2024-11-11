import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';


const arr = [
  { title: 'Ронами Валерий Гусейнович', price: 1000, imageUrl: "/img/doctors/1.jpg" },
  { title: 'Лубиков Алексей Евгеньевич', price: 2000, imageUrl: "/img/doctors/2.jpg" },
  { title: 'Ардашева Елена Игоревна', price: 3000, imageUrl: "/img/doctors/3.jpg" },
  { title: 'Шатрова Валентина Петровна', price: 4000, imageUrl: "/img/doctors/4.jpg" },
  { title: 'Бандурина Татьяна Юрьевна', price: 5000, imageUrl: "/img/doctors/5.jpg" },
]


function App() {
 return (
    <div className="wrapper clear">
      <Cart />

      <Header />

      <div className="content p-40 ml-30">
        <h1 className="mb-40">Название специальности врача</h1>
        <div className="d-flex">

          {arr.map((obj) => (
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
