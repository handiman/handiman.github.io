import React, { Component } from 'react';
import { Segment, Container, List } from 'semantic-ui-react';
import { Colors } from '../components';

export default class Interests extends Component {
    render() {
        const { interests } = this.props;
        const backgroundImage = {
            backgroundImage: "url(/img/interests_gray.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right"
        };

        return (
            <Segment as="section" className="no-print" vertical>
                <Container style={backgroundImage}>
                    <List>
                        <List.Header as="h2">I enjoy</List.Header>
                        {interests.map((interest, index) => (
                            <List.Item key={index}>
                                {interest}
                            </List.Item>
                        ))}
                    </List>
                </Container>
            </Segment>
        );
    }   
}