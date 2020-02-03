import React, { Component } from 'react';
import { Segment, Container, List, Header } from 'semantic-ui-react';

export default class Skills extends Component {
    render() {
        const { languages, frameworks, methods, tools, databases, certifications } = this.props.skills
        const comma = <>, </>;
        const skillset = (title, collection) => (<>
            <Header size="small">{title}</Header>
            {collection && collection.map((skill, index) => (
                    <span key={index}>
                        <>{skill}</>
                        {index < collection.length - 1 && comma}
                    </span>
            ))} 
        </>);

        return (
            <Segment as="section" vertical className="skills">
                <Container>
                    <List>
                        <List.Header as="h2">
                            <span className="no-print">I know things</span>
                            <span className="print">Technological Summary</span>
                        </List.Header>
                        {skillset('Frameworks', frameworks)}
                        {skillset('Languages', languages)}
                        {skillset('Methods', methods)}
                        {skillset('Tools', tools)}
                        {skillset('Databases', databases)}
                        {skillset('Certifications', certifications)}
                    </List>
                </Container>
            </Segment>
        );
    }   
}
