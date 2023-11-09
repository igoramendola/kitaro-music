import './Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <Link to={'/'}>
                    <img src={'./images/kitaro-music.png'} alt="logo" width={'190px'}/>
                </Link>
            </div>
            <nav>
                <ul className='list-container'>
                    <li>
                        <Link to={'/category/electronics'} className='navbar-button'>
                            Single
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/jewelery'} className='navbar-button'>
                            Album
                        </Link>
                    </li>
                    <li>
                        <Link to={"/category/men's-clothing"} className='navbar-button'>
                            Live
                        </Link>
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