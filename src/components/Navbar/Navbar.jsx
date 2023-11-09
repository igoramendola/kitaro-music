import './Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img src={'./images/kitaro-music.png'} alt="logo" width={'190px'}/>
            </div>
            <nav>
                <ul className='list-container'>
                    <li>
                        <Link to={'/category/single'} className='navbar-button'>
                            Single
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/album'} className='navbar-button'>
                            Album
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/live'} className='navbar-button'>
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