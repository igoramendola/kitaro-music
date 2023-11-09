import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProductList(data))
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <div className='greeting'>
                {greeting}
            </div>
            <div>
                <ItemCount />
                <ItemList productList={productList} />
            </div>
        </div>
    )
}

export default ItemListContainer;