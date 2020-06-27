import React, { Component } from 'react'

//css
import '../css/page/ItemPage.css'

export default class ItemPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div class="row justify-content-around">
                    <div class="col-5">
                        <div class="testimonial-section">
                            <div class="inner-width">
                                <div class="row justify-content-around">
                                    <div class="col-2">
                                        <div class="testimonial-contents">
                                            <div class="testimonial active" id="test-1">
                                                <div class="Imitem"><img src={require('../assets/image/lego11.jpg')}  alt="..." style={{width: "300px", height: "300px"}} /></div>
                                            </div>

                                            <div class="testimonial" id="test-2">
                                                <div class="Imitem"><img src={require('../assets/image/lego1.jpg')}  alt="..." style={{width: "200px", height: "200px"}} /></div>
                                            </div>

                                            <div class="testimonial" id="test-3">
                                                <div class="Imitem"><img src={require('../assets/image/lego12.jpg')}  alt="..." style={{width: "200px", height: "200px"}} /></div>
                                            </div>

                                            <div class="testimonial" id="test-4">
                                                <div class="Imitem"><img src={require('../assets/image/lego13.jpg')} alt="..." style={{width: "200px", height: "200px"}} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-5">

                        <div class="Infor">
                            <div class="newseason"><b>New Season</b></div>
                            <span><b> LEGO</b></span>
                            <div><p class="Info-text"> LEGO Architecture Skylines </p></div>
                            <div> <b>$170</b></div>


                            <h6>Nationwide  Delivery</h6>
                            <h6>Payment on delivery</h6>
                            <h6>Lifetime warranty Products</h6>
                            <h6> Fast Delivery 60p in TP.HCM</h6>
                            <h6>Hotline: 0123 456 789</h6>


                            <button type="button" class="go" > <a href=" ../html/Shopping.html">Add to bag</a></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
