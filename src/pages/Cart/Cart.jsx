import './Cart.css';
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Item from "../../components/Item/Item";

const Cart = () => {
    const { products, clear, removeItem } = useContext(CartContext);

    return (
        <div>
            <h1>Tu carrito de compras</h1>
            {
                products.length > 0 ?
                (<div>
                    <button onClick={clear}>Vaciar carrito</button>
                    <div className="item-list">
                        {
                            products.map((item) => (
                                <div key={item.id}>
                                    <Item
                                        title={item.title}
                                        description={item.description}
                                        price={item.price}
                                        image={item.image}
                                        quantity={item.quantity}
                                    />
                                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                </div>
                            ))
                        }
                    </div>
                </div>)
                :
                (<div>No hay productos en el carrito.</div>)

            }
        </div>
    );
}

export default Cart;