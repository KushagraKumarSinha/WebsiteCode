import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import './App4.css'


function App4(){

    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);

    const [name, setName] = useState(""); // "Name" input from the User
    const [num, setNum] = useState(""); // "Mobile" input from the User
    const [email, setEmail] = useState(""); // "Email" input from the User
    const [message, setMessage] = useState(""); // "Message" input from the User

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleMobileChange = (event) => {
        setNum(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const handleAddingContact = async () => {
        const response = await axios.post("http://127.0.0.1:8000/AddContact", { // The POST request

            Name:name,
            Mobile:num,
            Email:email,
            Message:message
        });
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return(
        <div className='AllHolder'>
            <center><div className='SectionHeader' data-aos="zoom-in">CONTACT US</div></center>

            <div class="columns">
                <div class="column" data-aos="zoom-in">
                    <div className='ContactUsImage'><img src="https://www.sticsoftsolutions.com/images/contact-us.png" /></div>
                </div>





                <div class="column" data-aos="zoom-in">
                    <div className='columns'>
                        <div className='TabName'><div className='column'>Name:</div></div>
                    </div>

                    <div className='columns'>
                        <div className='column'><input className='TakingInput' onChange={handleNameChange}/></div>
                    </div>

                    <div className='columns'>
                        <div className='TabName'><div className='column'>Mobile:</div></div>
                    </div>

                    <div className='columns'>
                        <div className='column'><input className='TakingInput' onChange={handleMobileChange}/></div>
                    </div>

                    <div className='columns'>
                        <div className='TabName'><div className='column'>Email:</div></div>
                    </div>

                    <div className='columns'>
                        <div className='column'><input className='TakingInput' onChange={handleEmailChange}/></div>
                    </div>

                    <div className='columns'>
                        <div className='TabName' ><div className='column'>Message:</div></div>
                    </div>

                    <div className='columns'>
                        <div className='column'><input className='TakingInput' onChange={handleMessageChange}/></div>
                    </div>

                    <div className='columns'>
                        <div><button class="button is-danger is-large is-responsive is-rounded" onClick={handleAddingContact}>SUBMIT</button></div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default App4;