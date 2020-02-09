import React, { Component } from 'react';
import { Segment, Container, List } from 'semantic-ui-react';
import { Section } from '../components';

export default class Summary extends Component{
    render(){
        const { summary } = this.props;

        return(
            <Section id="summary">
                <List>
                    <List.Header as="h2">I am</List.Header>
                    {summary.map((line, index) => (
                        <List.Item key={index}>
                            {line}
                        </List.Item>
                    ))}
                </List>
            </Section>
        );
    }
}