import React, { Component } from 'react';
import { Grid, Segment, Container, Header, Icon, Image } from 'semantic-ui-react';

export default class UspList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            usps: []
        }
    }

    componentDidMount() {
        fetch('/data/usps.json')
            .then(response => response.json())
            .then(data => this.setState({
                isLoading: false,
                usps: data.usps
            }));
    }

    render() {
        const { isLoading, usps } = this.state;
        
        if (isLoading) {
            return (
                <Segment as="section" placeholder loading>
                    <Container textAlign="center" />
                </Segment>
            );
        }

        var cursor = usp => false === usp.link ? null : { cursor: 'pointer' };
        var href = usp => false === usp.link ? null : usp.link.href;
        var toolTip = usp => false === usp.link ? null : usp.link.text;
        var imageStyle = {
            backgroundColor: '#222',
            paddingRight: '3px',
            height: '56px'
        };

        return (
            <Segment as="section" vertical className="usps">
                <Container>
                    {usps.length > 0 && (
                        <Grid columns={usps.length} stackable>{usps.map((usp, index) => (
                            <Grid.Column key={index} style={cursor(usp)}>
                                <Container href={href(usp)} title={toolTip(usp)} textAlign="center">
                                    {usp.font && (
                                        <Icon name={usp.font} size="huge" />
                                    )}
                                    {usp.icon && (
                                        <Image src={usp.icon} style={imageStyle} centered />
                                    )}
                                    <Header as="h4">
                                        {usp.title}
                                    </Header>
                                    {usp.excerpt}
                                </Container>
                            </Grid.Column>
                        ))}</Grid>
                    )}
                </Container>
            </Segment>
        );
    }
}