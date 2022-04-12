import { Header, Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
import AppHeader from "../Components/Desktop-components/AppHeader";
import Note from "../Components/Desktop-components/Note";
import NoteForm from "../Components/Desktop-components/NoteForm";
import { useSelector } from "react-redux";
import { notesSelector } from "../Components/Reducers/NotesSlice";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Desktop() {
  const notes = useSelector(notesSelector);

  return (
    <Layout>
      <Header
        style={{ background: "#f8f8f8", height: "182px", padding: "0px" }}
      >
        <AppHeader />
      </Header>
      <Content style={{ background: "#f8f8f8", padding: "0 28px 0 28px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter={20}>
            {notes.map((note) => {
              return (
                <Note
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  body={note.body}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
        <NoteForm />
      </Content>
    </Layout>
  );
}
