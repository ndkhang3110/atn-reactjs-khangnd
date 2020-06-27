import React from 'react'

import { Form, Input, Button, Select, InputNumber } from 'antd';

//Css
import '../css/page/AddItemPage.css'

import BaseUrl from '../utils/BaseUrl'

const { Option } = Select;

export default function Demo() {

    const onFinish = values => {
        console.log(values);
        onSubmitAddProduct(values.Category, values.Supplier, values.name, values.price, values.Quantity, values.image)
    };

    // const onGenderChange = (value) => {
    //     console.log(value)
    // }

    const onCategory = value => {
        console.log(value)
    }

    const onSupplier = value => {
        console.log(value)
    }

    const onSubmitAddProduct = async (productCategory, productSupplier, productname, productPrice, productQuantity, productImage) => {
        await fetch(`${BaseUrl}/api/product/addproduct?productCategory=${productCategory}&productSupplier=${productSupplier}&productName=${productname}&productPrice=${productPrice}&productQuantity=${productQuantity}&productImage=${productImage}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }


    return (
        <div className="Add-container ">
            <Form name="control-ref" style={{ width: "29vw" }} onFinish={onFinish}>

                <Form.Item
                    name="Category"
                    label="Category"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onCategory}
                        allowClear
                    >
                        <Option value={1}>Lego</Option>
                        <Option value={2}>Sport</Option>
                       

                    </Select>
                </Form.Item>

                <Form.Item
                    name="Supplier"
                    label="Supplier"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onSupplier}
                        allowClear
                    >
                        <Option value={1}>Lego</Option>
                        <Option value={2}>Sport</Option>
                        <Option value={3}>Basketball</Option>
                        <Option value={4}>Building sets</Option>
                        <Option value={5}>Ball</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="name"
                    label="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="price"
                    label="price"
                    type="number"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    name="Quantity"
                    label="Quantity"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>


                <Form.Item
                    name="image"
                    label="image"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
             </Button>
                </Form.Item>

            </Form>
        </div>


    );


}
