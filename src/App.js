import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy-loaded page components
const HomePage = lazy(() => import("./pages/Home"));
const LazyAboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAboutPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
