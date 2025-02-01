import React, { useState } from "react";

import style from "../main.module.css";

import FilterTypeJewelery from "./FilterTypeJewelery";
import FilterPrice from "./FilterPrice";
import FilterMaterial from "./FilterMaterial";

const Filters = () => {
  return (
    <div className={style.filters}>
      <div className={style.block_filters}>
        <FilterMaterial />
        <FilterTypeJewelery />
        <FilterPrice />
      </div>
    </div>
  );
};

export default Filters;
