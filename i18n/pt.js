export default {
   select_language: "Selecionar Idioma:",
   languages: {
      en: "Inglês",
      pt: "Português",
      fr: "Francês",
   },
   HEADER: {
      ABOUT: "Sobre",
      EXPERIENCES: "Experiencias",
      PROJECTS: "Projetos",
      CONTACT: "Contato",
   },
   HOME: {
      INTRODUCTION_TEXT: "Olá, meu nome é",
      ROLES: [
         "Desenvolvedor Frontend",
         "Desenvolvedor Backend",
         "Desenvolvedor Mobile",
         "Desenvolvedor FullStack",
      ],
   },
};

if (typeof module !== "undefined" && module.exports) {
   module.exports = translations;
}
