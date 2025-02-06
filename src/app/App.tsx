import { Route, Routes } from "react-router-dom";
import "./global.css";
import routes from "../routes/routes";
import Header from "../componets/header/Header";
import Main from "../pages/main/Main";
import Blog from "../pages/blog/Blog";
import Footer from "../componets/footer/Footer";
import Favorites from "../pages/favorites/Favorites";
import Cart from "../pages/cart/Cart";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path={routes.main} element={<Main />}></Route>
        <Route path={routes.aboutUs} element={<Blog />}></Route>
        <Route path={routes.favorites} element={<Favorites />}></Route>
        <Route path={routes.cart} element={<Cart />}></Route>
        <Route path={routes.notFoundPage} element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
