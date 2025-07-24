"use client"; // <--- Keep this line at the very top

import Image from "next/image";
import { useState } from "react";
// IMPORT BARU DARI FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"; 

// Data Proyekmu
const allProjects = [
  {
    id: 1,
    title: "LokaTrack",
    description: "Developed Lokatrack, an Android application for Lokatanis logistic system, which track vegetable delivery status using OCR-based order id scanning and AI model processing to detect whether the hand signature is real or faked. Built using Kotlin, integrating both AI models and API services through API",

    repoLink: "https://github.com/OneWizzard/LokaFresh"
  },
  {
    id: 2,
    title: "Nutrigood",
    description: "Developed NutriGood, an Android-based mobile application focused on promoting healthy living and nutrition tracking. Responsible for designing UI, implementing core features using Kotlin, and integrating backend API services also integrating AI models through API services.",

    repoLink: "https://github.com/Admushh/NutriGoods"
  },
   {
    id: 3,
    title: "Manchester United Gallery Web",
    description: "Manchester United Gallery Web is an interactive fan-made website dedicated to celebrating the rich legacy of Manchester United Football Club. This project showcases the club’s historical milestones, legendary players, and iconic moments through a visually engaging gallery format.",

    repoLink: "https://github.com/Admushh/Bismillah"
  },
 
  
];

// Data Skillmu
const allSkills = [
  { id: 1, name: "React", image: "/react.png" },
  { id: 2, name: "Next.js", image: "/nextt.png" },
  { id: 3, name: "Tailwind CSS", image: "/tailwind.png" },
  { id: 4, name: "Kotlin", image: "/kotlin.png" },
  { id: 5, name: "SQL", image: "/sql.png" },
  { id: 6, name: "Javascript", image: "/javascript.png" },
  { id: 7, name: "Git", image: "/git.png" },
  { id: 8, name: "HTML", image: "/html.png" },
  { id: 9, name: "Python", image: "/python.png" },
  { id: 10, name: "Altair AI Studio", image: "/altair.png" },
];

