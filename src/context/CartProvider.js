import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);

    const addItem = (product, quantity) => {
        if (isInCart(product.id)) {
            const newProducts = products.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                    }
                } else {
                    return item;
                }
            })
            setProducts(newProducts);
            return;
        }
        setProducts([
            ...products,
            {
                ...product,
                quantity,
            },
        ]);
    };

    const clear = () => {
        setProducts([]);
    };

    const removeItem = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    const isInCart = (productId) => {
        return products.some((product) => product.id === productId);
    };

    useEffect(() => {
        setProductQuantity(
            products.reduce((acc, product) => acc + product.quantity, 0),
            0
        );
    }, [products]);

    return (
        <CartContext.Provider value={{products, addItem, productQuantity, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;