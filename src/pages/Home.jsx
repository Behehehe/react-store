import Card from '../components/Card';


function Home({ services, searchValue, onFavourite, odAddToCart, onChangeSearchInput }) {
    return (
        <div className="content p-40 ml-30">
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Все услуги</h1>
                <div className="search-block d-flex">
                    <input onChange={onChangeSearchInput} placeholder="Поиск..." />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="40px" height="40px"><path d="M 13 3 C 7.4889971 3 3 7.4889971
                    3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001
                    0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5
                    C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" fill="#ff7086" />
                    </svg>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {services.filter(item => item.service.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                    <Card
                        key={index}
                        onClickFavourite={(obj) => onFavourite(obj)}
                        onPlus={(obj) => odAddToCart(obj)}
                        {...item} />
                ))}

            </div>
        </div>
    );
}

export default Home;