import React, { useState } from "react";

import style from "../main.module.css";
import ArrowIcon from "../../../assets/ArrowIcon";
import ResetCurrentFilter from "../../../assets/ResetCurrentFilter";

const FilterColor = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const colorsJewelery: string[] = ["Золотой", "Серебро", "Белый"];

  const [currentColor, setCurrentColor] = useState<number | null>(null);

  const handleSelectColor = (index: number): void => {
    setCurrentColor(index);
    setOpenFilter(false);
  }; // функция для выборки цвета

  return (
    <>
      <div className={style.filter_color_name}>Фильтр по цвету</div>
      <form>
        <div className={`${style.filter_color} ${openFilter && style.active}`}>
          <div
            className={style.current_color_filter}
            onClick={() => setOpenFilter((prev) => !prev)}
          >
            <div>
              {currentColor === null
                ? "Не выбран"
                : colorsJewelery[currentColor]}
            </div>
            <div className={style.block_icons_filter}>
              {currentColor !== null && (
                <span
                  style={{ marginBottom: "4px" }}
                  onClick={() => setCurrentColor(null)}
                >
                  <ResetCurrentFilter />
                </span>
              )}
              <ArrowIcon />
            </div>
          </div>
        </div>

        {openFilter && (
          <div
            className={`${style.type_color_filter} ${
              openFilter && style.active
            }`}
          >
            {colorsJewelery.map((item, index) => (
              <div
                key={index}
                className={style.current_type_color_filter}
                onClick={() => handleSelectColor(index)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </form>
    </>
  );
};

export default FilterColor;
