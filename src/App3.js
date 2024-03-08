import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './App3.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import DisplayCardComp from './DisplayCardComp'
import Button from 'react-bootstrap/Button';
import { CardGroup } from 'react-bootstrap';




function App3(){

    const [info, setInfo] = useState(""); // This holds the product information
    const [show1, setShow1] = useState(false); // Controls hiding and showing product description
    const [show2, setShow2] = useState(false); // Controls hiding and showing product description
    const [show3, setShow3] = useState(false); // Controls hiding and showing product description
    const [show4, setShow4] = useState(false); // Controls hiding and showing product description
    const [show5, setShow5] = useState(false); // Controls hiding and showing product description
    const [show6, setShow6] = useState(false); // Controls hiding and showing product description

    const handlePointofSale = () => {
        if (show1===true)
        {
            setShow1(false);
        }
        else{
            setShow1(true);
        }
        setInfo("Our POS software simplifies the sales process, allowing you to handle transactions swiftly and efficiently. Whether you run a retail store, restaurant, or salon, our software empowers you to process payments, generate receipts, and manage refunds effortlessly. Say goodbye to manual calculations and human errors – our intelligent system ensures accurate and seamless transactions every time.");
    }

    const handleInventoryCountingSystem = () => {
        if (show2===true)
        {
            setShow2(false);
        }
        else{
            setShow2(true);
        }
        setInfo("Maintaining accurate stock levels is crucial for efficient operations. Our software empowers you to set reorder points, automatically generate purchase orders, and receive alerts when stock reaches critical levels. With streamlined stock control, you can prevent stockouts, avoid overstocking, and optimize your inventory investment. Stay in control of your inventory at all times and keep your customers satisfied.");
    }

    const handleNetPromoterScore = () => {
        if (show3===true)
        {
            setShow3(false);
        }
        else{
            setShow3(true);
        }
        setInfo("Gather customer feedback and opinions in real-time with our NPS software. Whether you choose to implement surveys via email, SMS, or on your website, our software makes it easy to collect feedback from your customers at various touchpoints along their journey. By capturing insights at the right moment, you can proactively address issues, improve customer experiences, and strengthen customer relationships.");
    }

    const handleInventoryManagementSystem = () => {
        if (show4===true)
        {
            setShow4(false);
        }
        else{
            setShow4(true);
        }
        setInfo("Maintaining optimal stock levels is crucial for efficient operations. Our software enables you to set reorder points, automatically generate purchase orders, and receive alerts when stock reaches critical levels. With real-time stock control, you can prevent stockouts and avoid tying up capital in excessive inventory. Optimize your inventory investment and ensure that you always have the right products on hand.");
    }

    const handleBusinessIntelligenceSolutions = () => {
        if (show5===true)
        {
            setShow5(false);
        }
        else{
            setShow5(true);
        }
        setInfo("Our Business Intelligence Solutions software combines advanced analytics capabilities with intuitive visualizations to enable you to make sense of complex data sets. Uncover patterns, identify correlations, and gain deep insights into your business performance. From sales trends and customer behavior to operational efficiency and financial analysis, our software empowers you to unlock the hidden potential of your data.");
    }

    const handleEcommerceWebsite = () => {
        if (show6===true)
        {
            setShow6(false);
        }
        else{
            setShow6(true);
        }
        setInfo("Effortlessly manage your product catalog with our Ecommerce Website software. Add, edit, and organize your products with ease. Showcase product images, descriptions, pricing, and variations to provide shoppers with comprehensive information. Set inventory levels, track stock, and receive low-stock notifications to ensure a seamless shopping experience for your customers.");
    }

    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);


    return(
        <div>

            <div className='AllHolder'>
                <div className='SectionHeader' data-aos="zoom-in"><center><div>OUR SERVICES</div></center></div>
                <div className='AllCards'>
                    <center>
                        <Container>
                            <Row>
                                <Col><div className='OurServicesHolder' data-aos="fade-right"><DisplayCardComp des={"IT CONSULTING"} img={"https://img.freepik.com/free-vector/tiny-programmers-big-laptop-writing-script-coders-app-developers-with-computers-flat-vector-illustration-programming-engineering-software-development-concept-banner-landing-web-page_74855-25360.jpg?size=626&ext=jpg&ga=GA1.1.1580316561.1687259541&semt=ais"}/></div></Col>
                                <Col><div className='OurServicesHolder' data-aos="fade-left"><DisplayCardComp des={"SOFTWARE DEVELOPMENT"} img={"https://img.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_74855-10168.jpg?size=626&ext=jpg&ga=GA1.1.1580316561.1687259541&semt=ais"}/></div></Col>
                            </Row>
                            <Row>
                                <Col><div className='OurServicesHolder' data-aos="fade-right"><DisplayCardComp des={"MOBILE APP DEVELOPMENT"} img={"https://img.freepik.com/premium-vector/software-engineer-sit-chair-working-laptop-use-programming-language-code-with-flat-cartoon-style_197170-392.jpg?size=626&ext=jpg&ga=GA1.1.1580316561.1687259541&semt=ais"}/></div></Col>
                                <Col><div className='OurServicesHolder' data-aos="fade-left"><DisplayCardComp des={"WEB APP DEVELOPMENT"} img={"https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?size=626&ext=jpg&ga=GA1.1.1580316561.1687259541&semt=ais"}/></div></Col>
                            </Row>
                        </Container>
                    </center>
                </div>

                <div className='SectionHeader' data-aos="zoom-in"><center><div>OUR PRODUCTS</div></center></div>

                <center>
                <div>
                    <CardGroup>
                    <div className='ProductHolder' data-aos="flip-up">
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div className='ProTitle'>POINT OF SALE</div>
                                    <div className='ProDes'>Empowering sales efficiency: Say goodbye to errors, welcome seamless transactions!</div>
                                    {show1? <div className='ProInfo'>Our POS software simplifies the sales process, allowing you to handle transactions swiftly and efficiently. Whether you run a retail store, restaurant, or salon, our software empowers you to process payments, generate receipts, and manage refunds effortlessly. Say goodbye to manual calculations and human errors – our intelligent system ensures accurate and seamless transactions every time.</div>: null}
                                </Card.Text>
                                <Button onClick={handlePointofSale}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='ProductHolder' data-aos="flip-up">
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div className='ProTitle'>INVENTORY SYSTEM</div>
                                    <div className='ProDes'>Optimize stock control, prevent stockouts, and satisfy customers effortlessly!</div>
                                    {show2? <div className='ProInfo'>Maintaining accurate stock levels is crucial for efficient operations. Our software empowers you to set reorder points, automatically generate purchase orders, and receive alerts when stock reaches critical levels. With streamlined stock control, you can prevent stockouts, avoid overstocking, and optimize your inventory investment. Stay in control of your inventory at all times and keep your customers satisfied.</div>: null}
                                </Card.Text>
                                <Button onClick={handleInventoryCountingSystem}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='ProductHolder' data-aos="flip-up">
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div className='ProTitle'>NET PROMOTER SCORE</div>
                                    <div className='ProDes'>Real-time feedback collection: Strengthen relationships and enhance experiences!</div>
                                    {show3? <div className='ProInfo'>Gather customer feedback and opinions in real-time with our NPS software. Whether you choose to implement surveys via email, SMS, or on your website, our software makes it easy to collect feedback from your customers at various touchpoints along their journey. By capturing insights at the right moment, you can proactively address issues, improve customer experiences, and strengthen customer relationships.</div>: null}
                                </Card.Text>
                                <Button onClick={handleNetPromoterScore}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    </CardGroup>
                </div>

                <div>
                    <CardGroup>
                    <div className='ProductHolder' data-aos="flip-up">
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div className='ProTitle'>INVENTORY MANAGEMENT SYSTEM</div>
                                    <div className='ProDes'>Streamlined stock control: Prevent stockouts, optimize inventory, boost efficiency!</div>
                                    {show4? <div className='ProInfo'>Maintaining optimal stock levels is crucial for efficient operations. Our software enables you to set reorder points, automatically generate purchase orders, and receive alerts when stock reaches critical levels. With real-time stock control, you can prevent stockouts and avoid tying up capital in excessive inventory. Optimize your inventory investment and ensure that you always have the right products on hand.</div>: null}
                                </Card.Text>
                                <Button onClick={handleInventoryManagementSystem}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='ProductHolder' data-aos="flip-up">
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div className='ProTitle'>BUSINESS INTELLIGENCE SOLUTIONS</div>
                                    <div className='ProDes'>Unleash data insights: Empower decision-making with advanced analytics!</div>
                                    {show5? <div className='ProInfo'>Our Business Intelligence Solutions software combines advanced analytics capabilities with intuitive visualizations to enable you to make sense of complex data sets. Uncover patterns, identify correlations, and gain deep insights into your business performance. From sales trends and customer behavior to operational efficiency and financial analysis, our software empowers you to unlock the hidden potential of your data.</div>: null}
                                </Card.Text>
                                <Button onClick={handleBusinessIntelligenceSolutions}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='ProductHolder' data-aos="flip-up">
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div className='ProTitle'>CUSTOM ECOMMERCE WEBSITE</div>
                                    <div className='ProDes'>Seamless product management: Organize, showcase, and ensure customer satisfaction!</div>
                                    {show6? <div className='ProInfo'>Effortlessly manage your product catalog with our Ecommerce Website software. Add, edit, and organize your products with ease. Showcase product images, descriptions, pricing, and variations to provide shoppers with comprehensive information. Set inventory levels, track stock, and receive low-stock notifications to ensure a seamless shopping experience for your customers.</div>: null}
                                </Card.Text>
                                <Button onClick={handleEcommerceWebsite}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    </CardGroup>
                </div>
                </center>

            </div>
        </div>  
    )
}

export default App3;