import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

const arr = [
  {name: 'Ронами Валерий Гусейнович', price: 1000},
  {name: 'Лубенников Александр Евгеньевич', price: 2000},
]


function App() {
  return (
    <div className="wrapper clear">
      <Cart />

      <Header />

      <div className="content p-40 ml-30">
        <h1 className="mb-40">Название направления врача</h1>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card />
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
