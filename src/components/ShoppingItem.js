import { useState, useContext } from 'react';
import './ShoppingItem.css';

import { OrderContext } from '../App';

export function ShoppingItem(props) {
    //src, name, price, unit

    const [quantity, setQuantity] = useState(0);
    const updateCart = useContext(OrderContext)

    function increase() {
        updateCart(props.src, props.name, quantity + 1, props.price, props.unit);
        setQuantity(quantity + 1);
    }

    function decrease() {
        if (quantity < 1)
            return;
        updateCart(props.src, props.name, quantity - 1, props.price, props.unit);
        setQuantity(quantity - 1);
    }

    return (
        <div className="shopping-item-container">
            <div className='shopping-item'>
                <img src={props.src} alt="" className="shopping-item-img" />
                <div style={{flexGrow: "1", fontWeight: "600"}}>{props.name}</div>
                <div style={{flexGrow: "1", fontWeight: "600"}}>{props.price}000 đồng / 1 {props.unit}</div>
                <div className='shopping-footer'>
                    <div onClick={increase} className="shopping-btn inc">+</div>
                    <div>{quantity}</div>
                    <div onClick={decrease} className="shopping-btn dec">-</div>
                </div>
            </div>
        </div>
    )
}