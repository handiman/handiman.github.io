import React, { Component, Children, Fragment } from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

export default class PageHeader extends Component {
    render() {
        const { children, title, alternateTitle, id } = this.props;

        return (
            <Segment as="header" vertical id={id || "header"}>
                <Container textAlign="center">
                    <Header as="h1">
                        <span className="no-print">{title}</span>
                        <span className="print">{alternateTitle || title}</span>
                    </Header>
                    {Children.map(children, (child, index) => (
                        <Fragment key={index}>
                            {child}
                        </Fragment>
                    ))}
                </Container>
            </Segment>
        );
    }
}