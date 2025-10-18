import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// === COMPONENTS ===
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";

// === PAGES ===
import Home from "./pages/Home";
import Realisations from "./pages/Realisations";
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
              <Header />
              <main className="flex-grow mt-16">
                <Home />
              </main>
            </div>
          }
        />

        {/* === RÉALISATIONS === */}
        <Route
          path="/realisations"
          element={
            <div className="min-h-screen flex flex-col bg-[#0A1A3F] text-white">
              <Header />
              <main className="flex-grow mt-16">
                <Realisations />
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
