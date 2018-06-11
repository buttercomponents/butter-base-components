import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import View from '../view'
import TitleBar from '../title-bar'
import Navbar from '../navbar'
import style from './style.styl'

class Window extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fullscreen: props.fullscreen
    }
  }

  setFullscreen () {
    this.setState(prevState => {
      const {actions} = this.props
      const fullscreen = !prevState.fullscreen
      actions.fullscreen(fullscreen)
      return {fullscreen}
    })
  }

  render () {
    const {title, titlebar, bars, ...props} = this.props
    const {fullscreen} = this.state

    const actions = {
      ...this.props.actions,
      fullscreen: this.setFullscreen.bind(this)
    }

    return (
        <div className={style.windowOuter}>
            <TitleBar title={title} actions={actions} fullscreen={fullscreen} {...titlebar} />
            {bars}
            <div className={style.windowInner} style={{
                height: fullscreen ? '100%' : 'calc(100% - var(--Window-handler-height))'
            }}>
                {props.children}
            </div>
        </div>
    )
  }
}

Window.defaultProps = {
  fullscreen: false
}

Window.propTypes = {
  fullscreen: PropTypes.bool
}

const DemoWindow = ({opacity = 0.5, ...props}) => (
  <div className={style.demoWindow} style={{
    backgroundColor: `rgba(var(--Window-bg), ${opacity})`,
    marginBottom: '150px'
  }}>
    <Window {...props} />
  </div>
)

Window.defaultProps = {
  titlebar: {
    platform: 'darwin'
  },
  actions: {
    close: () => console.log('Close window...'),
    max: () => console.log('Maximize window...'),
    min: () => console.log('Minimize window...'),
    fullscreen: (active) => {
      console.log(`${active ? 'Enter' : 'Exit'} Fullscreen...`)
    }
  },
  navbar: {
    toolbar: {
      search: false,
      buttons: [
        {title: 'button-01', icon: 'shuffle'},
        {title: 'button-02', icon: 'visibility', toogle: true},
        {title: 'button-03', icon: 'favorite', active: true, update: true, toogle: true},
        {title: 'button-04', icon: 'settings'}
      ]
    }
  }
}

export {Window as default, DemoWindow}
