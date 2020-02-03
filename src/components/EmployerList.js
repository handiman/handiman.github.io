import React, { Component } from 'react';
import { Segment, Container, List, Header } from 'semantic-ui-react';

export default class Employers extends Component {
    render() {
        const { employers } = this.props;
        return (
            <Segment as="section" vertical className="employers">
                <Container>
                    <List>
                        <List.Header as="h2">
                            <span className="no-print">I've been around</span>
                            <span className="print">Employment History</span>
                        </List.Header>
                        {employers.map((employer, index) => (
                            <List.Item key={index} className="employer">
                                <span>{employer.from} - {employer.to}</span>
                                <span>{employer.title} at {employer.organization}</span>
                            </List.Item>
                        ))}
                    </List>
                </Container>
            </Segment>
        );
    }   
}