import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ProductsProvider } from "./context/ProductsContext";
import Cart from "./features/products/Cart";

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
