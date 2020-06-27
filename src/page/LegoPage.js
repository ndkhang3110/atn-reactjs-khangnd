import React, { Component } from 'react'
//Css
import '../css/page/LeGoPage.css'
import { Layout, } from 'antd'
import { Row, Col } from 'antd';
import BaseUrl from '../utils/BaseUrl'
const { Header, Sider, Content } = Layout;


export default class LegoPage extends Component {
    // Khởi tạo state
    constructor(props) {
        super(props)
        this.state = {
            legoData: []
        }
    }
    // Lấy item sau lần gắn kết đầu tiên
    componentDidMount() {
        this.getLegoProduct(1)
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
    render() {
        return (
            <Layout>
                <Header className="bg">
                    <div align="center">
                        <b>
                            <div className="release" ><h3> LEGO </h3></div>
                        </b>
                    </div>
                </Header>
                <Layout>
                    <Sider className="mau">
                        <div className="col-2">
                            <h5 className="Size-types">Gender </h5>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label" >Boys</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" >female</label>
                            </div>
                            <div className="form-check disabled">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                <label className="form-check-label" >Unisex</label>
                                <div className="Price">
                                    <h5 className="Size-typ es">Price</h5>
                                    <div className="container mt-2">
                                        <div className="d-flex justify-content-between mb-2">
                                            <div className="p-2 background-color: White; ">US $0</div>
                                            <div className="p-2 ">US $1000+</div>
                                        </div>
                                    </div>
                                    <input type="range" className="custom-range" id="customRange" name="points1" />
                                </div>
                            </div>
                        </div>
                    </Sider>

                    <Content style={{ backgroundColor: "white" }}>
                        <Row className="groud" justify="center">
                        {/* hiển thị giá trị của state */}
                            {this.state.legoData.map(product => {
                                return (
                                    <Col span={7} style={{ marginTop: "2vh", marginBottom: "2vh" }} key={product.product_id}>
                                        <div className="col-xs-12 col-sm-4 ">

                                            <div className="card" style={{ width: '20.5rem' }}>
                                                <img src={product.product_image} className="card-img-top" height="200vh" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-text">{product.product_name}</h5>
                                                    <h5 className="card-title">{product.product_price}</h5>
                                                    <a href=".." className="btn btn-primary">Buy Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
