import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { Section } from '../components';

export default class Languages extends Component {
    render() {
        const { languages } = this.props;
        return (
            <Section id="languages">
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
            </Section>
        );
    }   
}