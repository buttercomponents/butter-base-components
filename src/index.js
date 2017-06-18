import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './styl/style.styl';
import ActionBar from './components/action-bar';

let CloseButton = (props) => (props)

export default class MovieDetails extends Component {
    render() {
        let {state, props} = this;
        return (
            <div className={style.layout}>
                    <ActionBar />
            </div>
        );
    }
}
