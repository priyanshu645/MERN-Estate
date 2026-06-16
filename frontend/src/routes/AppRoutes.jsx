import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PropertyListing from "../pages/PropertyListing";
import PropertyDetails from "../pages/PropertyDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/properties" element={<PropertyListing />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  );
}