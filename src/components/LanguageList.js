import React, { Component } from 'react';
import { Segment, Container, List } from 'semantic-ui-react';

export default class Languages extends Component {
    render() {
        const { languages } = this.props;
        return (
            <Segment as="section" vertical className="languages">
                <Container>
                    <List>
                        <List.Header as="h2">
                            <span className="no-print">I can communicate</span>
                            <span className="print">Languages</span>
                        </List.Header>
                        {languages && languages.map((language, index) => (
                            <List.Item key={index} className="language">
                                <span>{language.name}</span>
                                <span>{language.proficiency}</span>
                            </List.Item>
                        ))}
                    </List>
                </Container>
            </Segment>
        );
    }   
}