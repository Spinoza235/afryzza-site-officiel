// src/App.tsx
import { Routes, Route } from 'react-router-dom';


import Services from "./pages/Services";
import Footer from './components/Footer'
import  Home from './pages/Home';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Realisations from './pages/Realisations';
import Header from './components/layouts/Header'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenu principal avec flex-grow pour pousser le footer en bas */}
     <Header/>
      <main className="flex-grow py-4">
        <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="/realisations" element={<Realisations/>} />
          <Route path="/services" element={<Services/>} />
           <Route path="/about" element={<About/>} />
          <Route path="*" element={<ErrorPage/>} />
         <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      
      {/* Footer fixe en bas */}
      <Footer />
    </div>
  );
   
}

export default App
