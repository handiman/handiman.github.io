import React, { Component } from 'react';
import { Section } from '../components';

export default class Footer extends Component {
    render() {
        return (
            <Section as="footer" inverted textAlign="center" className="no-print">
                Copyright &copy; Henrik Becker Consulting AB
            </Section>
        );
    }
}