import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import NoteDisplay from './NoteDisplay';
import NoteList from './NoteList';

const Notes = () => {

  const emptyNote = {
    heading: '',
    content: ''
  }

  const [AllNotes, setAllNotes] = useState([
    {
      heading: 'Try Note',
      content: 'This is some random shit content boi!'
    }
  ])

  const [SelectedNote, setSelectedNote] = useState(0)

  const setNote = (heading, content) => {
    let copyAllNotes = Object.assign([], AllNotes)
    copyAllNotes[SelectedNote].heading = heading
    copyAllNotes[SelectedNote].content = content
    setAllNotes(copyAllNotes)
  }

  const addNewNote = () => {
    let res = AllNotes.concat(emptyNote)
    setAllNotes(res)
    setSelectedNote(AllNotes.length)
  }

  return (
    <Container fluid>
      <Row className='mt-4'>
        <Col xl={5}>
          <NoteList AllNotes={AllNotes} addNewNote={addNewNote} SelectedNote={SelectedNote} setSelectedNote={setSelectedNote} />
        </Col>
        <Col xl={7}>
          <NoteDisplay Note={AllNotes[SelectedNote]} setNote={setNote} />
        </Col>
      </Row>
    </Container>

  );
}

export default Notes;