// Data Sertifikatmu
const allCertificates = [
  {
    id: 1,
    name: "Memulai Pemrograman Dengan Kotlin",
    image: "/sertif1.jpg",
    verifyLink: "https://www.dicoding.com/certificates/1RXY2N9KMXVM"
  },
  {
    id: 2,
    name: "Belajar Dasar AI",
    image: "/sertif2.jpg",
    verifyLink: "https://www.dicoding.com/certificates/6RPNYR699Z2M"
  },
  {
    id: 3,
    name: "Belajar Penerapan Machine Learning Untuk Android",
    image: "/sertif3.jpg",
    verifyLink: "https://www.dicoding.com/certificates/EYX4JOVE6ZDL"
  },
  {
    id: 4,
    name: "Belajar Pengembangan Aplikasi Android Intermediate",
    image: "/sertif4.jpg",
    verifyLink: "https://www.example.com/verify/cert101"
  },
    {
    id: 5,
    name: "Kepersertaan dan kelulusan program Studi Independen",
    image: "/sertif5.jpg",
    verifyLink: "https://www.example.com/verify/cert101"
  },
];

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  // TAMBAH: State untuk melacak arah animasi
  const [direction, setDirection] = useState(0); // 0 = none, 1 = next, -1 = prev

  const projectsPerPage = 3;
  const totalProjects = allProjects.length;

  const handleNext = () => {
    setDirection(1); // Set arah ke "maju"
    setStartIndex((prevIndex) => (prevIndex + projectsPerPage) % totalProjects);
  };

  const handlePrev = () => {
    setDirection(-1); // Set arah ke "mundur"
    setStartIndex((prevIndex) =>
      (prevIndex - projectsPerPage + totalProjects) % totalProjects
    );
  };

  const visibleProjects = [];
  for (let i = 0; i < projectsPerPage; i++) {
    visibleProjects.push(allProjects[(startIndex + i) % totalProjects]);
  }

  // Definisikan varian animasi untuk Framer Motion
  const cardVariants = {
    // initial (kondisi awal saat masuk)
    // Gunakan 'direction' untuk menentukan dari mana gesernya
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000, // Jika next (1), dari kanan. Jika prev (-1), dari kiri.
      opacity: 0,
    }),
    // animate (kondisi saat aktif)
    center: {
      x: 0,
      opacity: 1,
    },
    // exit (kondisi saat keluar)
    // Gunakan 'direction' untuk menentukan ke mana gesernya
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000, // Jika prev (-1), ke kanan. Jika next (1), ke kiri.
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen px-4 py-12 md:px-8 lg:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <div className="relative mx-auto rounded-full w-50 h-50 md:w-40 md:h-40 overflow-hidden mb-6 border-4 border-accent shadow-lg">
          <Image
            src="/profil.jpg"
            alt="Foto Adimas"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight"
            style={{ color: 'var(--foreground)' }}>
          Hi, Im <span className="text-accent">Adimas Farhan Putranto</span>
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
          Informatics Engineering | Politeknik Negeri Jakarta
        </p>
           <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
         Mobile Developer Cohort | Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
        </p>
        
      </section>

      {/* About Me Section */}
      <section className="mb-24 p-6 rounded-xl shadow-md"
               style={{ backgroundColor: 'var(--card-background)', boxShadow: `0 8px 24px var(--card-shadow)` }}>
        <h2 className="text-3xl font-bold mb-5" style={{ color: 'var(--foreground)' }}>About Me</h2>
        <p className="text-base md:text-lg" style={{ color: 'var(--foreground)' }}>
          Im a passionate developer with a strong focus on building intuitive and performant web and mobile applications. My journey involves crafting delightful user experiences and solving real-world challenges through elegant code. I thrive on learning new technologies and constantly pushing the boundaries of whats possible.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-24 relative overflow-hidden"> {/* TAMBAH: overflow-hidden untuk mencegah animasi keluar */}
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--foreground)' }}>My Projects</h2>
        
        {/* GUNAKAN AnimatePresence untuk animasi keluar/masuk */}
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={startIndex} // Key berubah saat startIndex berubah, memicu animasi
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction} // Pass custom prop 'direction'
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 }, // Animasi geser
              opacity: { duration: 0.2 }, // Animasi pudar
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
           {visibleProjects.map((project) => (
  <div
    key={project.id}
    className="p-7 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col justify-between"
    style={{ backgroundColor: 'var(--card-background)', boxShadow: `0 8px 24px var(--card-shadow)`, minHeight: '320px' }} // <- Set tinggi minimum agar seragam
  >
    <div>
      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-400 mb-4">
        {project.description || "No description provided."}
      </p>
    </div>
    
    <div className="flex flex-wrap gap-4 mt-auto">

      {project.repoLink ? (
        <a href={project.repoLink} className="inline-block px-5 py-2 rounded-lg font-semibold border-2 border-accent whitespace-nowrap" style={{ color: 'var(--accent)' }} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      ) : (
        <span className="inline-block px-5 py-2 rounded-lg font-semibold text-gray-400 border border-gray-300 dark:border-gray-600 cursor-not-allowed">
          No Repo
        </span>
      )}
    </div>
  </div>
))}

          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {totalProjects > projectsPerPage && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md text-accent hover:scale-110 transition-transform hidden md:block"
              aria-label="Previous project"
              style={{ boxShadow: `0 4px 12px var(--card-shadow)` }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md text-accent hover:scale-110 transition-transform hidden md:block"
              aria-label="Next project"
              style={{ boxShadow: `0 4px 12px var(--card-shadow)` }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </section>

      {/* My Skills Section */}
      <section className="mb-24 p-6 rounded-xl shadow-md"
               style={{ backgroundColor: 'var(--card-background)', boxShadow: `0 8px 24px var(--card-shadow)` }}>
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--foreground)' }}>My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {allSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* My Certificates Section */}
      <section className="mb-24 p-6 rounded-xl shadow-md"
               style={{ backgroundColor: 'var(--card-background)', boxShadow: `0 8px 24px var(--card-shadow)` }}>
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--foreground)' }}>My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {allCertificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.verifyLink || cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out group"
              style={{ boxShadow: `0 8px 24px var(--card-shadow)` }}
            >
              <div className="relative w-full h-64 md:h-72 lg:h-80 xl:h-96 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-330 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white dark:bg-gray-700 flex flex-col items-start min-h-[5.5rem]">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{cert.name}</h3>
                {cert.verifyLink && (
                    <a
                      href={cert.verifyLink}
                      className="text-sm text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        View Certificate
                    </a>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="text-center p-6 rounded-xl shadow-md"
               style={{ backgroundColor: 'var(--card-background)', boxShadow: `0 8px 24px var(--card-shadow)` }}>
        <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Get in Touch</h2>
        <p className="mb-3 text-lg">
          Have an exciting project or just want to connect? Feel free to reach out!
        </p>
        <p>
          Email: <a className="text-accent font-semibold hover:underline" href="mailto:admsfarhan@gmail.com">admsfarhan@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a className="text-accent font-semibold hover:underline" href="https://www.linkedin.com/in/adimas-farhan-76797824b/" target="_blank" rel="noopener noreferrer">linkedin.com/adimasfarhan</a>
        </p>
          <p>
          Github: <a className="text-accent font-semibold hover:underline" href="https://github.com/Admushh/" target="_blank" rel="noopener noreferrer">https://github.com/Admushh</a>
        </p>
      </section>

      {/* Optional: Simple Footer */}
      <footer className="text-center mt-20 py-8 text-gray-500 dark:text-gray-600 border-t border-gray-200 dark:border-gray-700">
        <p>&copy; {new Date().getFullYear()} Adimas Farhan Putranto. All rights reserved.</p>
      </footer>
    </main>
  )
}