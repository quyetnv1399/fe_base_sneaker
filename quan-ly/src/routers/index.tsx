import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "../layouts/admin/AdminPage";
import Products from "../page/component/Products";
import DashBoard from "../page/dashboard/DashBoard";
import NotFound from "../page/not-found/NotFound";

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
