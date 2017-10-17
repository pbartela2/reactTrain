import React from 'react';
import PropTypes from 'prop-types';

const MainScene = props => {
    return (
        <div className={props.className}>
            { props.children }
        </div>
    )
}

MainScene.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string.isRequired
}

export default MainScene;
