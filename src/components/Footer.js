import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';

export default class Footer extends Component {
    render() {
        return (
            <Segment as="footer" inverted vertical>
                <Container textAlign="center" >
                    Copyright &copy; Henrik Becker Consulting AB
                </Container>
            </Segment>
        );
    }
}