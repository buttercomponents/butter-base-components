import React, { Component } from 'react';
import { translate } from 'react-i18next';
import {TransitionGroup, CCSTransition} from 'react-transition-group'
import style from './style.styl';

let Modal = ({position, action, children}) => (
    <div className={style.modal} data-position={position} key={0}>
        <div className={style.widget}>
            {children}
        </div>
        <div className={style.overlay} onClick={action.apply}></div>
    </div>
)

class ButterModal extends Component {
    render () {
        let {show, ...props} = this.props
        return (
            <TransitionGroup>
                <CSSTransition key={1} className="popup" timeout={{ enter: 500, exit: 300}}>
                    {show && <Modal {...props}/>}
                </CSSTransition>
            </TransitionGroup>
        )
    }
}

export default translate(['modal'], {wait: true, withRef: true})(ButterModal);
