import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { Section } from '../components';

export default class Education extends Component {
    render() {
        const { education } = this.props;
        return (
            <Section id="education">
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
            </Section>
        );
    }
}