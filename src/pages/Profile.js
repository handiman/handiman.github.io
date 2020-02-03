import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { 
    PageHeader, 
    ProfileSummary,
    SkillsList,
    ProjectList,
    EmployerList,
    InterestList,
    EducationList,
    LanguageList,
    RecommendationList,
    StaticContactForm 
} from '../components';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            profile: null
        };
    }

    componentDidMount() {
        fetch('/data/profile.json')
            .then(response => response.json())
            .then(profile => this.setState({ isLoading: false, profile }));
    }

    render() {
        const { isLoading, profile } = this.state;
        const header = (
            <PageHeader title="Hi, I'm Henrik Becker">
                <>Software Engineer</>
                <>You'll like me</>
            </PageHeader>
        );
        
        if (isLoading){
            return (<>
               {header} 
               <Segment vertical loading />
            </>);
        }

        return (<>
            {header}
            <ProfileSummary summary={profile.summary} />
            <SkillsList skills={{...profile.skills,...{certifications:profile.certifications}}} />
            <ProjectList projects={profile.projects} />
            <LanguageList languages={profile.languages} />
            <EmployerList employers={profile.employment} />
            <InterestList interests={profile.interests} />
            <EducationList education={profile.education} />
            <RecommendationList title="I deliver" />
            <StaticContactForm />
        </>);
    }
}