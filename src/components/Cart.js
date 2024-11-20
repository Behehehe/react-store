 function Cart({onClose, doctors = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="exitCart">
                    <h2 className="d-flex justify-between mb-30">Корзина<img onClick={onClose} className="opacity-3 cu-p" width={32} height={32} src="/img/remove.svg" alt="Close" />
                    </h2>
                </div>

                <div className="items" style={{ flex: 1 }}>
                    {doctors.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div style={{ backgroundImage: `url(${obj.imageUrl  })` }} className="cartItemImg"></div>

                            <div className="mr-20 flex">
                                <h5>Название направления врача</h5>
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
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