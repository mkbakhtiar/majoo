import React from 'react'
import {
    Jumbotron,
    Container
  } from 'reactstrap';
const JumbotronComponent = () => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1 className="display-3">Hello, Reviewer</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default JumbotronComponent;
