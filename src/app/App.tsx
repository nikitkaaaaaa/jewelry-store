import { Route, Routes } from "react-router-dom";
import "./global.css";
import routes from "../routes/routes";
import Header from "../componets/header/Header";
import Main from "../pages/main/Main";
import Blog from "../pages/blog/Blog";
import Footer from "../componets/footer/Footer";
import Favorites from "../pages/favorites/Favorites";
import Cart from "../pages/cart/Cart";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path={routes.main} element={<Main />}></Route>
        <Route path={routes.blog} element={<Blog />}></Route>
        <Route path={routes.favorites} element={<Favorites />}></Route>
        <Route path={routes.cart} element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
