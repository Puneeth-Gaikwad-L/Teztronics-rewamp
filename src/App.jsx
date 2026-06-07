import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import ContactForm from "./components/ContactForm";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <main>
              <Hero />
              <About />
              <FeaturedProducts />
              <Products />
              <ContactForm />
            </main>
          </Layout>
        }
      />
      <Route
        path="/product/:productId"
        element={
          <Layout>
            <ProductDetail />
          </Layout>
        }
      />
    </Routes>
  );
}
