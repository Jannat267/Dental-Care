import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Appointment from '../Appointment/Appointment';
import Service from '../Service/Service';

const More = () => {
    const {key} = useParams();
    const [services]=useServices();
    const appoint=services.find(appointment=>appointment.key==key);
    console.log(appoint);
 
    // const {name,details,img,price}=appoint;
    
    return (
        <div>
        <div className="container my-5 col-md-6 col-sm-12">
          <div className="card h-100 box-shadow hvr-float-shadow p-4">
                    <div className="d-flex justify-content-center">
                    <img src={appoint?.img} className="card-img-top img-fluid w-50" alt="..."/>
                    </div>
                    <div className="card-body text-center">
                        <h3 className="card-title">{appoint?.name}</h3>
                        <small className="card-text">{appoint?.details}</small>
                        <h5 className="mt-2">{appoint?.price}</h5>
                        <button className="btn btn-danger rounded-pill my-3 px-4">Book 
			</button>
                    </div>
                    </div>
                    <p className='text-center fs-1 py-2'>Want a <Link to="/home">different service?</Link> </p>
        </div>
    </div>
    );
};

export default More;