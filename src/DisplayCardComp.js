import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DisplayCardComp.css'



function DisplayCardComp({des, img}){
    return(
        <div className='CardCompHolder'>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><div className='DesHolder'>{des}</div></Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DisplayCardComp;