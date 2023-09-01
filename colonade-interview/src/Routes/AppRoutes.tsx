import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { DetailPage } from "../Pages/DetailPage";
import { FavouritesPage } from "../Pages/Favourites";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<DetailPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
