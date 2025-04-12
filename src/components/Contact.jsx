import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-yellow-500 px-6 py-12">
      <h1 className="text-5xl font-bold text-center mb-8">Me Contacter</h1>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-lg w-full bg-gray-900 shadow-lg rounded-2xl p-8 border border-yellow-500"
      >
        <p className="text-lg mb-6 text-center text-yellow-400">
          Une question ou un projet en tête ? Remplissez ce formulaire et je vous répondrai rapidement.
        </p>
        <form className="space-y-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <label htmlFor="name" className="block text-lg mb-2">Nom</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 text-white bg-gray-800 rounded-lg border border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Votre nom"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 text-white bg-gray-800 rounded-lg border border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Votre email"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <label htmlFor="message" className="block text-lg mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 text-white bg-gray-800 rounded-lg border border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Votre message..."
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold text-lg transition duration-300 hover:bg-yellow-600 shadow-md shadow-yellow-500/50"
          >
            Envoyer le message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;