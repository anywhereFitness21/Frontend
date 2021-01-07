import React from 'react'
import { useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import '../styles/style.css';
import '../styles/utilities.css'


const Navbar = () => {

    const { push } = useHistory();

    const onScroll = (e) => {

        const navbar = e.target.name
        console.log(navbar)

        if(this.oldScroll > this.scrollY) {
            if(window.pageYOffset === 0)
             navbar.classList.add('top');
              navbar.style.transform = 'translateY(0px)'

         } else {
             
                 navbar.classList.remove('top');
                 navbar.style.transform = 'translateY(-70px)'

         }
      
         this.oldScroll = this.scrollY;
        
    }

    return (

        <header id='hero'>
            <div onScroll={onScroll} className='navbar top'>
                <div className='logo'>
                        <h1 className='logo'><span className='logoSpan'><FontAwesomeIcon icon={faDumbbell} className='i'/>Anywhere</span> Fitness</h1> 
                    </div>
                    <nav>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a onClick={ () => push('/login') } >Login</a></li> 
                            <li><a onClick={ () => push('/SignUp') }>Sign Up</a></li>
                        </ul>
                    </nav>
            </div>
            <div className='content'>
                <h1>Anywhere Fitness</h1>
                <p>HOST OR ATTEND FITNESS CLASSES FROM ANYWHERE</p>
                <a href='' className='btn-primary'><FontAwesomeIcon icon={faChevronRight} className='i'/>Read More</a>
            </div>
        </header>

    )
}

export default Navbar
