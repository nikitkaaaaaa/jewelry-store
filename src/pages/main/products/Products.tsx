import React from "react";

import style from "../main.module.css";
import Card from "../../../componets/card/Card";
import Iproducts from "../../../api/productsApi/Iproducts";

interface ProductsProps {
  products: Iproducts[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className={style.products}>
      {products.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
