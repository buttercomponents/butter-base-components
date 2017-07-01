import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Search from '../search'
import style from './style.styl';

const Styles = (a) => a.filter(b => !!b).join(' ');

class Button extends Component {

    static defaultProps = {
        action: () => {},
        active: false,
        toogle: false,
        update: false
    }

    constructor (props) {
        super()
        this.state = {
            active: props.active,
            update: props.update
        }
        this.action = props.action.bind(this)
    }

    onUpdate() {
        this.setState({update: true});
    }

    onClick() {
        let {props, state} = this
        props.toogle && this.setState(prevState => ({active: !!!prevState.active}));
        this.action()
    }

    render () {
        let {props, state} = this
        let classList = Styles([style.button, state.active && style.active, state.update && style.update])

        return (
            <div className={classList} onClick={this.onClick.bind(this)} title={props.title}>
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
