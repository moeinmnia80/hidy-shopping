import NotFoundPage from "./pages/404";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout.jsx";
import { store } from "./store/store.js";
import { Routes, Route } from "react-router";
import CheckoutPage from "./pages/CheckoutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetailPage from "./pages/ProductsDetailPage.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductsPage />}></Route>
            <Route path="products/:id" element={<ProductsDetailPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
