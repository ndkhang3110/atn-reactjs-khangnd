import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import { useHistory } from "react-router-dom";

import BaseUrl from '../utils/BaseUrl'

//css
import '../css/page/OrderListPage.css'

export default function OrderListPage() {
    let history = useHistory();

    const [orderList, setOrderList] = useState([])

    const getOrderList = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/orderlist/all`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            console.log(data)
            setOrderList(data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getOrderList()
    }, [])

    const toOrderDetail = (orderId) => {
        let path = "/OrderDetail"
        history.push({ pathname: path, orderId: orderId })
    }
    return (
        <div>
            <div className="site-card-border-less-wrapper">
            {orderList.map(product => {
                return (
                        <Card title="Card title" bordered={false} key={product.order_list_id} style={{ width: 350 }} title={`Customer name: ${product.customer_name}`}
                       actions={[
                        <Button type="primary" onClick={() => toOrderDetail(product.order_list_id)} style={{ width: "80%" }}>Details</Button>
                    ]}
                        >
                            <p>OrderId: {product.order_list_id}</p>
                            <p>BrandId: {product.agency_id}</p>
                            <p>Staff name: {product.employee_name}</p>
                            <p>Order date: {product.employee_created_at.substring(0, 10)}</p>
                        </Card>
                )
                
            })}
            </div>
        </div>

    )
}
