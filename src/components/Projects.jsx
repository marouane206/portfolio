import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const projects = [
  {
    title: "Location de Voitures",
    description: "Plateforme de location de voitures avec réservation en ligne, gestion des paiements et des véhicules disponibles.",
    images: ["/images/car1.png", "/images/car2.png", "/images/car3.png"],
    link: "https://carlocation.vercel.app/"
  },
  {
    title: "Dashboard Bancaire",
    description: "Tableau de bord bancaire interactif pour visualiser les comptes, transactions et analyses financières.",
    images: ["/images/bank1.png", "/images/bank2.png", "/images/bank3.png"],
    link: "https://bank-dun-one.vercel.app/"
  },
  {
    title: "E-commerce Électronique",
    description: "Plateforme de vente de produits électroniques avec gestion des commandes et paiements en ligne.",
    images: ["/images/zamazor1.png", "/images/zamazor2.png", "/images/zamazor3.png"],
    link: "https://e-com-zam.vercel.app/"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-yellow-500 py-12 px-6">
      <motion.h1
        className="text-5xl font-bold text-center mb-16 text-yellow-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projets réalisés
      </motion.h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 shadow-xl rounded-2xl overflow-hidden border border-yellow-500
                       hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative">
              <Slider {...settings}>
                {project.images.map((img, imgIndex) => (
                  <div key={imgIndex}>
                    <img src={img} alt={`${project.title} ${imgIndex + 1}`} className="w-full h-64 object-cover" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="mt-6 w-full py-2 bg-yellow-500 text-black font-semibold rounded-lg
                             hover:bg-yellow-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le projet
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
