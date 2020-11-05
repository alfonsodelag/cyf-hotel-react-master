import React, { useState } from 'react'
import RestaurantButton from "./RestaurantButton"

function Order(props) {
    const [orders, setOrders] = useState(0);

    const orderOne = () => {
        setOrders(orders + 1);
    }

    return (
        <div>
            <li>
                {props.orderTypes} : {orders}
                <RestaurantButton orderOne={orderOne} />
            </li>
        </div>
    )
}

export default Order
