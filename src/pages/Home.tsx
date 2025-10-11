import React from "react";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenu principal fictif pour pousser le footer en bas */}
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl font-bold">Page de test du Footer</h1>
      </main>

   
    </div>
  );
};

export default Home;
