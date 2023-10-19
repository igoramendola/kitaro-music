import './CartWidget.css';
import * as Icon from "react-bootstrap-icons";

const CartWidget = () => {
    return (
        <div className="cart-container">
            <Icon.Cart />
            <div>
                <span>3</span>
            </div>
        </div>
    )
}

export default CartWidget;