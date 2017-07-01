import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

class Switch extends Component {

    static defaultProps = {
        selected: false,
        apply: () => {}
    }

    constructor (props) {
        super()
        this.state = {
            selected: props.selected
        }
        this.apply = props.apply
    }

    onChange () {
        this.setState(prev => ({selected: !this.state.selected}))
        this.apply(this.state.selected)
    }

    render () {
        let {props, state} = this
        return (
            <label className={style.switch}>
                <input className={style['settings-checkbox']} checked={state.selected} type="checkbox" onChange={this.onChange.bind(this)}/>
                <div className={style.slider}></div>
            </label>
        )
    }
}

export default translate(['switch'], {wait: true, withRef: true})(Switch);
