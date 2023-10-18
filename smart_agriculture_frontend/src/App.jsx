import './App.scss';
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Home from './components/Home/Home';
import Calculator from './components/calculator/Calculator';
import Dashboard from './components/dashboard/Dashboard';
import Configuration from './components/configuration/Configuration';
import Weather from './components/weather/Weather';
import Calendar from './components/calender/Calender';

function App() {
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
                    <Route path='/user' element={<Blank />} />
                    <Route path='/order' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
