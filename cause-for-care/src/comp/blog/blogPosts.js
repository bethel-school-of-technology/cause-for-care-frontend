import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class Blogposts extends React.Component {
    render() {
        return (
            <div>
                <InputGroup>
                    <FormControl aria-label="default" placeholder='Title'/>
                    <InputGroup.Append>
                        <Button type="submit" variant="dark">Submit</Button>
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup>
                    <FormControl as='textarea' placeholder="Content" />
                </InputGroup>
            </div>
        )
    }
}

export default Blogposts;