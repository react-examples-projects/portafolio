import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import css from "../../Styles/Login.module.scss";
import cs from "classnames";
import { login } from "../../Helpers/requests";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useUserContext } from "../../Context/UserContext";
import { useHistory, Redirect } from "react-router-dom";
import { setToken } from "../../Helpers/token";

export default function Login() {
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

  if (user._id) return <Redirect to="/" />;

  return (
    <Form
      className={cs(
        "w-100 mb-5 mx-auto p-5 shadow-lg rounded-lg bg-white",
        css.formLogin
      )}
      onSubmit={handleSubmit}
    >
      <h3 className="mb-3">Inicia Sesión</h3>
      <Form.Group controlId="email">
        <Form.Label className="text-muted">Correo electrónico</Form.Label>
        <Form.Control type="email" name="email" required />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label className="text-muted">Contraseña</Form.Label>
        <Form.Control type="password" name="password" required />
      </Form.Group>

      <Button
        variant="success"
        type="submit"
        disabled={mutation.isLoading}
        block
      >
        {mutation.isLoading ? "Comprobando..." : "Iniciar sesión"}
      </Button>
    </Form>
  );
}
