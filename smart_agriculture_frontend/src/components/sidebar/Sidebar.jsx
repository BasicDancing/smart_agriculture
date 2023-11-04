import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import ToggleBtn from '../../button/ToggleBtn';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Home',
        icon: <i className='bx bxs-castle'></i>,
        to: '/home',
        section: 'home'
    },
    {
        display: 'Calculator',
        icon: <i className='bx bx-calculator' ></i>,
        to: '/calculator',
        section: 'calculator'
    },
    {
        display: 'Configuration',
        icon: <i className='bx bx-cog' ></i>,
        to: '/configuration',
        section: 'configuration'
    },
    {
        display: 'Calendar',
        icon: <i className='bx bx-calendar'></i>,
        to: '/calendar',
        section: 'calendar'
    },
    {
        display: 'Weather',
        icon: <i className='bx bx-cloud-lightning' ></i>,
        to: '/weather',
        section: 'weather'
    },
    {
        display: 'User',
        icon: <i className='bx bx-user'></i>,
        to: '/user',
        section: 'user'
    }
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <>
            <div className='sidebar'>
                <div className='sidebar__top'>
                    <div className="sidebar__logo">
                        Smart Agriculture
                    </div>
                    <div ref={sidebarRef} className="sidebar__menu">
                        <div
                            ref={indicatorRef}
                            className="sidebar__menu__indicator"
                            style={{
                                transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                            }}
                        >
                        </div>
                        {
                            sidebarNavItems.map((item, index) => (
                                <Link to={item.to} key={index}>
                                    <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                        <div className="sidebar__menu__item__icon">
                                            {item.icon}
                                        </div>
                                        <div className="sidebar__menu__item__text">
                                            {item.display}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='sidebar__bottom'>
                    <ToggleBtn />
                </div>
            </div>
        </>);

};

export default Sidebar;
