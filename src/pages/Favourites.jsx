import Card from "../components/Card";

function Favourites({ doctors, onFavourite }) {
    return (
        <div className="content p-40 ml-30">
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Избранные врачи</h1>
            </div>
            <div className="d-flex flex-wrap">
                {doctors.map((item, index) => (
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