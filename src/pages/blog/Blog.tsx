import React from "react";

import style from "./blog.module.css";

const Blog = () => {
  return (
    <div className={style.container_blog_page}>
      <div className={style.about_section}>
        <div className={style.about_us}>О нас</div>
        <div className={style.about_description}>
          Мы делаем шикарные украшения для вас
        </div>
      </div>

      <div className={style.about_our_jewelry}>
        Наши украшения — это сочетание утонченного дизайна, высокого качества и
        любви к деталям. Мы стремимся передать индивидуальность и уникальность
        каждого изделия, создавая аксессуары, которые подчеркнут вашу красоту и
        стиль.
      </div>

      {/* блок про тренды  в украшениях */}
      <div className={style.block_trend_jewelery}>
        <div className={style.block_trend_jewelery_info}>
          <div className={style.trend_jewelery_text}>Тренды в украшениях</div>
          <div className={style.block_image_trend_jewelery}>
            <img
              src="https://shoppe-next.vercel.app/_next/image?url=%2Fimages%2Fslide.png&w=1920&q=75"
              alt="image trend jewelery"
              className={style.image_trend_jewelery}
            />
          </div>
        </div>
        <div className={style.block_trend_jewelery_info}>
          <div className={style.current_jewelry_trends}>
            Современные тенденции в ювелирном мире включают минимализм,
            натуральные материалы и персонализированные украшения. Все больше
            людей выбирают изделия с уникальным дизайном, символикой и смысловой
            нагрузкой, подчеркивая свою индивидуальность.
          </div>
          <ul className={style.popular_trends_list}>
            <li>Украшения с натуральными камнями и органическими формами</li>
            <li>Гравировка и персонализация изделий</li>
          </ul>
        </div>
      </div>
      {/* блок про тренды  в украшениях */}

      {/* блок "сделано с любовью" */}
      <div className={style.block_love_made}>
        <div className={style.block_love_made_info}>
          <div className={style.love_made_text}>Сделано с любовью</div>
          <div className={style.block_image_love_made}>
            <img
              src="https://shoppe-next.vercel.app/_next/image?url=%2Fimages%2Fslide-2.png&w=1920&q=75"
              alt="image love made"
              className={style.image_love_made}
            />
          </div>
        </div>

        <div className={style.block_love_made_info}>
          <div className={style.handmade_quality}>
            Каждое украшение создается вручную с любовью и вниманием к деталям.
            Мы используем только качественные материалы, чтобы наши изделия
            радовали вас долгие годы. Вдохновляйтесь, экспериментируйте и
            находите свое идеальное украшение вместе с нами!
          </div>
        </div>
      </div>
      {/* блок "сделано с любовью" */}
    </div>
  );
};

export default Blog;
