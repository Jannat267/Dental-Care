import React from 'react';
import notfound from '../../images/404.jpg'
// notfound component
const Notfound = () => {
    return (
        <div className='text-center'>
            {/* 404 image  */}
            <img src={notfound} alt='' className='img-fluid w-50' height='auto' 
            />
            <h1> Page Not Found</h1>
        </div>
    );
};

export default Notfound;