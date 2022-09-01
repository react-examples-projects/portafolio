const CurrentTheme = (init = "light") => {
  const get = () => {
    return localStorage.getItem("theme");
  };
  const set = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const toggle = () => {
    get() === "light" ? set("dark") : set("light");
  };

  if (init !== undefined && !get()) localStorage.setItem("theme", init);

  return {
    get,
    set,
    toggle,
  };
};

export default CurrentTheme;
