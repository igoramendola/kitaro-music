import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const stock = 6;

    const onAdd = () => {
        setCount(count+1);
    }

    const onRemove = () => {
        setCount(count-1);
    }

    return (
        <div>
            <button onClick={count === 0? null: onRemove}>-</button>
            <span>{count}</span>
            <button onClick={count === stock? null: onAdd}>+</button>
        </div>
    )
}

export default ItemCount;