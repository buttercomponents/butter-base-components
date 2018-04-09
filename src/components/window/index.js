import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import View from '../view';
import TitleBar from '../title-bar';
import Navbar from '../navbar';
import style from './style.styl';

let Window = ({title, titlebar, bars, opacity = 0.5, ...props}) => (
    <div style={{
        backgroundColor: `rgba(var(--Window-bg), ${opacity})`,
        marginBottom: '150px'
    }}>
        <div className={style.windowOuter}>
            <TitleBar title={title} {...titlebar}/>
            {bars}
            <div className={style.windowInner}>
                <View>
                    {props.children}
                </View>
            </div>
        </div>
    </div>
)

Window.defaultProps = {
    titlebar: {
        platform: 'darwin',
        actions: {
            close: () => console.log("Close window..."),
            max: () => console.log("Maximize window..."),
            min: () => console.log("Minimize window..."),
            fullscreen: (active) => {
                console.log(`${active ? "Enter" : "Exit"} Fullscreen...`)
            }
        }
    },
    navbar: {
        toolbar: {
            search: false,
            buttons: [
                {title: "button-01", icon:"shuffle"},
                {title: "button-02", icon:"visibility", toogle: true},
                {title: "button-03", icon:"favorite",  active: true, update: true, toogle: true},
                {title: "button-04", icon:"settings"}
            ]
        }
    }
}

export {Window as default}
