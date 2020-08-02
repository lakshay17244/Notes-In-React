import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';
import { MdDelete } from 'react-icons/md'

const NoteList = ({ addNewNote, AllNotes, SelectedNote, setSelectedNote, deleteNote }) => {
    const [SearchText, setSearchText] = useState('')
    const [SearchedNotes, setSearchedNotes] = useState([])

    useEffect(() => {
        if (SearchText) {
            setSelectedNote(-1)
            setSearchedNotes(AllNotes.filter(note => {
                return note.heading.indexOf(SearchText) >= 0 || note.content.indexOf(SearchText) >= 0
            }))
        }
        else {
            setSearchedNotes(AllNotes)
        }

    }, [SearchText, AllNotes, setSelectedNote])


    return (

        <Card className='shadow'>
            <CardHeader>
                <Row className='justify-content-between'>
                    <Col xl={9} lg={9} md={9} sm={9} xs={8}>
                        <Input
                            type='text'
                            value={SearchText}
                            onChange={e => setSearchText(e?.target?.value)}
                            placeholder='Search a note by name/description'
                        />
                    </Col>
                    <Col className='d-flex justify-content-end' xl={3} lg={3} md={3} sm={3} xs={4}>
                        <AiOutlineFileAdd className='action-icon' size={30} onClick={addNewNote} />
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>

                {SearchedNotes && SearchedNotes.map((note, index) => {
                    return (
                        <Card
                            className={'my-2 ' + (SelectedNote === index ? 'selected' : '')}
                            key={index}
                            onClick={() => setSelectedNote(index)}
                        >
                            <CardBody>
                                <Row className='justify-content-between'>
                                    <Col xl={10} lg={10} md={10} sm={10} xs={8}>
                                        {
                                            note?.heading ?
                                                <h5 className='m-0'>{note?.heading}</h5>
                                                :
                                                note?.content ?
                                                    <h5 className='m-0 text-muted'>No note title</h5>
                                                    :
                                                    <h5 className='m-0 text-muted'>Empty Note</h5>
                                        }
                                    </Col>
                                    <Col xl={2} lg={2} md={2} sm={2} xs={4} onClick={e => e.stopPropagation()} className='d-flex justify-content-end'>
                                        <MdDelete onClick={() => deleteNote(index)} className='text-danger action-icon' size={25} />
                                    </Col>
                                </Row>

                                <Row className='mt-4 mb-0 mr-2 justify-content-end'>
                                    <p className='mb-0 text-muted'>Created {moment(note.created).fromNow()}</p>
                                </Row>
                            </CardBody>
                        </Card>
                    )
                })}

            </CardBody>

        </Card>
    )
}

export default NoteList;