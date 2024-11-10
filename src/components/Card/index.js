import cardStyles from './Card.module.scss';

function Card(props) {
    console.log(props);
    return (
        <div className={cardStyles.card}>

            <div className={cardStyles.favourite}>
                <img className="opacity-3" width={32} height={32} src="/img/notliked.svg" alt="notliked" />
            </div>
            
            <img width={150} height={150} src={props.imageUrl} alt="doctors" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" onClick={props.onClick}>

                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>

        </div>
    );
}

export default Card