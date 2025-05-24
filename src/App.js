import { BrowserRouter, Route, Routes } from "react-router";
import { RegularMemes } from "./Pages/RegularMemes";
import { HotMemes } from "./Pages/HotMemes";
import { PoczekalniaMemes } from "./Pages/PoczekalniaMemes";
import { ErrorPage } from "./Pages/ErrorPage";
import { Navigation } from "./Components/Navigation"
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<RegularMemes />}></Route>
            <Route path="/hot" element={<HotMemes />}></Route>
            <Route path="/poczekalnia" element={<PoczekalniaMemes />}></Route>
            <Route path="/*" element={<ErrorPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
