import './CartWidget.css';
import * as Icon from "react-bootstrap-icons";
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { products } = useContext(CartContext);

    return (
        <div className="cart-container">
            <Icon.Cart />
            <div>
                <span className='products-length'> {products.length} </span>
            </div>
        </div>
    )
}

export default CartWidget;