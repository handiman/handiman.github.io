import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon, Responsive, Sidebar } from 'semantic-ui-react';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { showSidebar: false }
        this.showContactForm = this.showContactForm.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.hideSidebar = this.hideSidebar.bind(this);
    }

    showContactForm() {
        this.props.onShowModalContactFormChanged(true);
    }

    toggleSidebar() {
        this.setState({ showSidebar: !this.state.showSidebar });
    }

    hideSidebar() {
        this.setState({ showSidebar: false });
    }

    render() {
        const mobile = 767;
        const computer = 768;

        const header = (<>
            <Responsive as={Menu.Item} link header maxWidth={mobile} onClick={this.toggleSidebar}>
                <Icon name="sidebar" />Henrik Becker
            </Responsive>
            <Responsive as={Menu.Item} header minWidth={computer}>
                Henrik Becker
            </Responsive>
        </>);

        const pages = (<>
            <Menu.Item link as={Link} to="/">
                Home
            </Menu.Item>
            <Menu.Item link as={Link} to="/cv">
                Profile
            </Menu.Item>
        </>);

        const vertical = (
            <Responsive minWidth={computer}>
                <Menu fixed="top" inverted>
                    {header}
                    {pages}
                    <Menu.Item link onClick={this.showContactForm}>
                        Contact
                    </Menu.Item>
                    <Menu.Item link href="https://www.henrikbecker.net/resume.pdf" title="CV in PDF format">
                        <Icon name="file pdf" />
                    </Menu.Item>
                    <Menu.Item link href="https://www.linkedin.com/in/prettygoodprogrammer" title="Look me up on LinkedIn">
                        <Icon name="linkedin" />
                    </Menu.Item>
                    <Menu.Item link href="https://github.com/handiman" title="Check out how I code">
                        <Icon name="github" />
                    </Menu.Item>
                </Menu>
            </Responsive>
        );

        const horizontal = (
            <Responsive maxWidth={mobile}>
                <Menu fixed="top" inverted>
                    {header}
                </Menu>
                <Sidebar as={Menu} inverted vertical visible={this.state.showSidebar} onHide={this.hideSidebar} onClick={this.hideSidebar}>
                    {header}
                    {pages}
                    <Menu.Item link href="https://www.henrikbecker.net/resume.pdf" title="Profile in PDF format">
                        Profile in PDF format
                    </Menu.Item>
                    <Menu.Item link href="https://www.linkedin.com/in/prettygoodprogrammer" title="Look me up on LinkedIn">
                        LinkedIn
                    </Menu.Item>
                    <Menu.Item link href="https://github.com/handiman" title="Check out how I code">
                        GitHub
                    </Menu.Item>
                    <Menu.Item link onClick={this.showContactForm}>
                        Contact
                    </Menu.Item>
                </Sidebar>
            </Responsive>
        );

        return (<>
            {vertical}
            {horizontal}
        </>);
    }
}