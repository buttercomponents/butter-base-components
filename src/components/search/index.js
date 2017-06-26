import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

const Styles = (a) => a.filter(b => !!b).join(' ');

class Search extends Component {
    constructor (props) {
        super()
        this.state = {}
        this.apply = props.apply || function () {}
    }

    onChange () {
        //this.setState({...})
    }

    render () {
        let {props, state} = this
        return (
            <div id="search" className={style.search}>
                <input type="text" placeholder="Search..."/>
                <i className="material-icons">search</i>
            </div>
        )
    }
}


export default translate(['search'], {wait: true, withRef: true})(Search);
