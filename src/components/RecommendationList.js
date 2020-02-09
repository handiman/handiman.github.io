import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { Section } from '../components';

export default class RecommendationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            recommendations: []
        };
    }

    componentDidMount() {
        fetch('/dist/recommendations.json')
            .then(response => response.json())
            .then(data => this.setState({
                isLoading:false,
                recommendations:data.recommendations
            }));
    }

    render() {
        const { isLoading, recommendations } = this.state;

        if (isLoading) {
            return (
                <Section loading placeholder id="recommendations" {...this.props} />
            );
        }

        return (
            <Section className="no-print" id="recommendations" {...this.props}>
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
            </Section>
        );
    }
}