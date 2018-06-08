import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import Toolbar from '../toolbar'
import style from './style.styl'

const Identity = (a) => (a)

const GoBackButton = ({action = Identity, title}) => (
  <a className={style.backButton} onClick={action}>
    <i className='material-icons'>arrow_back</i>
    {title ? <span>{title}</span> : null}
  </a>
)

GoBackButton.propTypes = {
  action: PropTypes.func.isRequired
}

GoBackButton.defaultProps = {
  title: 'back'
}

const OneChildNavbar = ({children, type, show}) => (
  <nav id='navbar' className={`${style.navbar} ${type || ''}`} show={show ? 'true' : 'false'}>
    {children}
  </nav>
)

const ComplexNavbar = ({goBack, title, right, children, left}) => [
  <div className={style.menu} role='navbar-left' key='left'>
    {goBack && <GoBackButton {...goBack} />}
    {left}
    {title && <h1 className={style.title}>{title}</h1>}
  </div>,
  children ? <div key='center' role='navbar-center'>{children}</div> : null,
  (children || right) ? <div key='right' role='navbar-right'>{right}</div> : null
]

const Navbar = ({goBack, title, right, children, left, type, show}) => {
  const complexProps = {goBack, title, right, children, left}

  return (
    <nav id='navbar'
      className={`${style.navbar} ${type || ''}`}
      visible={show ? 'true' : 'false'}>
      {(goBack || title || right || left)
        ? <ComplexNavbar {...complexProps} />
        : children}
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.object
}

const Translated = translate(['navbar'])(Navbar)

export {
  Translated as default,
  GoBackButton
}
