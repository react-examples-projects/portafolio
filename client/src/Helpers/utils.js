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

export async function sendForm(data) {
  try {
    const email = await emailjs.send(
      EMAILJS.SERVICE_ID,
      EMAILJS.TEMPLATE_ID,
      data,
      EMAILJS.USER_ID
    );

    if (email.status === 200) {
      toast.success("Formulario enviado");
    } else {
      toast.error("Ocurrió un error al enviar, estado: " + email.status);
    }
  } catch (error) {
    toast.error("Ocurrió un error al enviar el formulario");
    console.log(error);
  }
}
