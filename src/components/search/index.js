import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

class Search extends Component {

    constructor (props) {
        super()
        this.state = {}
    }

    render () {
        let {props, state} = this
        return (
            <div id="search" className={style.search}>
                <input type="text" className={style.input} placeholder="Search..."/>
                <i className="material-icons">search</i>
            </div>
        )
    }

}


export default translate(['search'], {wait: true, withRef: true})(Search);
