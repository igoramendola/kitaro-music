import './ItemDetail.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ itemSelected }) => {
    const [count, setCount] = useState(0);
    const stock = 6;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/cart');
    }
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
                <button onClick={handleNavigation}>Terminar mi compra</button>
                <ItemCount count={count} setCount={setCount} stock={stock} />
            </div>
        </div>
    );
}

export default ItemDetail;