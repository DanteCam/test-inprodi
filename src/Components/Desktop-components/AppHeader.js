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
            sm={24}
            md={18}
            lg={20}
            xl={20}
            xxl={20}
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

          <Col sm={24} md={6} lg={4} xl={4} xxl={4}>
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
