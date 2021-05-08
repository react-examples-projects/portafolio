import Form from "react-bootstrap/Form";
import css from "../../Styles/Login.module.scss";
import cs from "classnames";

export default function Login() {
  return (
    <Form className={cs("w-100 mx-auto", css.formLogin)}>
      <h1 className={cs("mb-4 text-center", css.loginTitle)}>Inicia Sesión</h1>
      <Form.Group controlId="email">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" required />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" required />
      </Form.Group>

      <button className="btn btn-success" type="submit">
        Iniciar sesión
      </button>    
    </Form>
  );
}
