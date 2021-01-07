import React from 'react'
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck, faCreditCard } from '@fortawesome/free-regular-svg-icons'
import Footer from './Footer';
import '../styles/style.css';
 
const HomePage = () => {
    return (
        <>
            <Navbar/>
            {/* INstructor section */}
            <div className='instructor flex-columns bg-secondary'>
                <div className='row'>
                <div className='column'>
                    <div className='column-1'>
                        <img src='https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Favorite+Workouts/woman+with+personal+trainer-carousel.jpg' alt='personal trainer'/>
                    </div>
                    </div>
                    <div className='column'>
                        <div className='column-2'>
                            <h2>Instructors</h2>
                            <p>lorem aisjd asdwe aksfen ajsdnwei wjs fijwefw ejdnwiuebfsj dwienrwein dkas iqjwndojqsn diwje fiqew doiuwehjas dwe fiuqowjd wdvi3uenfojw diuqnqwrounqefb aiusbfqj dwe f</p>
                            <a href='#' className='btn-primary'><FontAwesomeIcon icon={faChevronRight} className='i'/>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Icons */}
            <div className='features' >
                <div className='icon bg-light'>
                    <FontAwesomeIcon icon={faCalendarCheck} className='ice'/>
                    <h2>On Your Schedule</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                </div>
                <div className='icon bg-secondary'>
                    <FontAwesomeIcon icon={faSearchLocation} className='ice'/>
                    <h2>Location of Choice</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                </div>
                <div className='icon bg-light'>
                    <FontAwesomeIcon icon={faCreditCard}  className='ice'/>
                    <h2>Easy Payment</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                </div>
            </div>

            <div className='instructor flex-columns bg-primary'>
                <div className='row'>
                    <div className='column'>
                        <div className='column-2'>
                            <h2 className='client'>Clients</h2>
                            <p>lorem aisjd asdwe aksfen ajsdnwei wjs fijwefw ejdnwiuebfsj dwienrwein dkas iqjwndojqsn diwje fiqew doiuwehjas dwe fiuqowjd wdvi3uenfojw diuqnqwrounqefb aiusbfqj dwe f</p>
                            <a href='#' className='btn-white'><FontAwesomeIcon icon={faChevronRight} className='i'/>Read More</a>
                        </div>
                    </div>
                    <div className='column'>
                    <div className='column-1'>
                        <img src='https://www.wellandgood.com/wp-content/uploads/2019/10/GettyImages-1132086660.jpg' alt='personal trainer'/>
                    </div>
                 </div>
                </div>
            </div>
            <div className='Testimonials'>
                <div className='innerT'>
                <h2>Read Our Testimonials</h2>
                <p>lorem aisjd asdwe aksfen ajsdnwei wjs fijwefw ejdnwiuebfsj dwienrwein dkas iqjwndojqsn diwje fiqew doiuwehjas dwe fiuqowjd wdvi3uenfojw diuqnqwrounqefb aiusbfqj dwe f</p>
                <a href='#' className='btn-primary it'><FontAwesomeIcon icon={faChevronRight} className='it'/>Testimonials</a>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default HomePage
