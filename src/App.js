import BannerHome from "./layout/BannerHome";
import CategoriesHome from "./layout/CategoriesHome";
import Footer from "./layout/Footer";
import LatestRecipesHome from "./layout/LatestRecipesHome";
import Nav from "./layout/Nav";
import WorldMealsHome from "./layout/WorldMealsHome";

function App() {
  return (
    <div className="App">
      <Nav />
      <BannerHome />
      <CategoriesHome />
      <WorldMealsHome />
      <LatestRecipesHome />
      <Footer />
    </div>
  );
}

export default App;
