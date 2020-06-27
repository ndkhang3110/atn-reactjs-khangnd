import React, { useState, useEffect } from 'react'
import { List, Avatar } from 'antd';

import BaseUrl from '../utils/BaseUrl'

export default function OrderDetail(props) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getAllOrderItem(props.location.orderId)
    }, [props.location.orderId])

    const getAllOrderItem = async (orderId) => {
        const response = await fetch(`${BaseUrl}/api/order-item/all?orderId=${orderId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)
        setProduct(json)
    }

    return (
        <div style={{ minHeight: '68vh' }}>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={product}
                renderItem={item => (
                    <List.Item
                        key={item.order_list_id}
                        actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                    >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item.product_image} />
                                }
                                title={item.product_name}
                                description={item.product_price}
                            />
                            <div>{item.order_item_quantity}</div>
                    </List.Item>
                )}
            />
        </div>
    )
}
