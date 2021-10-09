import React from 'react'
import {Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
export const BackComponent = () => {
    return (
        <Row className="mb-2">
            <Col>
                <Link to="/">
                    <Button color="dark" className="mr-2">
                    Kembali
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}
