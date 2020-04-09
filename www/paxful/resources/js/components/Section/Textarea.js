import React from 'react';
import {Form} from 'react-bootstrap';

export default class Textarea extends React.Component
{
    render() {
        return (
            <div className={"section-textarea"}>
                <span>Send</span>

                <Form.Group controlId="section_comment">
                    <Form.Control as="textarea" rows="3" placeholder={"Type your message..."} />
                </Form.Group>
            </div>
        );
    }
}
