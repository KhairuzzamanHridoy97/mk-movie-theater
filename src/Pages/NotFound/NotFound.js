import React from 'react';
import notFound from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} className="img-fluid" alt="" />
        </div>
    );
};

export default NotFound;