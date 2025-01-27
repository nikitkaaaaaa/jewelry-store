import React from "react";

import style from "./main.module.css";
import Filters from "./filters/Filters";
import Products from "./products/Products";

const Main = () => {
  return (
    <>
      <div className={style.block_count_products}>
        <div className={style.shop_text}>Shop</div>
        <div className={style.count_products}>Всего 6 продуктов</div>
      </div>
      <div className={style.main}>
        <Filters />
        <Products />
      </div>
    </>
  );
};

export default Main;
