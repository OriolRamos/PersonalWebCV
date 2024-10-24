// Objecte que conté totes les traduccions agrupades per clau
const translations = {
    // Barra de navegació
    "Inici": {
        ca: "Inici",
        es: "Inicio",
        en: "Home"
    },
    "Formació Professional": {
        ca: "Formació Professional",
        es: "Formación Profesional",
        en: "Professional Training"
    },
    "Perfil": {
        ca: "Perfil",
        es: "Perfil",
        en: "Profile"
    },
    "Habilitats": {
        ca: "Habilitats",
        es: "Habilidades",
        en: "Skills"
    },
    "Llenguatges": {
        ca: "Llenguatges",
        es: "Lenguajes",
        en: "Languages"
    },
    "Currículum": {
        ca: "Currículum",
        es: "Currículum",
        en: "Curriculum"
    },
    "Contacte": {
        ca: "Contacte",
        es: "Contacto",
        en: "Contact"
    },
    // Secció 1: Presentació
    "Enginyer Informàtic": {
        ca: "Enginyer Informàtic",
        es: "Ingeniero Informático",
        en: "Computer Engineer"
    },
    // Secció 2: Formació Professional
    "Experiéncia Laboral": {
        ca: "Experiència Laboral",
        es: "Experiencia Laboral",
        en: "Work Experience"
    },
    "Javascript FullStack Developer - DSET": {
        ca: "Javascript FullStack Developer - DSET",
        es: "Javascript FullStack Developer - DSET",
        en: "Javascript FullStack Developer - DSET"
    },
    "Web Developer - FreeLance": {
        ca: "Web Developer - FreeLance",
        es: "Desarrollador Web - Freelance",
        en: "Web Developer - Freelance"
    },
    "Formació Acadèmica": {
        ca: "Formació Acadèmica",
        es: "Formación Académica",
        en: "Academic Background"
    },
    "Bachillerato - Institut de Vilablareix - 2018/2020": {
        ca: "Batxillerat - Institut de Vilablareix - 2018/2020",
        es: "Bachillerato - Institut de Vilablareix - 2018/2020",
        en: "High School - Institut de Vilablareix - 2018/2020"
    },
    "Grau en Enginyeria Informatica - Universitat de Girona - 2021/2025": {
        ca: "Grau en Enginyeria Informàtica - Universitat de Girona - 2021/2025",
        es: "Grado en Ingeniería Informática - Universitat de Girona - 2021/2025",
        en: "Bachelor's Degree in Computer Engineering - University of Girona - 2021/2025"
    },
    // Secció 3: Perfil
    "Llengües": {
        ca: "Llengües",
        es: "Idiomas",
        en: "Languages"
    },
    "Català: llengua d'us habitual": {
        ca: "Català: llengua d'ús habitual",
        es: "Catalán: lengua de uso habitual",
        en: "Catalan: habitual language"
    },
    "Castellà: llengua d'us habitual": {
        ca: "Castellà: llengua d'ús habitual",
        es: "Castellano: lengua de uso habitual",
        en: "Spanish: habitual language"
    },
    "Anglès: nivell mig": {
        ca: "Anglès: nivell mig",
        es: "Inglés: nivel intermedio",
        en: "English: intermediate level"
    },
    "Títuls": {
        ca: "Títuls",
        es: "Títulos",
        en: "Degrees"
    },
    "Estudiant de Quart Grau d'Informatica a la UdG": {
        ca: "Estudiant de Quart Grau d'Informàtica a la UdG",
        es: "Estudiante del Cuarto Grado de Informática en la UdG",
        en: "Fourth Year Computer Science Student at UdG"
    },
    "Carnet de Conduir B (cotxe)": {
        ca: "Carnet de Conduir B (cotxe)",
        es: "Carnet de Conducir B (coche)",
        en: "Driving License B (car)"
    },
    "Curs d’especialització Fem Biologia in silico": {
        ca: "Curs d’especialització Fem Biologia in silico",
        es: "Curso de especialización Fem Biologia in silico",
        en: "Specialization course 'Fem Biologia in silico'"
    },
    "Estudiant pel B2": {
        ca: "Estudiant pel B2",
        es: "Estudiante para el B2",
        en: "Studying for B2 Level"
    },
    "Sobre Mi": {
        ca: "Sobre Mi",
        es: "Sobre Mí",
        en: "About Me"
    },
    "Em considero una persona molt treballadora": {
        ca: "Em considero una persona molt treballadora, responsable i organitzada, amb ganes d'aprendre noves coses. Sempre he treballat amb altres companys a la feina, i per mi és molt important el respecte i la cooperativitat per tenir un bon entorn de treball.",
        es: "Me considero una persona muy trabajadora, responsable y organizada, con ganas de aprender cosas nuevas. Siempre he trabajado con otros compañeros en el trabajo, y para mí es muy importante el respeto y la cooperación para tener un buen ambiente laboral.",
        en: "I consider myself a very hardworking, responsible, and organized person, eager to learn new things. I have always worked with other colleagues, and for me, respect and cooperation are very important to maintain a good work environment."
    },
    // Secció 4: Habilitats
    "Habilitats en Aprenentatge": {
        ca: "Habilitats en Aprenentatge",
        es: "Habilidades de Aprendizaje",
        en: "Learning Skills"
    },
    "Intel·ligència Artificial": {
        ca: "Intel·ligència Artificial",
        es: "Inteligencia Artificial",
        en: "Artificial Intelligence"
    },
    "Anàlisi de Dades": {
        ca: "Anàlisi de Dades",
        es: "Análisis de Datos",
        en: "Data Analysis"
    },
    "Desenvolupament Web": {
        ca: "Desenvolupament Web",
        es: "Desarrollo Web",
        en: "Web Development"
    },
    // Secció 5: Llenguatges
    "Llenguatges Dominats": {
        ca: "Llenguatges Dominats",
        es: "Lenguajes Dominados",
        en: "Dominated Languages"
    },
    // Secció 6: Currículum
    "Descarregar el CV (PDF)": {
        ca: "Descarregar el CV (PDF)",
        es: "Descargar el CV (PDF)",
        en: "Download CV (PDF)"
    },
    // Secció 7: Contacte
    "Contacta conmigo:": {
        ca: "Contacta amb mi:",
        es: "Contacta conmigo:",
        en: "Contact me:"
    },
    "oriol842@gmail.com": {
        ca: "oriol842@gmail.com",
        es: "oriol842@gmail.com",
        en: "oriol842@gmail.com"
    }
};


