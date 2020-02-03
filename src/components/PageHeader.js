import React, { Component, Children } from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

export default class PageHeader extends Component {
    render() {
        const { children, title } = this.props;

        return (
            <Segment as="header" vertical>
                <Container textAlign="center" style={{ margin: '6.5em 0 5em 0' }}>
                    <Header as="h1">
                        {title}
                    </Header>
                    {Children.map(children, (child, index) => (
                        <Header size="medium" key={index}>
                            {child}
                        </Header>
                    ))}
                </Container>
            </Segment>
        );
    }
}