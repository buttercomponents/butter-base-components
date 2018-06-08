import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import style from './style.styl'

const View = ({children}) => (
  <div className={style.view} ref={node => node && node.addEventListener('scroll', e => console.log('scroll outter', e))}>
    <div className={style.content} ref={node => node && node.addEventListener('scroll', e => console.log('scroll inner', e))}>
      {children}
    </div>
  </div>
)

View.propTypes = {
  navbar: PropTypes.object
}

export {View as default}
