import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import NoteDisplay from './NoteDisplay';
import NoteList from './NoteList';

const Notes = () => {

  const emptyNote = () => {
    return {
      heading: '',
      content: '',
      created: new Date()
    }
  }

  const [AllNotes, setAllNotes] = useState(
    localStorage.getItem('Notes') ?
      JSON.parse(localStorage.getItem("Notes"))
      :
      []
  )

  const deleteNote = (index) => {
    let copyAllNotes = [...AllNotes]
    if (index !== -1) {
      copyAllNotes.splice(index, 1);
      setAllNotes(copyAllNotes)
    }
  }

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(AllNotes))
  }, [AllNotes])

  const [SelectedNote, setSelectedNote] = useState(-1)

  const setNote = (heading, content) => {
    let copyAllNotes = [...AllNotes]
    copyAllNotes[SelectedNote].heading = heading
    copyAllNotes[SelectedNote].content = content
    setAllNotes(copyAllNotes)
  }

  const addNewNote = () => {
    let res = AllNotes.concat(emptyNote())
    setAllNotes(res)
    setSelectedNote(AllNotes.length)
  }

  return (
    <Container fluid>
      <Row className='mt-4'>
        <Col className='my-2 mx-auto' xl={5} lg={5} md={10} sm={12} xs={12}>
          <NoteList deleteNote={deleteNote} AllNotes={AllNotes} addNewNote={addNewNote} SelectedNote={SelectedNote} setSelectedNote={setSelectedNote} />
        </Col>
        <Col className='my-2 mx-auto' xl={7} lg={7} md={10} sm={12} xs={12}>
          <NoteDisplay AllNotes={AllNotes} Note={SelectedNote === -1 ? {} : AllNotes[SelectedNote]} setNote={setNote} />
        </Col>
      </Row>
    </Container>

  );
}

export default Notes;
