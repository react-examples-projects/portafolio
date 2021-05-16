import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import css from "../../Styles/Login.module.scss";
import cs from "classnames";
import useLogin from "../../Hooks/useLogin";
import { Redirect } from "react-router-dom";
import Title from "../Titlte";

export default function Login() {
  const { user, handleSubmit, isLoading } = useLogin();

  if (user._id) return <Redirect to="/" />;

  return (
    <>
      <Title title="Iniciar Sesión" />
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

        <Button variant="success" type="submit" disabled={isLoading} block>
          {isLoading ? "Comprobando..." : "Iniciar sesión"}
        </Button>
      </Form>
    </>
  );
}
