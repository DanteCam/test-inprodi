import { HeaderAppBar, AddNotesButton, NameStyled } from "./style";
import {
  FiCheckSquare,
  FiMail,
  FiMessageSquare,
  FiCalendar,
  FiStar,
  FiPower,
  FiPlusCircle,
} from "react-icons/fi";
import React from "react";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../Reducers/SelectedSlice";
import { setSelected } from "../Reducers/SelectedSlice";
import { useSelector } from "react-redux";
import { userName } from "../Reducers/AuthSlice";
import { useNavigate } from "react-router-dom";

const Icons = [FiCheckSquare, FiMessageSquare, FiMail, FiCalendar];

export default function AppHeader() {
  const dispatch = useDispatch(setOpenModal(true));
  const navigate = useNavigate();
  const name = useSelector(userName);

  const addNote = () => {
    dispatch(setOpenModal(true));
    dispatch(setSelected({}));
  };
  return (
    <>
      <HeaderAppBar>
        <Row style={{ height: "inherit" }} align='middle'>
          <Col
            style={{ display: "flex" }}
            xs={{ span: 24, offset: 4 }}
            sm={{ span: 24, offset: 4 }}
            md={{ span: 18, offset: 0 }}
            lg={{ span: 20, offset: 0 }}
            xl={{ span: 20, offset: 0 }}
            xxl={{ span: 20, offset: 0 }}
          >
            {Icons.map((icon) => {
              return React.createElement(icon, {
                key: icon,
                style: {
                  color: "#6E6B7B",
                  marginRight: "14px",
                  height: "20px",
                  width: "20px",
                },
              });
            })}
            <FiStar
              style={{
                color: "#FF9F43",
                height: "20px",
                width: "20px",
              }}
            />
          </Col>

          <Col
            xs={{ span: 24, pull: 5 }}
            sm={{ span: 24, pull: 7 }}
            md={{ span: 6, pull: 0 }}
            lg={{ span: 4, pull: 0 }}
            xl={{ span: 4, pull: 0 }}
            xxl={{ span: 4, pull: 0 }}
          >
            <Row justify='end' align='middle'>
              <NameStyled>{name}</NameStyled>
              <FiPower
                onClick={() => navigate("/")}
                style={{
                  height: "24px",
                  marginBottom: "5px",
                  width: "24px",
                  color: "#6E6B7B",
                }}
              />
            </Row>
          </Col>
        </Row>
      </HeaderAppBar>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <AddNotesButton onClick={() => addNote()}>
          <FiPlusCircle style={{ marginRight: "10px" }} />
          Agregar Nota
        </AddNotesButton>
      </div>
    </>
  );
}
