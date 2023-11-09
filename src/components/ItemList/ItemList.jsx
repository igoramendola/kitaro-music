import './ItemList.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from "../Item/Item";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((json) => setItems(json))
        .catch((error) => console.log(error));
    }

    const fetchProductsId = fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => console.log(error));

    useEffect(() => {
        fetchProducts();
    }, [])

    useEffect(() => {
        const myFunction = async () => {
            if (id) {
                const filteredItems = await fetchProductsId.then((productList) => {
                    return productList.filter((product) => {
                        const idFormated = id.includes('-') ? id.replace('-',' ') : id;

                        return product.category === idFormated;
                    });
                });
                setItems(filteredItems);
            }
        };
        myFunction();
    }, [id]);

    return (
        <div className="item-list">
            {
                items.map((item) => (
                    <Link to={'/item/' + item.id} key={item.id}>
                        <Item
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    </Link>
                ))
            }
        </div>
    );
}

export default ItemList;