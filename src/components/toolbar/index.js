import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Search from '../search'
import style from './style.styl';

const Styles = (a) => a.filter(b => !!b).join(' ');

let GoBackButton = ({...props}) => (
    <a className={style.button} onClick={props.action}>
        <i className="material-icons">arrow_back</i>
    </a>
)

class Button extends Component {

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

class Toolbar extends Component {

    static defaultProps: {
        search: false,
        buttons: []
    }

    static propTypes = {
        title: PropTypes.string,
        goBack: PropTypes.func,
        search: PropTypes.bool,
        buttons: PropTypes.array
    }

    render() {
        let {props} = this
        return (
            <nav id="toolbar" className={style.toolbar}>
                <div className={style.menu}>
                    {props.goBack && <GoBackButton action={props.goBack}/>}
                    {props.title && <h1 className={style.title}>{props.title}</h1>}
                </div>
                <div className={style.actions}>
                    {props.search && <Search />}
                    <div className={style.buttons}>
                        {props.buttons.map((i, k) => <Button key={k} {...i}/>)}
                    </div>
                </div>
            </nav>
        )
    }
}

export default translate(['toolbar'], {wait: true, withRef: true})(Toolbar);
