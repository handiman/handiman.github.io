import React, { Component } from 'react';
import { Grid, Container, Segment, Header } from 'semantic-ui-react';

export default class RecommendationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            recommendations: []
        };
    }

    componentDidMount() {
        fetch('/data/recommendations.json')
            .then(response => response.json())
            .then(data => this.setState({
                isLoading:false,
                recommendations:data.recommendations
            }));
    }

    render() {
        const { isLoading, recommendations } = this.state;
        const { title, textAlign } = this.props;

        if (isLoading) {
            return (
                <Segment as="section" vertical loading placeholder>
                    <Container textAlign={textAlign}>
                        {title && <Header as="h2">{title}</Header>}
                    </Container>
                </Segment>
            );
        }

        return (
            <Segment as="section" vertical className="no-print recommendations">
                <Container textAlign={textAlign}>
                    {title && <Header as="h2">{title}</Header>}
                    {recommendations.length > 0 && (
                        <Grid columns={recommendations.length} stackable>{recommendations.map((item, index) => (
                            <Grid.Column key={index}>
                                <Container as="blockquote" textAlign="left">
                                    <>{item.text}</>
                                    <Container textAlign="right">
                                        {item.link && <a href={item.link}>{item.name}</a>}
                                        {!(item.link) && <span>{item.name}</span>}
                                    </Container>
                                </Container>
                            </Grid.Column>
                        ))}</Grid>
                    )}
                </Container>
            </Segment>
        );
    }
}