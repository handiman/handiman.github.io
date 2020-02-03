import React, { Component } from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

export default class Section extends Component {
    render() {
        const { 
            title, 
            noprint,
            alternateTitle,
            textAlign, 
            backgroundColor, 
            backgroundImage,
            children } = this.props;

        return(
            <Segment as="section" vertical style={{backgroundColor,backgroundImage}} className={noprint ? 'screen' : null}>
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