import { Typography, Input } from "antd";
import styled, { css } from "styled-components";

const { Text, Paragraph } = Typography;

const InputStyles = css`
  height: 36px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  :placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
  }
`;

export const StyledLoginContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoginBox = styled.div`
  width: 407px;
  min-height: 305px;
  background: #ffffff;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
`;
export const StyledLoginButton = styled.button`
  width: 100%;
  height: 38px;
  border-radius: 5px;
  background: #5d7fc8;
  border-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 17px;
`;
export const StyledLoginTitle = styled(Text)`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #5e5873;
`;

export const LoginTitle = ({ children }) => {
  return (
    <div style={{ marginBottom: "8px" }}>
      <StyledLoginTitle>{children}</StyledLoginTitle>
    </div>
  );
};

export const StyledLoginParagraph = styled(Paragraph)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #6e6b7b;
`;

export const InputLabel = styled(Text)`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #6e6b7b;

  a,
  a:hover {
    color: #5d7fc8;
  }
`;
export const BackLinkStyled = styled(InputLabel)`
  font-size: 14px;
  line-height: 21px;
`;

export const ErrorMessage = styled(Text)`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #ea5455;
`;

export const StyledInput = styled(Input)`
  ${InputStyles};
`;
export const StyledPasswordInput = styled(Input.Password)`
  ${InputStyles};
`;
