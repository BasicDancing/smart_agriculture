import './App.scss';
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Home from './components/home/Home';
import Calculator from './components/calculator/Calculator';
import Dashboard from './components/dashboard/Dashboard';
import Configuration from './components/configuration/Configuration';
import Weather from './components/weather/Weather';
import Calendar from './components/calender/Calender';
import Register from './login/Register';
import Login from './login/Login';
import Welcome from './pages/Welocme';
import { useState } from 'react';
import CropConfigure from './components/configuration/CropConfigure';
import CropCategoryConfigure from './components/configuration/CropCategoryConfigure';
import DivisionConfigure from './components/configuration/DivisionConfigure';
import DistrictConfigure from './components/configuration/DistrictConfigure';
import FertilizerConfigure from './components/configuration/FertilizerConfigure';
import PostConfigure from './components/configuration/PostConfigure';
import CropZillaFertilizerConfigure from './components/configuration/CropZillaFertilizerConfigure';

function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/calculator' element={<Calculator />} />
                    <Route path='/configuration' element={<Configuration />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/weather' element={<Weather />} />
                    <Route path='/user' element={<Login />} />
                    <Route path='/order' element={<Blank />} />
                    <Route path='/register' element={<Register />} />

                    <Route path='/crop_category' element={<CropCategoryConfigure />} />
                    <Route path='/crop' element={<CropConfigure />} />
                    <Route path='/division' element={<DivisionConfigure />} />
                    <Route path='/district' element={<DistrictConfigure />} />
                    <Route path='/fertilizer' element={<FertilizerConfigure />} />
                    <Route path='/post' element={<PostConfigure />} />
                    <Route path='/zilla_crop_fertilizer' element={<CropZillaFertilizerConfigure />} />

                    {/* <Route path="/welcome" element={<Welcome email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                    <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
