import React, { useState } from "react";

import style from "../main.module.css";
import FilterColor from "./FilterColor";
import FilterTypeJewelery from "./FilterTypeJewelery";
import FilterPrice from "./FilterPrice";

const Filters = () => {
  return (
    <div className={style.filters}>
      <FilterColor />
      <FilterTypeJewelery />
      <FilterPrice />
      <button className={style.apply_filters}>Применить фильтры</button>
    </div>
  );
};

export default Filters;
