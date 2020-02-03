import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Icon } from 'semantic-ui-react';
import { PageHeader, Section, UspList, RecommendationList } from '../components';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.showContactForm = this.showContactForm.bind(this);
    }

    showContactForm() {
        this.props.onShowModalContactFormChanged(true);
    }

    render() {
        return (<>
            <PageHeader title="Henrik Becker">
                Software Engineer
            </PageHeader>
            <UspList />
            <RecommendationList title="What do people have to say about me?" textAlign="center" />
            <Section title="Sound good so far?" textAlign="center">
                <Grid columns="three" stackable>
                    <Grid.Column>
                        <Container as={Link} to="/cv">
                            <Icon name="book" size="big" />
                            <div>Read my full CV!</div>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container href="#" onClick={this.showContactForm}>
                            <Icon name="envelope outline" size="big" />
                            <div>Contact me!</div>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container href="https://www.linkedin.com/in/prettygoodprogrammer">
                            <Icon name="linkedin" size="big" />
                            <div>Look me up on LinkedIn!</div>
                        </Container> 
                    </Grid.Column>
                </Grid>
            </Section>
            <Section title="Thanks for visiting!" textAlign="center" />
        </>);
    }
}