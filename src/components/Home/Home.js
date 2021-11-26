import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import banner from '../../images/banner.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';


const Home = () => {
    // using hook to take data
    const [services] = useServices();
    console.log(services);
    
    return (
        <div className=' mt-2'>
            {/* slider */}
             <div className='col-md-12 col-sm-12'>
             <div id="carouselExampleCaptions" className="carousel slide container-fluid banner" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={banner} alt="..." className="d-block w-100" />
                <div className="carousel-caption d-none d-md-block">
                    <h1 className='fs-1 tex-dark'>Welcome to Dental Care</h1>
                    <p className='fs-3 tex-dark'>Your safety is our resposibility.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={banner2}className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>We have the world class equipments</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={banner3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Top rated dentist are available here</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
            </div></div>
{/* Services setion */}
       <div className='container my-5'>
           <h2 className='fs-1 text-center fw-bold my-5'>Our <span className='text-danger'>Services</span></h2>
       <div className='row row-cols-1 row-cols-md-3 g-4'>
        {
            // fetch data and send data to the component
            services.map(service => <Service key={service.key} service={service}> </Service>)
        }
        </div>
       </div>
{/* faq section */}
       <section className="container my-5">
            <div className="d-flex justify-content-center">
                <h2 className="fw-bold fs-1 my-5">Frequently Asked<span className="text-danger"> Questions</span></h2>
            </div>
            <div className="row fs-4">
                <div className="faq  col-md-12 col-sm-12">
                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header  p-2" id="headingOne">
                                <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   Are you provide service through online?
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes. We are providing online services in some case.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                   When we are Open?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>We are 24/7 open for you to give the best services</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                   How can I Identify If my teeth has any problem?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Mouth sores<br/>
                                        Jaw pain<br/>
                                        Redness<br/>
                                        Swollen face or gums<br/>
                                        Tooth sensitivity<br/>
                                        Broken teeth<br/>
                                        Dry mouth<br/>
                                        Bleeding gums<br/>
                                        Bad breath or a bad taste in your mouth <br/>
                                        This are the most commont symptomps of problemetic teeth</strong> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        {/* address details */}
        <div className="my-5 container text-center">
                <h2 className="fw-bold text-center fs-1"> Our Shop <span className='text-danger'>Address</span></h2><br/>
                    <p>32/1 abc Narayanganj</p>
                    <div className="w-100 mx-auto">
                <iframe className="map" title='address' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58487.29069411582!2d90.4651421402569!3d23.623847109726785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755b0fb41e8c247%3A0xa02713a8af496e98!2sNarayanganj%20Sadar%20Upazila%2C%20Bangladesh!3m2!1d23.6237724!2d90.5001616!5e0!3m2!1sen!2sus!4v1625572409166!5m2!1sen!2sus"
                    width="100%" height="560" allowFullScreen="" loading="lazy"></iframe>
            </div>
            </div>
    </div>
    
    );
};

export default Home;