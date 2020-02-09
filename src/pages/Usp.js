import React, { Component } from 'react';
import { PageHeader, Section } from '../components';

export default class Usp extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading:true };
    }

    componentDidMount () {
        const { id } = this.props.match.params
        /*fetch(`https://api.twitter.com/user/${handle}`)
          .then((user) => {
            this.setState(() => ({ user }))
          })*/
      }

    render() {
        const { isLoading, usp } = this.state;

        
        const { id } = this.props.match.params
        
        return (
            <Section loading={isLoading}>
                {usp && (
                    <h1>{id}</h1>
                )}
            </Section>
        );
    }
}