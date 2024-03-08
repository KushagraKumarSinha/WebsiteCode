import {Route, Routes} from "react-router-dom"
import NavBar from "./NavBar"
import App from "./App"
import App2 from "./App2"
import App3 from "./App3"
import App4 from "./App4"
import Button from 'react-bootstrap/Button';


function MainPage(){
    return(
        <div>
            <NavBar />

            <div>
                <Routes>
                    <Route index element={<App/>} />
                    <Route path="/App" element={<App/>} />
                    <Route path="/App2" element={<App2/>} />
                    <Route path="/App3" element={<App3/>} />
                    <Route path="/App4" element={<App4/>} />
                </Routes>
            </div>

        </div>
    )
}

export default MainPage