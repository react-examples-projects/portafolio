export default function initCursor() {
  const curs = document.querySelector(".cursor");
  const onEvent = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    curs.style.left = x - 22 + "px";
    curs.style.top = y - 22 + "px";
  };

  window.document.addEventListener("mousemove", onEvent);
  window.document.addEventListener("mouseleave", onEvent);

  return () => {
    window.document.removeEventListener("mousemove", onEvent)
    window.document.removeEventListener("mouseleave", onEvent)
  };
}
