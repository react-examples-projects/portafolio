import { useEffect } from "react";

const body = document.body;

export default function useBackground(bg = "transparent") {
  useEffect(() => {
    body.style.background = bg;
    return () => body.style.setProperty("background", null);
  }, [bg]);
}
