import React from 'react';
import cardStyles from './Card.module.scss';

function Card({ onClickFavourite, title, imageUrl, price, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    return (
        <div className={cardStyles.card}>

            <div className={cardStyles.favourite}>
                <img className="opacity-3"
                    width={32} height={32}
                    src="/img/notliked.svg" alt="notliked"
                    onClick={onClickFavourite} />
            </div>

            <img width={150} height={150} src={imageUrl} alt="doctors" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена за сеанс:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={cardStyles.plus} onClick={onClickPlus}
                    width={30} height={30}
                    src={isAdded ? "/img/addPlus.svg" : "/img/plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card