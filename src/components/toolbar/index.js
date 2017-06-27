import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Search from '../search'
import style from './style.styl';

const Styles = (a) => a.filter(b => !!b).join(' ');

class Button extends Component {
    constructor (props) {
        super()
        this.state = {
            active: props.active || false,
            update: props.update || false
        }
    }

    onUpdate() {
        this.setState((prev) => ({update: true}));
    }

    onClick() {
        let {props, state} = this
        props.toogle && this.setState((prev) => ({active: !!!prev.active}));
        props.action.bind(this)
    }

    render () {
        let {props, state} = this
        let classList = Styles([style.button, state.active && style.active, state.update && style.update])

        return (
            <div className={classList} onClick={this.onClick.bind(this)}>
                <i className="material-icons">{props.icon}</i>
            </div>
        )
    }
}

let Toolbar = ({...props}) => (
    <div id="toolbar" className={style.toolbar}>
        { props.search && <Search /> }
        <div className={style['buttons']}>
            {props.buttons.map((i, k) => <Button key={k} {...i}/>)}
        </div>
    </div>
)

export default translate(['toolbar'], {wait: true, withRef: true})(Toolbar);
