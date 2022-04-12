import { Col, Row, Space } from "antd";
import { FiX } from "react-icons/fi";
import { NoteBox, NoteHeadFont, NoteBodyFont } from "./style";
import { ReactComponent as EditIcon } from "../Shared/EditIcon.svg";
import { deleteNote } from "../Reducers/NotesSlice";
import { setSelected } from "../Reducers/SelectedSlice";
import { setOpenModal } from "../Reducers/SelectedSlice";
import { useDispatch } from "react-redux";

export default function Note(props) {
  const dispatch = useDispatch();
  const editNote = () => {
    dispatch(setSelected(props));
    dispatch(setOpenModal(true));
  };
  return (
    <>
      <NoteBox
        headStyle={{
          padding: "15px",
          height: "24px",
        }}
        bodyStyle={{ padding: "15px" }}
        title={
          <Row align='center'>
            <Col style={{ display: "flex" }} span={19}>
              <NoteHeadFont>{props.title}</NoteHeadFont>
            </Col>

            <Col span={5}>
              <Row justify='end'>
                <Space size={20}>
                  <EditIcon
                    onClick={() => {
                      editNote();
                    }}
                  />

                  <FiX
                    onClick={() => {
                      dispatch(deleteNote(props.id));
                    }}
                    style={{ height: "24px", width: "24px" }}
                  />
                </Space>
              </Row>
            </Col>
          </Row>
        }
      >
        <NoteBodyFont>{props.body}</NoteBodyFont>
      </NoteBox>
    </>
  );
}
