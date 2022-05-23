import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/home" element={<Home />} />
            <Route path="/check" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
