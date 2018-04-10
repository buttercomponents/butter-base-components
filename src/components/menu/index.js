import React from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

let MenuItem = ({title, active}) => (
    <li className={active ? style.active : null}><a href="#">{title}</a></li>
)

let Menu = ({items, active}) => (
    <nav className={style['app-menu']}>
        <ul>
            {items.map((i, k) => (
                <MenuItem key={k} active={active === k} {...i} />
            ))}
        </ul>
        <i className={style['active-marker']}></i>
    </nav>
)

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    selected: PropTypes.number
}

Menu.defaultProps = {
    active: 1,
}

export {Menu as default}
