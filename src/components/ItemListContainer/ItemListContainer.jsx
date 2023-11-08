import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <div className='greeting'>
                {greeting}
            </div>
            <div>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemListContainer;