import React, { Component } from 'react'

//Css
import '../css/page/CartPage.css'
import { Link } from 'react-router-dom';

export default class CartPage extends Component {

    render() {
        return (

            <div>
                <p align="center">
                    <b>
                        <div className="release" ><h3> SHOPPING BAG </h3></div>
                    </b>
                </p>
                <div className="row justify-content-around">
                <div className="row">
                    <div className="col-8">
                        <div>
                         
                            <div className="row item-cart-container">
                                <div className="col" >
                                    <img src={require("../assets/image/lego6.jpg")} alt="..." height="150" width="200" />
                                </div>
                                <div className="col" >
        
                                        <div className="newseason"><b>New Season</b></div>
                                        <span><b>ADDIDAS</b></span>
                                        <div><p className="Info-text"> LEGO Building Kit Old Trafford </p></div>
        
                                </div>
                                <div className="col" >
                                    <div className="Money"><b>$256</b></div>
                                </div>
                                <div className="col" >
                                    <div className="Size">
                                        <div className="Size1"> Quantity: <p><span className="uk"> <b> 1 </b> </span><Link href="..." style={{color: "black"}}>Change</Link> </p> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            
                            <div className="row item-cart-container">
                                <div className="col" >
                                    <img src={require("../assets/image/lego11.jpg")} alt="..." height="150" width="200" />
                                </div>
                                <div className="col" >
                                        <div className="newseason"><b>Have a Nike Day</b></div>
                                        <span><b>NIKE</b></span>
                                        <div><p className="Info-text"> <h6>LEGO Architecture Skylines</h6>  </p></div>
                                </div>
                                <div className="col" >
                                    <div className="Money"><b>$170</b></div>
                                </div>
                                <div className="col" >
                                    <div className="Size">

                                        <div className="Size1"> Quantity: <p><span className="uk"> <b> 1 </b> </span> <Link href="..." style={{color: "black"}}>Change</Link> </p> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="summary"> <b>summary</b>  </div>
                        <div className="row justify-content-between">
                            <div className="col-1">
                                Subtotal
                        </div>
                            <div className="col-1">
                                <div className="subtotal">  $426.00 </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-1">
                                Shipping
                        </div>
                            <div className="col-1">
                                <div className="subtotal">  $10.00 </div>
                                <div className="Shipping"> One shipping fee</div>
                            </div>
                        </div>
                        <hr />
                        <br />
                        <div className="row justify-content-between">
                            <div className="col-1">
                                Total
                                </div>
                            <div className="col-1">
                                <div className="subtotal">USD  $436.00 </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="go">
                                        <button type="button" className="go"> <a href=" ../html/Shipping.html">Go to check </a></button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="container">
                        <div className="row">
                            <div className="col-11">
                                <form className="Sea form-inline" >
                                    <div className="form-group mx-sm-3 mb-2">
                                        <label for="inputPassword2" className="sr-only">Yes, here's my email</label>
                                        <input type="Email" className="form-control" id="inputPassword2" placeholder="Yes, here's my email" />
                                    </div>
                                    <button type="submit" className="signmeup">Sign me up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        )
    }
}
