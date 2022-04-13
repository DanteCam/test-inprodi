import {
  LoginTitle,
  StyledLoginParagraph,
  InputLabel,
  StyledInput,
  StyledLoginButton,
  BackLinkStyled,
  ErrorMessage,
} from "./style";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRecoveryToken } from "../Reducers/AuthSlice";
import { recoverApi } from "../../Api/api";
import useLoginCall from "../Shared/useLoginCall";

export default function PasswordRecovery() {
  const dispatch = useDispatch();
  const [formEmail, setFormEmail] = useState("");
  const { call, error, setError } = useLoginCall(recoverApi);

  const Recover = () => {
    const formData = new FormData();
    formData.append("email", formEmail);
    const updateState = (res) => {
      dispatch(setRecoveryToken(res.data.token));
    };
    call(formData, updateState, "/password-new");
  };
  return (
    <>
      <LoginTitle>¿Olvidaste tu Contraseña?</LoginTitle>
      <StyledLoginParagraph style={{ marginBottom: "23px" }}>
        Ingresa tu correo electrónico y te enviaremos instrucciones para
        restablecer tu contraseña.
      </StyledLoginParagraph>
      <Form onFinish={Recover} name='Recover' layout='vertical'>
        <InputLabel>Correo Electrónico</InputLabel>
        <Form.Item
          name='Email'
          requiredMark={false}
          style={{ marginBottom: "0px" }}
          hasFeedback={false}
          required={false}
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: <ErrorMessage>Llena el campo.</ErrorMessage>,
            },
            {
              type: "email",
              message: (
                <ErrorMessage>
                  {" "}
                  Ingresa un correo electrónico válido.
                </ErrorMessage>
              ),
            },
          ]}
        >
          <StyledInput
            className={error === "Not Found" ? "ant-input-status-error" : ""}
            onChange={(e) => {
              setError("");
              setFormEmail(e.target.value);
            }}
            value={formEmail}
            placeholder='Ingresa tu Correo Electrónico'
          />
        </Form.Item>
        {error === "Not Found" ? (
          <ErrorMessage>
            {" "}
            El correo electrónico no está asociado a ninguna cuenta.
          </ErrorMessage>
        ) : (
          ""
        )}
        <Form.Item style={{ marginTop: "16px", marginBottom: "0" }}>
          <StyledLoginButton htmlType='submit'>
            Enviar Instrucciones
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
          <Link to='/'>Regresar</Link>
        </BackLinkStyled>
      </div>
    </>
  );
}
