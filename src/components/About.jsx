import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Front-End",
    skills: [
      { name: "HTML", description: "Langage de structure des pages web.", image: "/images/html.png" },
      { name: "CSS", description: "Langage de style pour la mise en page.", image: "/images/css.png" },
      { name: "JavaScript", description: "Langage de programmation dynamique.", image: "/images/javascript.png" },
      { name: "React.js", description: "Bibliothèque JavaScript pour les interfaces utilisateur.", image: "/images/react.png" },
      { name: "Tailwind CSS", description: "Framework CSS utilitaire pour des designs modernes.", image: "/images/tailwind.png" }
    ]
  },
  {
    category: "Back-End",
    skills: [
      { name: "PHP", description: "Langage de script côté serveur.", image: "/images/php.png" },
      { name: "Laravel", description: "Framework PHP pour le développement web.", image: "/images/laravel.png" },
      { name: "MongoDB", description: "Base de données NoSQL flexible.", image: "/images/mongodb.png" },
      { name: "MySQL", description: "Système de gestion de bases de données relationnelles.", image: "/images/mysql.png" }
    ]
  },
  {
    category: "Bureautique",
    skills: [
      { name: "Excel", description: "Logiciel de tableur avancé.", image: "/images/excel.png" },
      { name: "PowerPoint", description: "Logiciel de présentation dynamique.", image: "/images/powerpoint.png" },
      { name: "Word", description: "Traitement de texte puissant.", image: "/images/word.png" }
    ]
  },
  {
    category: "Gestion de Projet",
    skills: [
      { name: "Jira", description: "Outil de gestion agile des tâches.", image: "/images/jira.png" },
      { name: "GanttProject", description: "Planification de projet avec diagrammes de Gantt.", image: "/images/ganttproject.png" }
    ]
  },
  {
    category: "Autres",
    skills: [
      { name: "Git", description: "Système de contrôle de version distribué.", image: "/images/git.png" },
      { name: "GitHub", description: "Hébergement de code et collaboration.", image: "/images/github.png" },
      { name: "GitLab", description: "Gestion de versions et intégration continue.", image: "/images/gitlab.png" },
      { name: "Intégration d'outils IA", description: "Utilisation d'outils d'intelligence artificielle pour automatisation et analyse.", image: "/images/chatgpt.png" }
    ]
  }
];

const SkillsSection = () => {
  return (
    <div className="min-h-screen bg-black text-yellow-500 py-12">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mes Compétences
        </motion.h2>

        {skills.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-semibold mb-6 border-b pb-2 border-yellow-500">{category.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  className="relative bg-gray-900 rounded-xl shadow-lg p-6 text-center border border-yellow-500 
                             transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={skill.image} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                  <p className="text-gray-400 mt-2">{skill.description}</p>

                  {/* Effet lumineux */}
                  <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-20 bg-yellow-500"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
