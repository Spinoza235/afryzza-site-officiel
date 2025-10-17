// src/App.tsx
import { Routes, Route } from 'react-router-dom';


import Services from "./pages/Services";
import Footer from './components/Footer'
import  Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenu principal avec flex-grow pour pousser le footer en bas */}
  
      <main className="flex-grow">
        <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="/service" element={<Services/>} />
          
         <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      
      {/* Footer fixe en bas */}
      <Footer />
    </div>
  );
   
}

export default App
