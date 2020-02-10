import React, { Component } from 'react';
import { Table, Header } from 'semantic-ui-react';
import { Section } from '../components';

export default class Employers extends Component {
    render() {
        const { employers } = this.props;
        return (
            <Section id="employers">
                <Header as="h2">
                    <span className="no-print">I've been around</span>
                    <span className="print">Employment History</span>
                </Header>
                <Table basic stackable style={{background:'transparent',border:0}} >
                    <Table.Body>
                    {employers.map((employer, index) => (
                        <Table.Row key={index} className="employer" style={{border:0}}>
                            <Table.Cell width={3} style={{paddingLeft:0, border:0}}>{employer.from} - {employer.to}</Table.Cell>
                            <Table.Cell width={13} style={{border:0}}>{employer.title} at {employer.organization}</Table.Cell>
                        </Table.Row>
                    ))}
                    </Table.Body>
                </Table>
            </Section>
        );
    }   
}