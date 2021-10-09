import React, { Component } from 'react'
import { BackComponent } from '../components/BackComponent'
import {Container} from 'reactstrap';

export default class EditTodoContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Edit User</h1>
            </Container>
        )
    }
}
