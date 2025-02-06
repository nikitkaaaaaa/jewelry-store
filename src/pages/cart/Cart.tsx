import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./cart.module.css";
import routes from "../../routes/routes";

const Cart = () => {
  const navigate = useNavigate();

  const rotateToProductsPage = () => {
    navigate(routes.main);
  };
  return (
    <div className={style.cart}>
      <div className={style.title_cart}>Корзина</div>
      <div className={style.empty_cart}>
        <div className={style.cart_empty_text}>Корзина пуста</div>
        <div>Ваша корзина пуста – самое время её наполнить!</div>
        <button
          className={style.button_start_shopping}
          onClick={rotateToProductsPage}
        >
          Начать покупки
        </button>
      </div>
    </div>
  );
};

export default Cart;
