import { Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetail";
import { AdminGate } from "./pages/AdminGate";
import { AdminDashboard } from "./pages/AdminDashboard";

export default function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<AdminGate />} />
        <Route path="/admin/panel" element={<AdminDashboard />} />
      </Routes>
    </ProductsProvider>
  );
}
