import React from "react";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Expertise extends React.Component {
    render() {
        return <Row>
            <Col>
                <Tabs
                    defaultActiveKey="Programming"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="Programming" title="Programming">
                        <ul>
                            <li>Client/Server applications: SpringBoot</li>
                            <li>Build automation: Docker, Gitlab pipelines, Maven</li>
                            <li>Orchestration: Kubernetes, Helm</li>
                            <li>JavaScript libraries: React.js</li>
                            <li>Markup languages: HTML</li>
                            <li>Programming languages: Assembly (8086, MIPS), bash, C, Java, JavaScript, Kotlin, C#</li>
                            <li>Web programming: CSS, Node.js</li>
                            <li>Videogame creation systems: Unity ECS</li>
                        </ul>
                    </Tab>
                    <Tab eventKey="Office-automation" title="Office automation">
                        <ul>
                            <li>Microsoft Office Word, Excel and Powerpoint</li>
                            <li>BPMN: Camunda Modeler</li>
                        </ul>
                    </Tab>
                    <Tab eventKey="Data-management" title="Data management">
                        <ul>
                            <li>Relational databases: PostgreSQL, MySQLLite</li>
                            <li>Graph databases: Neo4j</li>
                        </ul>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    }
}

export default Expertise;