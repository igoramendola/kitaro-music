import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img src={'./images/kitaro-music.png'} alt="logo" width={'190px'}/>
            </div>
            <div>
                <ul>
                    <li>Single</li>
                    <li>Album</li>
                    <li>Live</li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}

export default Navbar;