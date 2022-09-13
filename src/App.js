import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/components/Navbar";
import ScrollToTop from "./common/components/ScrollToTop";
import PageNotFound from "./features/404/PageNotFound";
import CoinInfo from "./features/Coins/CoinInfo";
import CoinList from "./features/Coins/CoinList";
import Dashboard from "./features/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/gainers-and-losers" element={<Dashboard />} />

          <Route path="/coins">
            <Route index element={<CoinList />} />
            <Route path=":id" element={<CoinInfo />} />
          </Route>

          <Route path="/exchanges">
            <Route index element={<Dashboard />} />
            <Route path=":id" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
