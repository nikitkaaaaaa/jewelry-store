import React from "react";

import style from "./favorites.module.css";

const Favorites = () => {
  return (
    <div className={style.favorites}>
      <div className={style.empty_favorites}>
        <div className={style.empty_favorites_text}>В избранном пусто</div>
        <div>Добавляйте товары с помощью ❤️️</div>
      </div>
    </div>
  );
};

export default Favorites;
