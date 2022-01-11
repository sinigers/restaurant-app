import HeroSection from "../HeroSection";
import SpecialDishes from "../SpecialDishes";
import WelcomeSection from "../WelcomeSection";
import MenuSection from "../MenuSection";
import Testimony from "../Testimony";
import Team from "./Team";
import Reservation from "./Reservation";

const Home = () => {
  return (
    <div className="wrapper">
      <HeroSection />
      <WelcomeSection />
      <SpecialDishes />
      <MenuSection />
      <Testimony />
      <Team />
      <Reservation />
    </div>
  );
};

export default Home;
