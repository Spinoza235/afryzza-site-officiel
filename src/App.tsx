import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// === COMPONENTS ===
import ScrollToTopButton from "./components/ScrollToTopButton";

// === PAGES ===
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* === PAGE D’ACCUEIL === */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col bg-[#0A1A3F] text-white">
              <main className="flex-grow mt-16">
                <Home />
              </main>
            </div>
          }
        />

        {/* === PAGE D’ERREUR === */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ScrollToTopButton />
    </Router>
  );
}
