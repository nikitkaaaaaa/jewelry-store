import React, { useState } from "react";
// type_jewelery
import style from "../main.module.css";
import ArrowIcon from "../../../assets/ArrowIcon";
import ResetCurrentFilter from "../../../assets/ResetCurrentFilter";

const FilterTypeJewelery = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const typeJewelery: string[] = ["Кольца", "Цепочки", "Серьги"];

  const [currentTypeJewelery, setCurrentTypeJewelery] = useState<number | null>(
    null
  );

  const handleSelectTypeJewelery = (index: number): void => {
    setCurrentTypeJewelery(index);
    setOpenFilter(false);
  }; // функция для выборки вида изделия

  return (
    <>
      <div className={style.filter_type_jewelery_name}>
        Фильтр по виду изделия
      </div>
      <form>
        <div
          className={`${style.filter_type_jewelery} ${
            openFilter && style.active
          }`}
        >
          <div
            className={style.current_color_filter}
            onClick={() => setOpenFilter((prev) => !prev)}
          >
            <div>
              {currentTypeJewelery === null
                ? "Не выбран"
                : typeJewelery[currentTypeJewelery]}
            </div>
            <div className={style.block_icons_filter}>
              {currentTypeJewelery !== null && (
                <span
                  style={{ marginBottom: "4px" }}
                  onClick={() => setCurrentTypeJewelery(null)}
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
            className={`${style.type_jewelery_filter} ${
              openFilter && style.active
            }`}
          >
            {typeJewelery.map((item, index) => (
              <div
                key={index}
                className={style.current_type_jewelery_filter}
                onClick={() => handleSelectTypeJewelery(index)}
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

export default FilterTypeJewelery;
