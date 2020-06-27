import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Carousel } from 'antd'
import { Layout } from 'antd'
import { Row, Col } from 'antd';

//css
import '../css/page/HomePage.css'
import { Link } from 'react-router-dom';

import BaseUrl from '../utils/BaseUrl'
const { Content } = Layout;

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            legoData: [],
            sportData: []
        };
    }
  
    componentDidMount() {
        this.getLegoProduct(1)
        this.getSportProduct(2)
    }
    getLegoProduct = async (id) => {
        // Lấy item và lưu trữ vào state
        const response = await fetch(`${BaseUrl}/api/product/category?id=${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        this.setState({ legoData: json })
    }

    getSportProduct = async (id) => {
        const response = await fetch(`${BaseUrl}/api/product/category?id=${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        this.setState({ sportData: json })
    }

    render() {
        return (
            <div>
                <div className="bd-example">
                    <div className="container-fluid">
                        <Carousel autoplay>
                            <div className="carousel-container">
                                <img src={require('../assets/image/lego61.jpg')} alt="..." style={{ height: '70vh', width: '60%' }} />
                            </div>
                            <div className="carousel-container">
                                <img src={require('../assets/image/lego41.jpg')} alt="..." style={{ height: '70vh', width: '60%' }} />
                            </div>
                            <div className="carousel-container">
                                <img src={require('../assets/image/sport6.jpg')} alt="..." style={{ height: '70vh', width: '60%' }} />
                            </div>
                        </Carousel>
                    </div>
                </div>

                <hr className="my-4" />
                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">LEGO</h1>
                        </div>
                        <div className="col-12">
                            <h5>Shop awesome LEGO® building toys and brick sets and find the perfect gift for your kid.</h5>
                        </div>

                    </div>
                    <br />
                    <br />
                    <div className="container-fluid padding">
                        <Content style={{ backgroundColor: "white" }}>
                            <Row className="groud" justify="center">
                                {/* hiển thị giá trị của state */}
                                {this.state.legoData.map(product => {
                                    return (
                                        <Col key={product.product_id} span={7} style={{ marginTop: "2vh", marginBottom: "2vh" }}>
                                            <div className="col-xs-12 col-sm-4 ">

                                                <div className="card" style={{ width: '20.5rem' }}>
                                                    <img src={product.product_image} className="card-img-top" height="200vh" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-text">{product.product_name}</h5>
                                                        <h5 className="card-title">{product.product_price}</h5>
                                                        <Link to="/Item" className="btn btn-primary">Buy Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Content>
                        <hr className="my-4" />
                        <div className="container-fluid1 padding">
                            <div className="row welcome text-center">
                                <div className="col-12">
                                    <h1 className="display-4">SPORT TOYS</h1>
                                </div>
                                <div className="col-12">
                                    <h5>Playing outside {'&'} getting adventurous {'&'} sporty, we've got all you need to keep them entertained!</h5>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="container-fluid padding">
                                <div className="row text-center padding">
                                    <Content style={{ backgroundColor: "white" }}>
                                        <Row className="groud" justify="center">
                                            {this.state.sportData.map(product => {
                                                return (
                                                    <Col span={7} key={product.product_id} style={{ marginTop: "2vh", marginBottom: "2vh"}}>
                                                        <div className="col-xs-12 col-sm-4 ">
                                                            <div className="card" style={{ width: '20.5rem' }}>
                                                                <img src={product.product_image} className="card-img-top" height="200vh" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-text">{product.product_name}</h5>
                                                                    <h5 className="card-title"> {product.product_price} </h5>
                                                                    <a href=".." className="btn btn-primary">Buy Now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </Content>
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
