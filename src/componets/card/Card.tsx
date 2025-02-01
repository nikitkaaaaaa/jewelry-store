import React from "react";

import style from "./card.module.css";

interface CardProps {
  image: string[];
  title: string;
  price: number;
}

const Card = ({ image, title, price }: CardProps) => {
  return (
    <div className={style.card}>
      <img src={image[0]} alt={title} className={style.image_product} />

      <div className={style.title_product}>{title}</div>
      <div className={style.price_product}>
        {price.toLocaleString("ru-Ru")} ₽
      </div>
      {/* сделть пробел в цене например 13 900 rub */}
    </div>
  );
};

export default Card;
