import React, { Component } from 'react';
import { Segment, Container, List } from 'semantic-ui-react';

export default class Summary extends Component{
    render(){
        const { summary } = this.props;

        return(
            <Segment as="section" vertical className="summary">
                <Container>
                    <List>
                        <List.Header as="h2">I am</List.Header>
                        {summary.map((line, index) => (
                            <List.Item key={index}>
                                {line}
                            </List.Item>
                        ))}
                    </List>
                </Container>
            </Segment>
        );
    }
}