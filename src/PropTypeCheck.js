import React from 'react';
import PropTypes from 'prop-types';

const PropTypeCheck = ({name, favoriteNumber, children}) => {
    return (
        <>
        <div className='react'>
            {name}, {children}
        </div>
        <div className='react'>
            my favoriteNumber : {favoriteNumber || 5}
        </div>
        </>
    );
};

PropTypeCheck.defaultProps = {
    name: 'defaultName'
};

PropTypeCheck.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default PropTypeCheck;