import React, { Component } from 'react';
import { Grid,  Container, Header, Icon, Image } from 'semantic-ui-react';
import { Section } from '../components';

const cursor = usp => false === usp.link ? null : { cursor: 'pointer' };
const href = usp => false === usp.link ? null : usp.link.href;
const toolTip = usp => false === usp.link ? null : usp.link.text;

const noLink = usp => !usp.link;

const children = usp => (<>
    {usp.font && (
        <Icon name={usp.font} size="huge" />
    )}
    {usp.icon && (
        <Image src={usp.icon} className="usp" centered />
    )}
    <Header as="h4">
        {usp.title}
    </Header>
    {usp.excerpt}
</>);

export default class UspList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            usps: []
        }
    }

    componentDidMount() {
        fetch('/dist/usps.json')
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
                <Section placeholder loading>
                    <Container textAlign="center" />
                </Section>
            );
        }

        return (
            <Section>
                {usps.length > 0 && (
                    <Grid columns={usps.length} stackable>{usps.map((usp, index) => (
                        <Grid.Column key={index} style={cursor(usp)}>
                            {!noLink(usp) && (
                                <Container href={href(usp)} title={toolTip(usp)} textAlign="center">
                                    {children(usp)}
                                </Container>
                            )}
                            {noLink(usp) && (
                                <Container title={toolTip(usp)} textAlign="center">
                                    {children(usp)}
                                </Container>
                            )}
                        </Grid.Column>
                    ))}</Grid>
                )}
            </Section>
        );
    }
}