
import { login } from "../Helpers/requests";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useUserContext } from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import { setToken } from "../Helpers/token";

export default function useLogin() {
  const mutation = useMutation((data) => login(data));
  const { user, setUser } = useUserContext();
  const { push } = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const data = await mutation.mutateAsync(formData);
      if (data.isValid) {
        toast.success("Inicio de sesión correcto!");
        setUser(data.user);
        setToken(data.user.token);
        push("/");
        return;
      }
      toast.error("La cuenta es inválida, vuelva a intentarlo");
      console.log(data);
    } catch (err) {
      toast.error("Ocurrió un error al conectarse");
      console.log(err);
    }
  };
  return { handleSubmit, user, ...mutation };
}
