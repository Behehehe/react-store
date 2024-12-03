import React from 'react';
import cardStyles from './Card.module.scss';

function Card({ id, onClickFavourite, title, imageUrl, price, onPlus, rank, nowFavourite = false }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(nowFavourite);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price, rank });
        setIsAdded(!isAdded);
    }

    const addOnFavourite = () => {
        onClickFavourite({ id, title, imageUrl, price, rank });
        setIsFavourite(!isFavourite);

    }

    return (
        <div className={cardStyles.card}>

            <div className={cardStyles.favourite}>
                <img className="opacity-3"
                    width={32} height={32}
                    src={isFavourite ? "/img/liked.svg" : "/img/notliked.svg"} alt="notliked"
                    onClick={addOnFavourite} />
            </div>

            <img width={150} height={150} src={imageUrl} alt="doctors" />
            <b>{rank}</b>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена за сеанс:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={cardStyles.plus} onClick={onClickPlus}
                    width={30} height={30}
                    src={isAdded ? "/img/addplus.svg" : "/img/plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card