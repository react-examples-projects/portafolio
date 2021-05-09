const link = (path, text) => ({ path, text });
const links = [
  link("/", "Sobre mí"),
  link("/proyectos", "proyectos"),
  link("/habilidades", "Habilidades"),
  link("/contacto", "Contacto"),
  link("/login", "Login"),
];
export default links;
