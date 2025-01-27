import React, { useState } from "react";

import style from "../main.module.css";
import ResetCurrentFilter from "../../../assets/ResetCurrentFilter";

const FilterPrice = () => {
  const [priceFrom, setPriceFrom] = useState<string>("");

  const [priceTo, setPriceTo] = useState<string>("");

  return (
    <>
      <div className={style.filter_price_name}>Фильтр по цене</div>
      <form>
        <div className={style.filter_price}>
          <div className={style.block_inputs_filter_price}>
            {/* Цена от */}
            <div className={style.price_from}>
              <input
                type="number"
                placeholder="от 0"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
              />
              {priceFrom && (
                <div
                  className={style.clear_price_icon}
                  onClick={() => setPriceFrom("")}
                >
                  <ResetCurrentFilter />
                </div>
              )}
            </div>
            {/* Цена до */}
            <div className={style.price_to}>
              <input
                type="number"
                placeholder="до 1200"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
              />
              {priceTo && (
                <div
                  className={style.clear_price_icon}
                  onClick={() => setPriceTo("")}
                >
                  <ResetCurrentFilter />
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FilterPrice;
