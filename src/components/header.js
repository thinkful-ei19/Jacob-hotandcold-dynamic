import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
    }

    setHidden() {
        this.setState({
            hidden:(!this.state.hidden)
        })
    }

    render() {

    if (this.state.hidden) {
        return (
            <header>
                <TopNav isHidden={() => this.setHidden()} newGame={() => this.props.game()}/>
                {/* <InfoModal /> */}
                <h1>HOT or COLD</h1>
            </header>
        );
    }

    else {
        return (
        <header>
            <InfoModal onClose={() => this.setHidden()}/>
        </header>
    );
}
}
};
