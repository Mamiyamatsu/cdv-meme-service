import { BrowserRouter, Route, Routes } from "react-router";
import { RegularPage } from "./Pages/RegularPage";
import { HotPage } from "./Pages/HotPage";
import { WaitingRoomPage } from "./Pages/WaitingRoomPage";
import { ErrorPage } from "./Pages/ErrorPage";
import { Navigation } from "./Components/Navigation";
import { AdsComponent } from "./Components/AdsComponent";
import "./App.css";
import { FavouritesPage } from "./Pages/FavouritesPage";
import { FavouritesBar } from "./Components/FavouritesBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <main className="main">
            <Routes>
              <Route path="/" element={<RegularPage />}></Route>
              <Route path="/hot" element={<HotPage />}></Route>
              <Route path="/poczekalnia" element={<WaitingRoomPage />}></Route>
              <Route path="/favourites" element={<FavouritesPage />}></Route>
              <Route path="/*" element={<ErrorPage />}></Route>
            </Routes>
          </main>
          <aside className="aside">
            <FavouritesBar />
            <AdsComponent />
          </aside>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
