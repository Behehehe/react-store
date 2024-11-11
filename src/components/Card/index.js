import React from 'react';
import cardStyles from './Card.module.scss';

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }
    console.log(isAdded)

    console.log(props);
    return (
        <div className={cardStyles.card}>

            <div className={cardStyles.favourite}>
                <img className="opacity-3"
                width={32} height={32}
                src="/img/notliked.svg" alt="notliked"
                onClick={props.onClickFavourite} />
            </div>

            <img width={150} height={150} src={props.imageUrl} alt="doctors" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img className={cardStyles.plus} onClick={onClickPlus}
                width={30} height={30}
                src={isAdded ? "/img/addPlus.svg" : "/img/plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card