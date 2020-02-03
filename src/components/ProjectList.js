import React, { Component, Fragment } from 'react';
import { Segment, Container, Header, List } from 'semantic-ui-react';

export default class ProjectList extends Component {
    render() {
        const { projects } = this.props;
        const comma = (<>, </>);

        const description = project => project.description && (<>
            <Header size="tiny">Description</Header>
            <p>{project.description}</p>
        </>);

        const highlights = project => project.achievements && (<>
            <Header size="tiny">Highlights</Header>
            {project.achievements.map((achievement, index) => (
                    <div key={index}>{achievement}</div>
                ))}
            <p></p>
        </>);

        const skills = project => project.skills && (<>
            <Header size="tiny">Technologies used</Header>
            <p>
                {project.skills.map((skill, index) => (
                    <Fragment key={index}>
                        <>{skill}</>
                        {index < project.skills.length - 1 && comma}
                    </Fragment>
                ))}
            </p>
        </>);

        return (
            <Segment as="section" vertical className="projects">
                <Container>
                    <List>
                        <List.Header as="h2">
                            <span className="no-print">I am experienced</span>
                            <span className="print">Project History</span>
                        </List.Header>
                        {projects.map((project, index) => (
                            <List.Item key={index} className="project">
                                <Header as="h3">{project.title}</Header>
                                <p>{project.from} - {project.to} {project.location}</p>
                                {highlights(project)}
                                {skills(project)}
                                {description(project)}
                            </List.Item>
                        ))}
                    </List>
                </Container>
            </Segment>
        );
    }
}