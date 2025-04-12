import { Book, Code, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    title: "Baccalauréat en Science Physique",
    institution: "LE HO SOUISSI",
    years: "2022-2023",
    icon: <GraduationCap className="w-12 h-12 text-yellow-500" />,
  },
  {
    id: 2,
    title: "Diplome en Développement Web full stack",
    institution: "OFPPT - CENTRE MIXTE ",
    years: "2023-2025",
    icon: <Book className="w-12 h-12 text-yellow-500" />,
  },
];

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <motion.h1 
        className="text-5xl font-bold text-center text-yellow-500 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mon Parcours Éducatif
      </motion.h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative bg-gray-900 shadow-lg rounded-lg p-8 border border-yellow-500 
                       transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-yellow-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-6">
              {item.icon}
              <h2 className="text-2xl font-semibold ml-4 text-white">{item.title}</h2>
            </div>
            <p className="text-gray-400 mb-4">{item.institution}</p>
            <p className="text-gray-500">{item.years}</p>

            {/* Ajout d'un léger effet lumineux au survol */}
            <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-20 bg-yellow-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