// Funció per canviar l'idioma
function changeLanguage(language) {
    const elements = document.querySelectorAll('.translatable'); // Selecciona tots els elements translatables

    elements.forEach(el => {
        const key = el.dataset.key; // Obtén la clau per a cada element

        // Comprova si existeix la clau a l'objecte translations i aplica la traducció corresponent
        if (translations[key] && translations[key][language]) {
            el.textContent = translations[key][language];
        }
    });
}

// Inicialitza amb l'idioma per defecte (per exemple, català)
document.addEventListener('DOMContentLoaded', function () {
    changeLanguage('ca'); // Pots canviar 'ca' per qualsevol idioma inicial
});

// Animació GSAP per fer que les seccions apareguin
gsap.to("section", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.5
});

// ScrollReveal per fer que els elements apareguin a mesura que es desplacen
ScrollReveal().reveal('h1', { delay: 100, distance: '20px', opacity: 0, duration: 500 });
ScrollReveal().reveal('h2', { delay: 100, distance: '20px', opacity: 0, duration: 500 });
ScrollReveal().reveal('p', { delay: 100, distance: '20px', opacity: 0, duration: 500 });
ScrollReveal().reveal('ul', { delay: 100, distance: '20px', opacity: 0, duration: 500 });
ScrollReveal().reveal('.download', { delay: 100, distance: '20px', opacity: 0, duration: 500 });
ScrollReveal().reveal('.skill-card', { delay: 100, distance: '20px', opacity: 0, duration: 500 });