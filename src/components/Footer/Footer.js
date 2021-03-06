import React from 'react';


const Footer = () => {
    return (
       <footer className='mt-auto'>
            <div className='bg-dark text-white mt-5 col-md-12 col-sm-12'>
            <div className='text-center mt-5'>
               
                <h2>Dental<span className='text-info'>Care</span></h2>
            </div>
            <div className='text-center'> 
            <div className='fs-2'>
            <i className="fas fa-map-marker-alt p-2"></i> 
            <i className="fas fa-envelope-open-text p-2"></i>
            <i className="fab fa-facebook-square p-2"></i>
            <i className="fas fa-phone-square-alt p-2"></i>
            </div>
            <p>Copyright 2021 © Dental Care . Designed by  Rupa</p>
            </div>
        </div>
       </footer>
    );
};

export default Footer;