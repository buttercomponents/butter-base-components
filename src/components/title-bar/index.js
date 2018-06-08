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

class TitleBar extends Component {

    static defaultProps = {
        actions: {
            close: () => {},
            fullscreen: () => {},
            max: () => {},
            min: () => {}
        },
        fullscreen: false,
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
        fullscreen: PropTypes.bool.isRequired,
        platform: PropTypes.string,
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
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

        const {actions, platform, fullscreen, title} = this.props

        return (
            <nav className={Styles([
                    style.titlebar,
                    style[platform],
                    fullscreen ? style.shrink : null
            ])}>
                <div className={style.controls}>
                    {this.getButtons(platform).map((i, k) => <Button key={k} {...i}/>)}
                </div>
                <button className={style.fullscreen} onClick={actions.fullscreen}>
                    <i className="material-icons">{fullscreen ? 'fullscreen_exit' : 'fullscreen'}</i>
                </button>
                <h1 className={style.title}>{title}</h1>
            </nav>
        )
    }
}

export default translate(['titlebar'])(TitleBar)
