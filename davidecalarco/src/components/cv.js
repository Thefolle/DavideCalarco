import logopolito from '../logopolito.png';
import relatech from '../relatech.png'

import React from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'


class Cv extends React.Component {

    render() {
        return <Row>
            <Col>
                <Card style={{ width: '18rem' }} text='dark'>
                    <Card.Img variant="top" src={logopolito} />
                    <Card.Body>
                        <Card.Title>Bachelor degree</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>In Computer Engineering</ListGroup.Item>
                        <ListGroup.Item>Accomplished at 23 years old</ListGroup.Item>
                        <ListGroup.Item>Official duration: 3 years</ListGroup.Item>
                        <ListGroup.Item>Final mark: 98/110</ListGroup.Item>
                        <ListGroup.Item>Obtained at 17/03/2020</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} text='dark'>
                    <Card.Img variant="top" src={logopolito} />
                    <Card.Body>
                        <Card.Title>Master degree</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>In Computer Engineering</ListGroup.Item>
                        <ListGroup.Item>Thesis title: Enhance robustness of test cases by linting bad practices</ListGroup.Item>
                        <ListGroup.Item>Accomplished at 25 years old</ListGroup.Item>
                        <ListGroup.Item>Official duration: 2 years</ListGroup.Item>
                        <ListGroup.Item>Final mark: 104/110</ListGroup.Item>
                        <ListGroup.Item>Obtained at 13/04/2022</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} text='dark'>
                    <Card.Img variant="top" src={relatech} />
                    <Card.Body>
                        <Card.Title>Stage</Card.Title>
                        <Card.Text>
                            I've learnt to automate some tasks of the software lifecycle through pipelines and orchestration.
                            I've worked in coordination with colleagues belonging to my team and development teams.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>At Relatech S.P.A.</ListGroup.Item>
                        <ListGroup.Item>As Software analyst, officially</ListGroup.Item>
                        <ListGroup.Item>As member of DevOps team, in practice</ListGroup.Item>
                        <ListGroup.Item>From 05/2022 to 11/2022</ListGroup.Item>
                        <ListGroup.Item>Tech accomplishments: Gitlab pipelines and bash; Kubernetes and Helm</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    }
}

export default Cv;