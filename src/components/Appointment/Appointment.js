import React from 'react';

// service componant for each service
const Appointment = ({appoint}) => {
    console.log("appoint")
    const {name,details,img,fee} =appoint;
    
    
  return (
    <div className='col'>
             <div className="service card shadow p-4 rounded">
             {/* all data  */}
            <div className='text-center' >
                <img src={img} alt="" className='card-img-top img-fluid w-50 ' />
            </div>
            <div className='card-body p-2'>
                <h4 className="class-name card-title">{name}</h4>
                <p className='' >{details}</p>
                <p className='' >Service Charge : <span className='fs-3 fw-bold'>$ {fee}</span></p>
                {/* private route button */}
                <button className='btn btn-primary px-5 rounded-pill'>Appointment</button>
            </div>
        </div>
      </div>
      
  );
};

export default Appointment;