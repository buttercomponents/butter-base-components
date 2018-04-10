import React from 'react';
import PropTypes from 'prop-types';
import style from './style.styl';

function getScore(count, max=5) {
    const top =  count <= 10 ? 10 : 100;
    return (max * count) / top;
}

class Stars extends React.Component {

   static propTypes = {
        rating: PropTypes.number.isRequired,
        max: PropTypes.number,
    }

    static defaultProps = {
        rating: 0,
        max: 5,
    }

    constructor(props) {
        super(props)
        const { rating, max } = this.props;
        this.state = {
             score: getScore(rating, max)
         }
    }

    getStars() {
        const stars = [];
        const { score } = this.state;
        const { max } = this.props;
        const hasHalfStar = score % 1 >= 0.5;
        const truncScore = Math.trunc(score);
        const emptyStars = max - truncScore - ( hasHalfStar ? 1 : 0 );

        for (let i = 0; i < truncScore; i += 1) {
            stars.push(<i key={`full-${i}`} className={`material-icons ${style.starFull}`}>star</i>)
        }

        hasHalfStar && stars.push(<i key={'half-star-${score}'} className={`material-icons ${style.starFull}`}>star_half</i>)

        for (let i = 0; i < emptyStars; i += 1) {
            stars.push(<i key={`empty-${i}`} className={`material-icons ${style.starEmpty}`}>star_border</i>)
        }

        return stars
    }

    render() {
        const { score } = this.state;
        const { rating, max } = this.props;

        return (
            <div className={`${style.stars}`} title={`${score} / ${max}`}>
                {this.getStars(rating, max)}
            </div>
        )
    }
}

export {Stars as default}
