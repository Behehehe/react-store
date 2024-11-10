function Card() {
    return (
        <div className="card">

            <div className="favourite">
                <img className="opacity-3" width={32} height={32} src="/img/notliked.svg" alt="notliked" />
            </div>
            
            <img width={150} height={150} src="/img/doctors/1.jpg" alt="doctors" />
            <h5>Ронами Валерий Гусейнович</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>1000 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>

        </div>
    );
}

export default Card