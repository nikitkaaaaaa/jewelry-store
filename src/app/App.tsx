import { Route, Routes } from "react-router-dom";
import "./global.css";
import routes from "../routes/routes";
import Header from "../componets/header/Header";
import Main from "../pages/main/Main";
import Blog from "../pages/blog/Blog";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path={routes.main} element={<Main />}></Route>
        <Route path={routes.blog} element={<Blog />}></Route>
      </Routes>
    </div>
  );
};

export default App;
