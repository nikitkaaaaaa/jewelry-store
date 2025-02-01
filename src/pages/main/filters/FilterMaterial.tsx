import React, { useState } from "react";

import style from "../main.module.css";
import ArrowIcon from "../../../assets/ArrowIcon";
import ResetCurrentFilter from "../../../assets/ResetCurrentFilter";

const FilterMaterial = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const materialJewelery: string[] = ["Золото", "Серебро", "Белое золото"];

  const [currentMaterial, setCurrentMaterial] = useState<number | null>(null);

  const handleSelectColor = (index: number): void => {
    setCurrentMaterial(index);
    setOpenFilter(false);
  }; // функция для выборки цвета

  return (
    <>
      <div className={style.filter_color_name}>Фильтр по материалу </div>
      <form>
        <div className={`${style.filter_color} ${openFilter && style.active}`}>
          <div
            className={style.current_color_filter}
            onClick={() => setOpenFilter((prev) => !prev)}
          >
            <div>
              {currentMaterial === null
                ? "Не выбран"
                : materialJewelery[currentMaterial]}
            </div>
            <div className={style.block_icons_filter}>
              {currentMaterial !== null && (
                <span
                  style={{ marginBottom: "4px" }}
                  onClick={() => setCurrentMaterial(null)}
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
            {materialJewelery.map((item, index) => (
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

export default FilterMaterial;
