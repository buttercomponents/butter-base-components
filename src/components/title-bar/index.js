import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import style from './style.styl';

const os = require('os')

const Styles = (a) => a.filter(b => !!b).join(' ')


// use of darwin string instead of mac (mac os x returns darwin as platform)
const buttonOrder = {
    'darwin': ['close', 'min', 'max'],
    'linux': ['min', 'max', 'close'],
    'win32': ['min', 'max', 'close']
}

const Button = ({...props}) => (
    <button className={style[props.type]} onClick={props.action}></button>
)

class Fullscreen extends Component {

    static defaultProps = {
        active: false,
        action: () => {}
    }

    static propTypes = {
        active: PropTypes.bool,
        action: PropTypes.func
    }

    constructor (props) {
        super(props);
        this.state = {
            active: props.active
        }
        this.action = props.action.bind(this);
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.active !== this.state.active) {
            this.action(this.state.active)
        }
    }

    setFullscreen () {
        this.setState(prevState => ({active: !!!prevState.active}))
    }

    render () {
        let {props, state} = this
        return (
            <button className={style.fullscreen} onClick={this.setFullscreen.bind(this)}>
                <i className="material-icons">{state.active ? 'fullscreen_exit' : 'fullscreen'}</i>
            </button>
        )
    }
}

class TitleBar extends Component {

    static defaultProps = {
        actions: {
            close: () => {},
            fullscreen: (active) => {},
            max: () => {},
            min: () => {}
        },
        platform: os.platform(),
        title: 'Butter'
    }

    static propTypes = {
        actions: PropTypes.shape({
            close: PropTypes.func,
            fullscreen: PropTypes.func,
            min: PropTypes.func,
            max: PropTypes.func
        }),
        platform: PropTypes.string,
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    }

    constructor (props) {
        super();
    }

    getButtons () {
        let data = []
        let { props, state } = this
        const order = buttonOrder[props.platform];

        order.map((i,n) => {
            data[n] = {
                action: this.props.actions[i].bind(this),
                type: i
            }
        })

        return data;
    }

    render () {
        let {props, state} = this
        return (
            <nav className={Styles([style.titlebar, style[props.platform]])}>
                <div className={style.controls}>
                    {this.getButtons(props.platform).map((i,k) => <Button key={k} {...i}/>)}
                </div>
                <Fullscreen action={props.actions.fullscreen}/>
                <h1 className={style.title}>{props.title}</h1>
            </nav>
        )
    }
}

export default translate(['titlebar'], {wait: true, withRef: true})(TitleBar)
