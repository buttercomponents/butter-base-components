import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Search from '../search'
import style from './style.styl';

const Styles = (a) => a.filter(b => !!b).join(' ');

class ToolbarButton extends Component {

    static defaultProps = {
        action: () => {},
        active: false,
        toogle: false,
        update: false
    }

    static propTypes = {
        action: PropTypes.func,
        active: PropTypes.bool,
        toogle: PropTypes.bool,
        update: PropTypes.bool
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

let Toolbar = ({search, buttons}) => (
    <nav id="toolbar" className={style.toolbar}>
        {search && <Search />}
        <div className={style.buttons}>
            {buttons.map((i, k) => <ToolbarButton key={k} {...i}/>)}
        </div>
    </nav>
)

Toolbar.defaultProps = {
    search: false,
    buttons: []
}

Toolbar.propTypes = {
    search: PropTypes.bool,
    buttons: PropTypes.array
}

export default translate(['toolbar'])(Toolbar);
