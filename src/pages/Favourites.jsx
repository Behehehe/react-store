import Card from "../components/Card";

function Favourites({ services, onFavourite }) {
    return (
        <div className="content p-40 ml-30">
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Избранные услуги</h1>
            </div>
            <div className="d-flex flex-wrap">
                {services.map((item, index) => (
                    <Card
                        key={index}
                        nowFavourite={true}
                        onClickFavourite={onFavourite}
                        {...item} />
                ))}
            </div>
        </div>
    );
}

export default Favourites;