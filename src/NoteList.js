import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { Card, CardBody, CardHeader } from 'reactstrap';

const NoteList = ({ addNewNote, AllNotes, SelectedNote, setSelectedNote }) => {
    console.log(AllNotes)
    return (
        <Card className='shadow'>
            <CardHeader className='d-flex justify-content-end'>
                <AiOutlineFileAdd size={30} onClick={addNewNote} />
            </CardHeader>
            <CardBody>

                {AllNotes && AllNotes.map((note, index) => {
                    return (
                        <Card
                            className={'my-2 ' + (SelectedNote === index ? 'selected' : '')}
                            key={index}
                            onClick={() => setSelectedNote(index)}
                        >
                            <CardBody>
                                <h6 className='m-0'>{note?.heading}</h6>
                            </CardBody>
                        </Card>
                    )
                })}

            </CardBody>
        </Card>
    )
}

export default NoteList;