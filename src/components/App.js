import Header from "./Header";
import Footer from "./Footer";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Timer from "./Timer";

function App() {
  return (
    <div>
      <Header />
      <div class="md:flex justify-around">
        <div class="md:hidden">
          <Timer />
        </div>
        <div>
          <Ingredients />
          <Instructions />
        </div>
        <div class="md:block">
          <Timer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
