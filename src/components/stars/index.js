import React from 'react';
import PropTypes from 'prop-types';
import style from './style.styl';

function makeStars(count, max=5) {
    let ret = []
    let i = 0

    for (i = 0; i < count; i += 1) {
        ret.push(<i key={i} className={`material-icons ${style.starFull}`}>star</i>)
    }

    for (; i < max; i += 1) {
        ret.push(<i key={i} className={`material-icons ${style.starEmpty}`}>star</i>)
    }

    return ret
}

let Stars = ({rating}) => (
    <div className={`${style.stars}`}>
        {makeStars(rating)}
    </div>
)

Stars.propTypes = {
    rating: PropTypes.number.isRequired
}

export {Stars as default}
