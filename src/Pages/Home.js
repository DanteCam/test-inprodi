import {
  LoginFormBox,
  LoginForm,
  PasswordRecovery,
  PasswordNew,
} from "../Components/LoginForm-components";
import Desktop from "./Desktop";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

export default function Home() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <LoginFormBox>
              <LoginForm />
            </LoginFormBox>
          }
        />
        <Route
          path='/password-new'
          element={
            <LoginFormBox>
              <PasswordNew />
            </LoginFormBox>
          }
        />
        <Route
          path='/password-recovery'
          element={
            <LoginFormBox>
              <PasswordRecovery />
            </LoginFormBox>
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route path='/Desktop' element={<Desktop />} />
        </Route>
      </Routes>
    </>
  );
}
