import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { EMAILJS } from "../Config/config";

export function blobToUrl(blob, cb) {
  if (!blob) return cb(null);
  const fr = new FileReader();
  fr.onload = () => cb(fr.result);
  fr.readAsDataURL(blob);
}

export const route = (
  path,
  { component, redirect = false, layout = true, ...args }
) => ({
  path,
  component,
  exact: true,
  layout,
  redirect,
  ...args,
});

export async function sendForm(e) {
  e.preventDefault();
  try {
    const email = await emailjs.sendForm(
      EMAILJS.SERVICE_ID,
      EMAILJS.TEMPLATE_ID,
      e.target,
      EMAILJS.USER_ID
    );
    e.target.reset();
    if (email.status === 200) {
      toast.success("Formulario enviado");
    } else {
      toast.error("Ocurrió un error al enviar, estado: " + email.status);
    }

    console.log(email);
  } catch (error) {
    toast.error("Ocurrió un error al enviar el formulario");
    console.log(error);
  }
}
