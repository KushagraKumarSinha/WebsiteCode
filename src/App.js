import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


 
function App(){

    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);

    return(
        <div className='HomeScreen'>
            <div className='MainContainer'>
                <div className='PhraseDisplay' data-aos="zoom-in-up">Transforming Ideas into Powerful Software Solutions for Your Business Success</div>
            </div>

            
            <div className='DescriptionHolder' data-aos="zoom-in-up">Transforming industries through advanced software engineering, we help businesses unleash their complete potential with our tailor-made, future-proof software solutions. Embrace innovation, enhance productivity, and maintain a competitive edge with our technology-driven services. Together, let's embark on a customized digital transformation journey for your business success and market leadership</div>
            
        </div>
    )
}

export default App;