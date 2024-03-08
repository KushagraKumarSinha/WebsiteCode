import "./App2.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import DisplayCardComp from './DisplayCardComp';
import ImplementationProcess from './images/ImplementationProcess.jpg'
import pic from './images/pic.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function App2(){

    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);

    return(
        <div>

            <div className="AllHolder">
                <div className='SectionHeader' data-aos="zoom-in"><center><div>ABOUT US</div></center></div>
                <div data-aos="fade-up"><About /></div>
            </div>
        </div>
    )
}


export default App2;