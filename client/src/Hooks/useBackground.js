import { useEffect } from "react";

const body = document.body;

export default function useBackground() {
  useEffect(() => {
   body.style.background = "transparent";
    return () => body.style.setProperty("background", null);
  }, []);
}
