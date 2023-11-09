import './ItemListContainer.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <div className='greeting'>
                {greeting}
            </div>
            <div>
                <ItemCount />
                <ItemList />
            </div>
        </div>
    )
}

export default ItemListContainer;