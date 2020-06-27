import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Select, Form, InputNumber, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

//css
import '../css/page/OrderListPage.css'

import BaseUrl from '../utils/BaseUrl'

export default function OrderListPage() {
    const [product, setProduct] = useState([])
    const [agency, setAgency] = useState([])
    const [employee, setEmployee] = useState([])
    const [customer, setCustomer] = useState([])
    const [orderListId, setOrderListId] = useState(0)

    useEffect(() => {
        getAllProduct()
        getAllAgency()
        getAllEmployee()
        getAllCustomer()
        getAllOrderList()
    }, [])

    const onFinish = (values) => {
        console.log(values)
        postOrder(values.product, values.customer, values.agency, values.employee)
    }

    const getAllProduct = async () => {
        const response = await fetch(`${BaseUrl}/api/product/all`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        setProduct(json)
    }

    const getAllAgency = async () => {
        const response = await fetch(`${BaseUrl}/api/agency/all`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        setAgency(json)
    }

    const getAllOrderList = async () => {
        const response = await fetch(`${BaseUrl}/api/order-list/all`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        setOrderListId(json.length + 1)
    }

    const postOrder = async (productArray, customerId, agencyId, employeeId) => {
        if (productArray[0] !== undefined) {
            try {
                await fetch(`${BaseUrl}/api/order-list/add?customerId=${customerId}&agencyId=${agencyId}&employeeId=${employeeId}`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                productArray.map(async product => {
                    await fetch(`${BaseUrl}/api/order-item/add?orderListId=${orderListId}&productId=${product.productId}&orderItemQuantity=${product.productQuantity}`, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Failed")
        }
    }

    const getAllEmployee = async () => {
        const response = await fetch(`${BaseUrl}/api/employee/all`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        setEmployee(json)
    }

    const getAllCustomer = async () => {
        const response = await fetch(`${BaseUrl}/api/customer/all`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        setCustomer(json)
    }

    return (
        <div style={{ paddingLeft: '25vw', paddingRight: '25vw', minHeight: '68vh' }}>
            <Form name="control-hooks" onFinish={onFinish}>
                <Form.Item name="customer" label="Customer" rules={[{ required: true }]}>
                    <Select placeholder="Select Customer" allowClear>
                        {customer.map(customer => {
                            return <Select.Option key={customer.customer_id} value={customer.customer_id}>{customer.customer_name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item name="agency" label="agency" rules={[{ required: true }]}>
                    <Select placeholder="Select agency" allowClear>
                        {agency.map(agency => {
                            return <Select.Option key={agency.agency_id} value={agency.agency_id}>{agency.agency_id}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item name="employee" label="employee" rules={[{ required: true }]}>
                    <Select placeholder="Select employee" allowClear >
                        {employee.map(employee => {
                            return <Select.Option key={employee.employee_id} value={employee.employee_id}>{employee.employee_name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.List name="product">
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map(field => (
                                    <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'productId']}
                                            fieldKey={[field.fieldKey, 'productId']}
                                            rules={[{ required: true, message: 'Missing productId name' }]}
                                        >
                                            <Select placeholder="Select product name" allowClear>
                                            {product.map(product => {
                                                return <Select.Option key={product.product_id} value={product.product_id}>{product.product_name}</Select.Option>
                                            })}
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'productQuantity']}
                                            fieldKey={[field.fieldKey, 'productQuantity']}
                                            rules={[{ required: true, message: 'Missing quantity name' }]}
                                        >
                                            <InputNumber placeholder="quantity" />
                                        </Form.Item>

                                        <MinusCircleOutlined
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        />
                                    </Space>
                                ))}

                                <Form.Item>
                                    <Button type="dashed" onClick={() => { add(); }} block><PlusOutlined /> Add field</Button>
                                </Form.Item>
                            </div>
                        );
                    }}
                </Form.List>
                <Form.Item><Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}