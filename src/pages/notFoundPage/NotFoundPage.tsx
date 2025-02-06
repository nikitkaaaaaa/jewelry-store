import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./notFoundPage.module.css";
import routes from "../../routes/routes";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const rotateToMainPage = () => {
    navigate(routes.main);
  };

  return (
    <div className={style.not_found_page}>
      <img
        src="https://shoppe-next.vercel.app/images/not-found.svg"
        alt="not found page"
        className={style.image_not_found_page}
      />
      <div className={style.error_block}>
        <div className={style.code_error}>404 ошибка</div>
        <div className={style.description_error}>
          Страница не найдена, попробуйте перейти на главную страницу
        </div>
      </div>
      <button
        className={style.button_not_found_page}
        onClick={rotateToMainPage}
      >
        Главная страница
      </button>
    </div>
  );
};

export default NotFoundPage;
