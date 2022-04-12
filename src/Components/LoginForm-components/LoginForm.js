import { Form } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../Reducers/AuthSlice";
import { setToken } from "../Reducers/AuthSlice";
import { loginApi } from "../../Api/api";
import {
  StyledLoginButton,
  LoginTitle,
  StyledLoginParagraph,
  InputLabel,
  StyledInput,
  StyledPasswordInput,
  ErrorMessage,
} from "./style";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [error, setError] = useState("");

  const Login = () => {
    const formData = new FormData();
    formData.append("email", formEmail);
    formData.append("password", formPassword);
    loginApi
      .post("/api/login", formData)
      .then((res) => {
        dispatch(setUserName(res.data.user.name));
        dispatch(setToken(res.data.token));
      })
      .then(() => {
        navigate("/desktop");
      })
      .catch((err) => {
        setError(err.response.data.err);
        console.log(err.response.data.err);
      });
  };

  return (
    <>
      <LoginTitle>¡Bienvenido de nuevo!</LoginTitle>
      <StyledLoginParagraph>
        Ingresa con tu usuario y contraseña para acceder a la plataforma.
      </StyledLoginParagraph>
      <Form onFinish={Login} name='Login' layout='vertical'>
        <InputLabel>Correo Electrónico</InputLabel>
        <Form.Item
          name='Email'
          requiredMark={false}
          style={{ marginBottom: "0px" }}
          hasFeedback={false}
          required={false}
          rules={[
            {
              required: true,
              message: <ErrorMessage>Llene el campo.</ErrorMessage>,
            },
            {
              type: "email",
              message: (
                <ErrorMessage>
                  Ingresa un correo electrónico válido.
                </ErrorMessage>
              ),
            },
          ]}
        >
          <StyledInput
            className={
              error === "There isn't a user with that email"
                ? "ant-input-status-error "
                : ""
            }
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            placeholder='Ingresa tu Correo Electrónico'
          />
        </Form.Item>
        {error === "There isn't a user with that email" ? (
          <ErrorMessage>
            El correo electrónico no está asociado a ninguna cuenta.
          </ErrorMessage>
        ) : (
          ""
        )}
        <div style={{ display: "flex", marginTop: "16px" }}>
          <InputLabel>Contraseña</InputLabel>
          <InputLabel style={{ width: "100%", textAlign: "end" }}>
            <Link to='/password-recovery'>
              ¿Olvidaste tu contraseña? &nbsp;
            </Link>
          </InputLabel>
        </div>
        <Form.Item
          name='Password'
          style={{ marginBottom: "0px" }}
          required={false}
          rules={[
            {
              required: true,
              message: (
                <>
                  <ErrorMessage>Llene el campo.</ErrorMessage>
                </>
              ),
            },
          ]}
        >
          <StyledPasswordInput
            className={
              error === "Incorrect password" ? "ant-input-status-error " : ""
            }
            onChange={(e) => setFormPassword(e.target.value)}
            value={formPassword}
            placeholder='Ingresa tu Contraseña'
            visibilityToggle={false}
          />
        </Form.Item>
        {error === "Incorrect password" ? (
          <ErrorMessage> La contraseña ingresada es incorrecta.</ErrorMessage>
        ) : (
          ""
        )}

        <Form.Item style={{ marginTop: "30px", marginBottom: "0" }}>
          <StyledLoginButton htmlType='submit'>Ingresar</StyledLoginButton>
        </Form.Item>
      </Form>
    </>
  );
}
