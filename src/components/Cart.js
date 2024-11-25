function Cart({ onClose, onRemove, doctors = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="exitCart">
                    <h2 className="d-flex justify-between mb-30">Корзина<img onClick={onClose} className="opacity-3 cu-p" width={32} height={32} src="/img/remove.svg" alt="Close" />
                    </h2>
                </div>


                <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="emptyCart" />
                    <h2>Корзина пустая</h2>
                    <p className="opasity-6">Добавьте хотя бы одного врача, чтобы провести запись.</p>
                    <button className="greenButton">
                        <img width={14} height={15} src="/img/arrow.svg" alt="arrow" />
                        Вернуться назад
                    </button>
                </div>


                <div className="items" style={{ flex: 1 }}>
                    {doctors.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>

                            <div className="mr-20 flex">
                                <h5>{obj.rank}</h5>
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                        </div>
                    ))}
                </div>


                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>2000 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>100 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Оформить заявку <img width={14} height={15} src="/img/arrow.svg" alt="arrow" />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Cart;