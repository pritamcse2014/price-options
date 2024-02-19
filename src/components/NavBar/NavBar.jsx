import { useState } from 'react';
import Nav from '../Nav/Nav';
import './NavBar.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];
    return (
        <nav className='text-black bg-yellow-500 p-6'>
            <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose /> : <AiOutlineMenu />
                }
            </div>
                <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-16' : '-top-60'} bg-yellow-500 px-6`}>
                    {
                        routes.map(route => <Nav key={route.id} route = {route} />)
                    }
                </ul>
        </nav>
    );
};

export default NavBar;