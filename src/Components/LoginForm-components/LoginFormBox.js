import { StyledLoginContainer, StyledLoginBox } from "./style";
export default function LoginFormBox({ children }) {
  return (
    <StyledLoginContainer>
      <StyledLoginBox>{children}</StyledLoginBox>
    </StyledLoginContainer>
  );
}
