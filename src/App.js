import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/statics/NavBar";
import NavBarCustom from "./components/statics/NavBarCustom";
import Footer from "./components/statics/Footer";
import "./styles.css";

// import WelcomeSection from "./components/WelcomeSection";
// import HeroSection from "./components/HeroSection";
// import SpecialDishes from "./components/SpecialDishes";
// import Menu from "./components/pages/Menu";
// import Team from "./components/pages/Team";
// import Testimony from "./components/Testimony";
// import Reservation from "./components/pages/Reservation";

import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu/Menu";
import CreateProduct from "./components/Products/Create/CreateProduct";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        <NavBarCustom />

        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
