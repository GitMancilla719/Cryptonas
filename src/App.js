import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./common/components/Footer";
import Navbar from "./common/components/Navbar";
import ScrollToTop from "./common/components/ScrollToTop";
import Uc from "./common/components/Uc";
import PageNotFound from "./features/404/PageNotFound";
import CoinInfo from "./features/Coins/CoinInfo";
import CoinList from "./features/Coins/CoinList";
import Dashboard from "./features/Dashboard/Dashboard";
import Disclaimer from "./features/disclaimer/Disclaimer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route exact path="/" element={<Dashboard />} />

          <Route path="/coins">
            <Route index element={<CoinList />} />
            <Route path=":id" element={<CoinInfo />} />
          </Route>

          <Route path="/exchanges">
            <Route index element={<Uc />} />
            <Route path=":id" element={<Uc />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Disclaimer />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
