import React, { Component } from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

export default class Section extends Component {
    render() {
        const { 
            id,
            title, 
            alternateTitle,
            textAlign, 
            children } = this.props;

        return(
            <Segment as="section" vertical {...this.props}>
                <a name={id}></a>
                <Container textAlign={textAlign}>
                    {title && (
                        <Header as="h2">
                            <span className="no-print">{title}</span>
                            <span className="print">{alternateTitle || title}</span>
                        </Header>
                    )}
                    {children}
                </Container>
            </Segment>
        );
    }
}