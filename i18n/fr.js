export default {
   select_language: "Sélectionner la langue:",
   languages: {
      en: "Anglais",
      pt: "Portugais",
      fr: "Français",
   },
   HEADER: {
      ABOUT: "Sobre",
      EXPERIENCES: "Experiencias",
      PROJECTS: "Projetos",
      CONTACT: "Contato",
   },
   HOME: {
      INTRODUCTION_TEXT: "Salut, Je m'appelle",
      ROLES: [
         "Frontend Developer",
         "Backend Developer",
         "Mobile Developer",
         "Fullstack Developer",
      ],
   },
};

if (typeof module !== "undefined" && module.exports) {
   module.exports = translations;
}
