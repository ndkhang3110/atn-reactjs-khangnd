import React, { Component } from 'react'

//css
import '../css/component/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small  pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mt-md-0 mt-3">
                            <h5 className="text-uppercase"><img src={require('../assets/image/logotoy3.jpg')} alt="..." style={{ height: "15vh" }} />  </h5>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-6 mb-md-0 mb-6 ">
                            <h5 className="text-uppercase">Contact</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <p>Address: 205 Nguyen Xi Street, Ward 26, Binh Thanh, Ho Chi Minh</p>
                                </li>
                                <li>
                                    <p>Open: 8h30-20h</p>
                                </li>
                                <li>
                                    <p>Hotline: 01234546789</p>
                                </li>
                                <li>
                                    <p>Email: Bitosneakers@gmail.com</p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Policy - service</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <p>PRIVACY POLICY</p>
                                </li>
                                <li>
                                    <p >WARRANTY POLICY</p>
                                </li>
                                <li>
                                    <p >RETURN POLICY</p>
                                </li>
                                <li>
                                    <p >DELIVERY</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
