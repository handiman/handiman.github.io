import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { Section } from '../components';

export default class Interests extends Component {
    render() {
        const { interests } = this.props;

        return (
            <Section className="no-print" id="interests">
                <List>
                    <List.Header as="h2">I enjoy</List.Header>
                    {interests.map((interest, index) => (
                        <List.Item key={index}>
                            {interest}
                        </List.Item>
                    ))}
                </List>
            </Section>
        );
    }   
}