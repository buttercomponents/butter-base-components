import React from 'react';
import PropTypes from 'prop-types';
import style from './style.styl';

function makeStars(count, max=5) {
    let ret = []
    const top =  count <= 10 ? 10 : 100;
    const score = (max * count) / top;
    const hasHalfStar = score % 1 >= 0.5;
    const truncScore = Math.trunc(score);
    const emptyStars = max - truncScore - ( hasHalfStar ? 1 : 0 );

    for (let i = 0; i < truncScore; i += 1) {
        ret.push(<i key={`full-${i}`} className={`material-icons ${style.starFull}`}>star</i>)
    }

    hasHalfStar && ret.push(<i key={'half-star-${score}'} className={`material-icons ${style.starFull}`}>star_half</i>)

    for (let i = 0; i < emptyStars; i += 1) {
        ret.push(<i key={`empty-${i}`} className={`material-icons ${style.starFull}`}>star_border</i>)
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

Stars.defaultProps = {
    rating: 0
}

export {Stars as default}
