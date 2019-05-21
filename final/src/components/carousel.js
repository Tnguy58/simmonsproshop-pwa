import React from 'react';

class Carousel extends React.Component {
    render() {
        return (
            <div id="slides" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" class="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                    <li data-target="#slides" data-slide-to="3"></li>
                    <li data-target="#slides" data-slide-to="4"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("./img-min/Bowling_Pro_Shop_Helping_Customer_2.jpg")} style={{opacity: "0.3"}} alt="Helping customer" />
                        <div class="carousel-caption">
                            <span>
                                <h1>
                                    <font color="#a01945">SIMMONS </font>
                                    <font color="#303030">BOWLING</font>
                                </h1>
                                <h1><font color="#a01945">PRO SHOP</font></h1>
                            </span>
                            
                            <h3><font color="#303030">Serving Chicagoland bowlers since</font> <font color="#a01945">1976</font></h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require("./img-min/Measuring_Bowling_Ball.jpg")} style={{opacity: "0.5"}} alt="Measuring Bowling Ball"/>
                        <div class="carousel-caption">
                            <h1><font color="#303030">Expert Precision</font></h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require("./img-min/Bowling_Pro_Shop_Waiting_Area.jpg")} style={{opacity: "0.5"}} alt="Bowling Pro Shop Waiting Area"/>
                        <div class="carousel-caption">
                            <h1><font color="#303030">Family-Friendly Ambience</font></h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require("./img-min/Simmons_Bowling_Pro_Shop_Sign.jpg")} style={{opacity: "0.5"}} alt="Simmons Bowling Pro Shop Sign"/>
                        <div class="carousel-caption">
                            <h1><font color="#303030">Since 1976</font></h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require("./img-min/Bowling_Accessories.jpg")} style={{opacity: "0.5"}} alt="Bowling Accessories"/>
                        <div class="carousel-caption">
                            <h1><font color="#303030">Bowling Accessories</font></h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;