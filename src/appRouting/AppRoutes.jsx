import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  About,
  Homepage,
  Cart,
  Contact,
  Checkout,
  SingleProduct,
  Shop,
} from "../pages";
import {
  AdminDashboard,
  ChefDashboard,
  OwnerDashboard,
  UserDashboard,
} from "../Dashboard";
import { Footer, Header } from "../components";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/dashboard/owner" element={<OwnerDashboard />} />
        <Route path="/dashboard/chef" element={<ChefDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
