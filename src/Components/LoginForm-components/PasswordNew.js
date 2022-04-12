import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledLoginButton,
  LoginTitle,
  StyledLoginParagraph,
  InputLabel,
  StyledPasswordInput,
  BackLinkStyled,
  ErrorMessage,
} from "./style";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { resetApi } from "../../Api/api";

export default function PasswordNew() {
  const navigate = useNavigate();
  const [formPassword, setFormPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const setNewPassword = () => {
    const formData = new FormData();
    formData.append("password", formPassword);
    resetApi(formData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.statusText);
      });
  };

  return (
    <>
      <LoginTitle>Restablecer Contraseña</LoginTitle>
      <StyledLoginParagraph style={{ marginBottom: "23px" }}>
        Establece tu nueva contraseña y guárdala en un lugar seguro.
      </StyledLoginParagraph>
      <Form onFinish={setNewPassword} name='Login' layout='vertical'>
        <div style={{ display: "flex" }}>
          <InputLabel>Nueva contraseña</InputLabel>
        </div>
        <Form.Item
          name='Password'
          style={{ marginBottom: "16px" }}
          required={false}
          rules={[
            {
              required: true,
              message: (
                <>
                  <ErrorMessage style={{ lineHeight: "16px" }}>
                    Llene el campo.
                  </ErrorMessage>
                </>
              ),
            },
            {
              pattern: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/),
              message:
                "La contraseña debe tener al menos 8 caracteres, caracteres especiales, letras mayúsculas y minúsculas.",
            },
          ]}
        >
          <StyledPasswordInput
            className={error === "Bad Request" ? "ant-input-status-error " : ""}
            onChange={(e) => {
              setError("");
              setFormPassword(e.target.value);
            }}
            value={formPassword}
            placeholder='Ingresar Nueva contraseña'
            visibilityToggle={false}
          />
        </Form.Item>
        <div style={{ display: "flex" }}>
          <InputLabel>Confirmar contraseña</InputLabel>
        </div>
        <Form.Item
          name='RecoverPassword'
          style={{ marginBottom: "0px" }}
          required={false}
          rules={[
            {
              required: true,
              message: (
                <>
                  <ErrorMessage> Llene el campo.</ErrorMessage>
                </>
              ),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("Password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Las contraseñas no coinciden.")
                );
              },
            }),
          ]}
        >
          <StyledPasswordInput
            className={error === "Bad Request" ? "ant-input-status-error " : ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder='Ingresa tu Contraseña'
            visibilityToggle={false}
          />
        </Form.Item>
        {error === "Bad Request" ? (
          <ErrorMessage>
            Tu nueva contraseña no puede ser igual a la anterior.
          </ErrorMessage>
        ) : (
          ""
        )}

        <Form.Item style={{ marginTop: "16px", marginBottom: "0" }}>
          <StyledLoginButton htmlType='submit'>
            Restablecer contraseña
          </StyledLoginButton>
        </Form.Item>
      </Form>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "16px",
        }}
      >
        <BackLinkStyled>
          <Link to='/password-recovery'>Regresar</Link>
        </BackLinkStyled>
      </div>
    </>
  );
}
