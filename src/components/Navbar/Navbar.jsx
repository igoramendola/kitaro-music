import './Navbar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <NavLink to={'/'}>
                    <img src={'./images/kitaro-music.png'} alt="logo" width={'190px'}/>
                </NavLink>
            </div>
            <nav>
                <ul className='list-container'>
                    <li>
                        <NavLink exact to={'/category/electronics'} className={(navData) => navData.isActive ? 'navbar-button navbar-button-active' : 'navbar-button'}>
                            Single
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={'/category/jewelery'} className={(navData) => navData.isActive ? 'navbar-button navbar-button-active' : 'navbar-button'}>
                            Album
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={"/category/men's-clothing"} className={(navData) => navData.isActive ? 'navbar-button navbar-button-active' : 'navbar-button'}>
                            Live
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}

export default Navbar;