function Cart() {
    return (
        <div style={{display: 'none' }} className="overlay">
            <div className="drawer">
                <div className="exitCart">
                    <h2 className="d-flex justify-between mb-30">Корзина<img className="opacity-3 cu-p" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </h2>
                </div>

                <div className="items" style={{ flex: 1 }}>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/doctors/1.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <h5>Название направления врача</h5>
                            <p className="mb-5">Ронами Валерий Гусейнович</p>
                            <b>1000 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/doctors/2.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <h5>Название направления врача</h5>
                            <p className="mb-5">Ронами Валерий Гусейнович</p>
                            <b>1000 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/doctors/3.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <h5>Название направления врача</h5>
                            <p className="mb-5">Ронами Валерий Гусейнович</p>
                            <b>1000 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/doctors/4.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <h5>Название направления врача</h5>
                            <p className="mb-5">Ронами Валерий Гусейнович</p>
                            <b>1000 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/doctors/5.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <h5>Название направления врача</h5>
                            <p className="mb-5">Ронами Валерий Гусейнович</p>
                            <b>1000 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/doctors/1.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <h5>Название направления врача</h5>
                            <p className="mb-5">Ронами Валерий Гусейнович</p>
                            <b>1000 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/doctors/2.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <h5>Название направления врача</h5>
                            <p className="mb-5">Ронами Валерий Гусейнович</p>
                            <b>1000 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/doctors/3.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <h5>Название направления врача</h5>
                            <p className="mb-5">Ронами Валерий Гусейнович</p>
                            <b>1000 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/doctors/4.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <h5>Название направления врача</h5>
                            <p className="mb-5">Лубенников Александр Евгеньевич</p>
                            <b>1000 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="remove" />
                    </div>
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