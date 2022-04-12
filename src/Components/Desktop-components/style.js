import { Typography, Modal, Input, Card } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const HeaderAppBar = styled.div`
  margin: 15px 20px 20px 20px;
  min-height: 62px;
  background: #ffffff;
  padding: 0 20px 0 24px;
  border-radius: 6px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
`;
export const AddNotesButton = styled.button`
  background: linear-gradient(45deg, #3554d1 0%, #8b9ad7 100%);
  color: #ffffff;
  border: transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 23px;
  height: 45px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.4px;
`;
export const NoteBox = styled(Card)`
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  div {
    padding: 0;
  }
`;
export const NoteHeadFont = styled(Text)`
  font-weight: 500;
  font-size: 15px;
  height: 24px;
  color: #5e5873;
`;
export const NoteBodyFont = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #6e6b7b;
`;

export const ModalStyled = styled(Modal)`
  margin-top: 52px;
  background: #ffffff;
  border-radius: 6px;
  padding: 0;
  .ant-modal-content {
    border-radius: inherit;
  }
`;
export const ModalHead = styled.div`
  background: #f8f8f8;
  border-radius: 6px 6px 0 0;
  padding: 13px 23px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
export const ModalBody = styled.div`
  padding: 20px;
`;

export const ModalFooter = styled.div`
  height: 68px;
  display: flex;
  flex-direction: row-reverse;
  padding: 14px 17px;
`;

export const AddNoteTitle = styled(Text)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #5e5873;
`;

export const AddNoteTitleInput = styled(Input)`
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  height: 46px;
  padding: 14px 17px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #b9b9c3;
  }
`;

export const AddNoteBodyInput = styled(Input.TextArea)`
  text-align: right;
  border-radius: 6px;
  text-align: start;
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
  padding: 8px 14px;
  ::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
  }
`;

export const InputLabel = styled(Text)`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #5e5873;
`;
export const AddNoteButton = styled.button`
  width: 134px;
  height: 37px;
  color: #ffffff;
  background: #3554d1;
  border-radius: 5px;
  border: transparent;
`;

export const CloseButton = styled.div`
  position: relative;

  left: 27px;
  bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: #ffffff;
  border-radius: 6px;
  border: transparent;
  box-shadow: 0px 3px 8px rgba(167, 174, 181, 0);
`;

export const NameStyled = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.4px;
  color: #000000;
  margin-right: 20px;
`;
