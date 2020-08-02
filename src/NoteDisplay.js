import React from 'react';
import { Card, CardBody, CardHeader, Input } from 'reactstrap';

const NoteDisplay = ({ Note, setNote }) => {

    return (
        <Card className='shadow'>
            <CardHeader>
                <Input
                    bsSize='lg'
                    type='text'
                    value={Note?.heading}
                    onChange={e => setNote(e?.target?.value, Note?.content)}
                    placeholder='Note Title'
                />
            </CardHeader>
            <CardBody>
                <Input
                    type='textarea'
                    value={Note?.content}
                    onChange={e => setNote(Note?.heading, e?.target?.value)}
                    placeholder='Note Content'
                />
            </CardBody>
        </Card>
    )
}

export default NoteDisplay;