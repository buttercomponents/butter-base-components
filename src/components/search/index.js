import React, { Component } from 'react'
import { translate } from 'react-i18next'
import style from './style.styl'

const Search = ({action}) => (
  <div id='search' className={style.search}>
    <input type='text' onChange={(e) => action(e.target.value)}
      className={style.input} placeholder='Search...' />
    <i className='material-icons'>search</i>
  </div>
)

export default translate(['search'])(Search)
