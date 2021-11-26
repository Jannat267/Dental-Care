import React from 'react';
import about from '../../images/about.jpg'
const About = () => {
    return (
    <div className='container-fluid text-dark p-4 mb-4 row'>
         <h1 className='fs-1 m-4 text-dark text-center'><span className='text-info'>Welcome</span> to Dental Care</h1>
        <div className='col-md-6 col-sm-12'>
           <div className='p-4 rounded border fs-4'>
               <h2 className='text-center fw-bold'>Our Story</h2>
               <p >
               This is the top leading site of Bangladesh from last few years where you can take dental services.Top Dentists of Bangladesh give services to our patients.Also they are very friendly and helpful to you. We have also some achievements...
               </p>
               <ul className='fw-bolder list'><li>Best quality equipments</li>
               <li>National Award </li>
               <li>Top rated doctors</li>
               <li>Thousands of reviews</li>
               <li>Free Instruments on offline course</li>
               </ul>
             </div>
            </div>
        <div className='col-md-6 col-sm-12'>
            <img className='img-fluid' src={about} alt=''/>
        </div>
    </div>
       
    );
};

export default About;