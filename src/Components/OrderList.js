import React, {useState, useEffect} from 'react';
import axios from 'axios';

function OrderList(){

    const [orders, setOrders] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:8080/lists/orders')
        .then(response=>{setOrders(response.data)
        })
        .catch(error=>{
            console.error('Error fetching data: ', error);
        });
    }, [])


    return(
    <div>
        {orders ? (
        <ul>{orders.map(order=>(
            <li key={order.Id} className="list-item">
                {order.employeeName && <div className="column">{order.employeeName}</div>}
                {order.itemId && <div className="column">{order.itemId}</div>}
                {order.unitOfMeasurement && <div className="column">{order.unitOfMeasurement}</div>}
                {order.quantity && <div className="column">{order.quantity}</div>}
                {order.priceUAH && <div className="column">{order.priceUAH}</div>}
                {order.comment && <div className="column">{order.comment}</div>}
            </li>
        ))}
        </ul>
        ):<div>Not available.</div>}
    </div>
    )
}

export default OrderList;