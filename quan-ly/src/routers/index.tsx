import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "../layouts/AdminPage";
import Products from "../page/component/Products";
import DashBoard from "../page/DashBoard";
import NotFound from "../page/NotFound";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AdminPage />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
