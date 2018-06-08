import React from 'react'
import { translate } from 'react-i18next'
import style from './style.styl'

const Alert = ({t, message}) => (
  <div className={style['success']}>
    <span>{t(message)}</span>
    <i className='material-icons'>check</i>
  </div>
)

export default translate(['alert'])(Alert)
