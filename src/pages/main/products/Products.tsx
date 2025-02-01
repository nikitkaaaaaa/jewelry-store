import React from "react";

import style from "../main.module.css";
import Card from "../../../componets/card/Card";
import { useGetProductsQuery } from "../../../api/productsApi/productsApi";

const Products = () => {
  const { data: products = [] } = useGetProductsQuery();

  return (
    <div className={style.products}>
      {products.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
