import React, { Component } from 'react';
import { Segment, Container, List, Header } from 'semantic-ui-react';

export default class Education extends Component {
    render() {
        const { education } = this.props;
        return (
            <Segment as="section" vertical className="education">
                <Container>
                    <List>
                        <List.Header as="h2">
                            <span className="no-print">I went to school</span>
                            <span className="print">Education</span>
                        </List.Header>
                        {education.map((education, index) => (
                            <List.Item key={index} className="education">
                                <span>{education.from} - {education.to}</span>
                                <span>{education.school}</span>
                            </List.Item>
                        ))}
                    </List>
                </Container>
            </Segment>
        );
    }
}