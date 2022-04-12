import { useState, useEffect } from "react";
import { Divider, Form } from "antd";
import {
  ModalStyled,
  ModalHead,
  ModalBody,
  ModalFooter,
  AddNoteTitle,
  AddNoteTitleInput,
  AddNoteBodyInput,
  InputLabel,
  AddNoteButton,
  CloseButton,
} from "./style";
import { FiPlusCircle, FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { storeNote } from "../Reducers/NotesSlice";
import { updateNote } from "../Reducers/NotesSlice";
import { selectOpenModal } from "../Reducers/SelectedSlice";
import { setOpenModal } from "../Reducers/SelectedSlice";
import { selectedNote } from "../Reducers/SelectedSlice";

export default function NoteForm() {
  const dispatch = useDispatch();
  const openModal = useSelector(selectOpenModal);
  const noteToEdit = useSelector(selectedNote);
  const [noteTitle, setNoteTitle] = useState();
  const [noteBody, setNoteBody] = useState();
  const editId = noteToEdit.id;

  const closeAddNote = () => {
    dispatch(setOpenModal(false));
  };
  const submitNote = () => {
    const Note = { id: Date.now(), title: noteTitle, body: noteBody };

    if (editId) {
      dispatch(updateNote({ title: noteTitle, body: noteBody, id: editId }));
    } else dispatch(storeNote(Note));
  };

  useEffect(() => {
    if (editId) {
      setNoteTitle(noteToEdit.title);
      setNoteBody(noteToEdit.body);
    } else {
      setNoteTitle("");
      setNoteBody("");
    }
  }, [noteToEdit.id]);
  return (
    <ModalStyled
      width={450}
      bodyStyle={{ padding: 0 }}
      footer={null}
      maskClosable={true}
      maskStyle={{ background: "rgba(77, 77, 77, 0.2)" }}
      visible={openModal}
      onCancel={closeAddNote}
      closeIcon={
        <CloseButton>
          <FiX style={{ width: "20px", height: "20px" }} />
        </CloseButton>
      }
    >
      <ModalHead>
        <AddNoteTitle>
          <FiPlusCircle
            style={{ marginRight: "15px", height: "18px", width: "18px" }}
          />
          Agregar Nota
        </AddNoteTitle>
      </ModalHead>
      <ModalBody>
        <Form>
          <Form.Item style={{ marginBottom: "33px" }}>
            <InputLabel>Título de la Nota</InputLabel>

            <AddNoteTitleInput
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              placeholder='Ingresar Título'
            ></AddNoteTitleInput>
          </Form.Item>

          <Form.Item style={{ marginBottom: "11px" }}>
            <InputLabel>Cuerpo de la Nota</InputLabel>
            <AddNoteBodyInput
              value={noteBody}
              autoSize={{ minRows: 6, maxRows: 6 }}
              placeholder='Ingresa el Cuerpo'
              onChange={(e) => setNoteBody(e.target.value)}
            ></AddNoteBodyInput>
          </Form.Item>
        </Form>
      </ModalBody>
      <Divider style={{ margin: 0 }} />
      <ModalFooter>
        <AddNoteButton
          onClick={() => {
            submitNote();
            closeAddNote();
          }}
        >
          Añadir Nota
        </AddNoteButton>
      </ModalFooter>
    </ModalStyled>
  );
}
