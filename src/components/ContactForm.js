import React, { Component } from 'react';
import { Form, Button, Modal, Header, Message } from 'semantic-ui-react';
import { Section } from '../components';

const header = "Would you like to get in touch?";

const getIp = function() {
    return fetch('https://www.henrikbecker.se/api/ip')
    .then(response => response.text());
}

const submit = function(values) {
    let body = JSON.stringify({ subject:"Contact Form", ...values });
    fetch('https://www.henrikbecker.se/api/contact-form', { method: 'POST', body })
    .catch(error => console.log(error.message));
}

export class StaticContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sent: false,
            address: 'unknown',
            from: '', 
            name: '', 
            message: '' 
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        getIp().then(address => this.setState({ address }));
    }

    onSubmit() {
        submit({
            address:this.state.address,
            name:this.state.name, 
            from:this.state.from,
            message:this.state.message
        });
        this.setState({ 
            sent: true 
        });
        window.setTimeout(this.setState({ 
            sent: false,
            from: '', 
            name: '', 
            message: '' 
        }), 2000);
    }

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    render() {
        const { sent, name, from, message } = this.state;

        return (
            <Section id="contactForm" className="no-print">
                <Header as="h2">
                    {header}
                </Header>
                <Form onSubmit={this.onSubmit}>
                    <Form.Input name="name" placeholder="Your name" value={name} onChange={this.onChange} />
                    <Form.Input name="from" placeholder="Your e-mail address" value={from} onChange={this.onChange} />
                    <Form.TextArea name="message" placeholder="Message" rows="5" value={message} onChange={this.onChange} />
                    <Message success visible={sent}>
                        Message sent
                    </Message>
                    <Button primary type="submit">Send</Button>
                </Form>
            </Section>
        );
    }
}

export default class ModalContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sent: false,
            address: 'unknown',
            from: '', 
            name: '', 
            message: '' 
        };
        this.onClose = this.onClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        getIp().then(address => this.setState({ address }));
    }

    onSubmit() {
        submit({
            address:this.state.address,
            name:this.state.name, 
            from:this.state.from,
            message:this.state.message
        });
        this.setState({ 
            sent: false,
            email: '', 
            name: '', 
            message: '' 
        });
    }

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    onClose(e) {
        if (e) { e.preventDefault(); }
        this.props.onShowModalContactFormChanged(false);
    };

    render() {
        const formId = "modalContactForm";
        const { name, from, message } = this.state;

        return (
            <Modal closeIcon open={this.props.showModalContactForm} onClose={this.onClose} className="no-print">
                <Modal.Header as="h2">
                    {header}
                </Modal.Header>
                <Modal.Content>
                    <Form id={formId} onSubmit={this.onSubmit}>
                        <Form.Input name="name" placeholder="Your name" value={name} onChange={this.onChange} />
                        <Form.Input name="from" placeholder="Your e-mail address" value={from} onChange={this.onChange} />
                        <Form.TextArea name="message" placeholder="Message" rows="5" value={message} onChange={this.onChange} />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary type="submit" form={formId}>Send</Button>
                    <Button secondary onClick={this.onClose} >Cancel</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}