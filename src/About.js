import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'



function About(){
    return(
        <div>
            <div className='ImgHol'><center><img src="https://snappassociates.com/wp-content/uploads/2022/08/Snapp.August.BackInOffice.2022-scaled-thegem-blog-default.jpg"/></center></div>

            <div>
                <div className='Text1'>Welcome to VanityKart Tech, a leading technology company dedicated to crafting innovative software solutions for businesses.</div>
                <div className='Text1'>Here, we believe that technology has the power to transform businesses and drive them towards success. With a team of highly skilled professionals, we are passionate about leveraging our expertise to build cutting-edge software that addresses your unique challenges and propels your growth.</div>
                <div className='Text2'>OUR APPROACH:</div>
                <div className='Text1'>We take a collaborative approach to every project, working closely with our clients to understand their goals, requirements, and industry landscape. By gaining deep insights into your business, we ensure that our solutions are tailored precisely to your needs.</div>
            </div>
        </div>
    )
}

export default About;