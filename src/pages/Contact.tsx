import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const GETFORM_ENDPOINT = "https://getform.io/f/bjjrvpxb"; // <-- remplace par ton endpoint

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const response = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Une erreur est survenue. Veuillez réessayer !");
      }
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer !");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ backgroundColor: "#0A1A3F" }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Contactez-nous
      </h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-gray-300 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Vous avez un projet ou une idée ?
          </h2>
          <p className="text-lg md:text-xl">
            Que ce soit une question, un projet digital, ou simplement envie
            d’échanger, nous sommes là pour vous écouter.
          </p>
          <p className="text-lg md:text-xl">
            Remplissez le formulaire ci-dessous ou contactez-nous directement,
            et faisons avancer vos idées ensemble.
          </p>
          <p className="text-lg md:text-xl italic text-teal-400">
            Votre succès commence par une conversation — n’attendez plus pour
            nous rejoindre !
          </p>
        </div>

        {/* Formulaire à droite */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-[#081233] p-8 md:p-10 rounded-xl shadow-xl flex flex-col gap-6"
        >
          <div className="flex flex-col">
            <label className="text-gray-300 mb-2" htmlFor="name">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-[#0D1A3F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-[#0D1A3F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="px-4 py-3 rounded-lg bg-[#0D1A3F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Votre message..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Envoi..." : "Envoyer"}
          </button>

          {success && (
            <p className="text-green-400 mt-2 text-center">
              Merci ! Votre message a été envoyé avec succès.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
