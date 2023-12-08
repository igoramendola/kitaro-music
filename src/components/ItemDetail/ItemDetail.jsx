import './ItemDetail.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ itemSelected }) => {
    const [count, setCount] = useState(0);
    const stock = 6;
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);

    const handleNavigation = () => {
        navigate('/cart');
    };
    const addToCart = () => {
        addItem(itemSelected, count);
    };

    return (
        <div>
            <h6 className="card-title">{itemSelected?.title}</h6>
            <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
            <div className="card-description">
                <p>{itemSelected?.description}</p>
            </div>

            <span>Stock: {stock}</span>
            <p>{itemSelected?.price}</p>
            <div>
                <ItemCount count={count} setCount={setCount} stock={stock} />
                <button onClick={addToCart}>Agregar al carrito</button>
            </div>
            <button onClick={handleNavigation}>Ir al carrito</button>
        </div>
    );
}

export default ItemDetail;