import React from 'react';
import { Card, CardBody, CardHeader, Input } from 'reactstrap';
import _ from 'lodash'

const NoteDisplay = ({ Note, setNote }) => {

    return (
        <>
            {
                !_.isEmpty(Note) ?
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
                                rows='15'
                            />
                        </CardBody>
                    </Card>
                    :
                    <Card className='shadow'>
                        <CardBody className='p-4'>
                            <h4 className='text-center text-muted'>Select a note to see it here!</h4>
                        </CardBody>
                    </Card>
            }
        </>
    )
}

export default NoteDisplay;