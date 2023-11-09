import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const { id } =  useParams();
    const [product, setProduct] = useState([]);

    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <ItemDetail itemSelected={product} />
        </div>
    )
}

export default ItemDetailContainer;