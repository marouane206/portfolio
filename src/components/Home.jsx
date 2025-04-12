import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const text = "Je m'appelle Marouane Fellahi, j'ai 19 ans, et je suis développeur web spécialisé dans la création de sites web modernes et performants. Fort d'une solide expérience en développement front-end et back-end, je m'engage à offrir des solutions sur mesure, innovantes et adaptées aux besoins spécifiques de chaque client. Passionné par l'optimisation de l'expérience utilisateur et la performance des applications, je me consacre à construire des sites web robustes, intuitifs et responsives. Mon objectif est de concevoir des projets web qui allient esthétique, fonctionnalité et efficacité, tout en respectant les meilleures pratiques de développement.";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-black to-gray-800 text-yellow-500 p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-semibold text-yellow-400 mb-4">Bienvenue sur mon Portfolio</h1>

        {/* Texte animé lettre par lettre */}
        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: { transition: { staggerChildren: 0.02 } }
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.12, delay: index * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out hover:bg-yellow-600"
          >
            Voir mon CV
          </a>

          <Link
            to="/contact"
            className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-black"
          >
            Contactez-moi
          </Link>
        </div>

        {/* Boutons dynamiques */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/marouane206"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-yellow-500 bg-gray-900 text-yellow-500 px-4 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-black"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>

          <a
            href="mailto:fellahimarouane0@gmail.com"
            className="flex items-center gap-2 border border-yellow-500 bg-gray-900 text-yellow-500 px-4 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-black"
          >
            <FaEnvelope className="text-xl" /> Email
          </a>

          <a
            href="tel:+212 703692986"
            className="flex items-center gap-2 border border-yellow-500 bg-gray-900 text-yellow-500 px-4 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-black"
          >
            <FaPhone className="text-xl" /> Téléphone
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
