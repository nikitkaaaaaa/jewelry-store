import React from "react";

import style from "./main.module.css";
import Filters from "./filters/Filters";
import Products from "./products/Products";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";

const Main = () => {
  const { data: products = [] } = useGetProductsQuery();

  return (
    <>
      <div className={style.block_count_products}>
        <div className={style.shop_text}>Shop</div>
        <div className={style.count_products}>
          Всего {products.length} продуктов
        </div>
      </div>
      <div className={style.main}>
        <Filters />
        <Products products={products} />
      </div>
    </>
  );
};

export default Main;
