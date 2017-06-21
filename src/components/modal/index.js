import React, { Component } from 'react';
import { translate } from 'react-i18next';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
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
            <CSSTransitionGroup
                transitionName="popup"
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}>
                {show?<Modal {...props}/>:null}
            </CSSTransitionGroup>
        )
    }
}

let Modals = {
    Modal: translate(['modal'], {wait: true, withRef: true})(Modal),
    ButterModal: translate(['butter-modal'], {wait: true, withRef: true})(ButterModal)
}

export {Modals}
