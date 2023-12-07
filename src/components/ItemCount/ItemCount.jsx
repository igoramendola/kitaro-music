const ItemCount = ({stock, count, setCount}) => {
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
            {count === stock? null:<button onClick={onAdd}>+</button>}
        </div>
    )
}

export default ItemCount;