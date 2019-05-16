import React from 'react';

class Gallery extends React.Component {
    render() {
        return (
            <div id="gallerySection" class="container" >
                <div class="row welcome text-center">
                    <div class="col-12">
                        <h1 class="display-4">
                            <font color="#303030"><i class="fas fa-images"></i></font>
                            <font color="#a01945"> PHOTO GALLERY</font>
                        </h1>
                        <hr/>
                        <h1 class="lead">
                            <font color="#303030">To help familiarize you with Simmons Bowling Pro Shop, here are some images that we took from inside and around the shop!</font>
                        </h1>
                    </div>
                </div> 
                <div class="gallery-block compact-gallery" style={{paddingTop: "25px", paddingBottom: "25px"}}>
                    <div class="row no-gutters">	
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Bowling_Pro_Shop_Helping_Customer.jpg")}>
                                <img class="img-fluid image" src={require("./img/Bowling_Pro_Shop_Helping_Customer.jpg")} alt="Measuring length of fingers."/>
                                <span class="description">
                                    <span class="description-heading">Finger Measurements</span>
                                    <span class="description-body">To ensure a propper fit, we collect the necessary finger measurements before your ball is drilled.</span>
                                </span>
                            </a>
                        </div> 				
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Drilling_Bowling_Ball.jpg")}>
                                <img class="img-fluid image" src={require("./img/Drilling_Bowling_Ball.jpg")} alt="Drilling bowling ball."/>
                                <span class="description">
                                    <span class="description-heading">Ball Drilling</span>
                                    <span class="description-body">Each ball is carefully drilled using the prior measurements.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Drilled_Bowling_Ball.jpg")}>
                                <img class="img-fluid image" src={require("./img/Drilled_Bowling_Ball.jpg")} alt="Finished bowling ball."/>
                                <span class="description">
                                    <span class="description-heading">Special Care With Each Ball</span>
                                    <span class="description-body">Before we finish drilling we make sure the ball is comfortable for you to hold/ use.</span>
                                </span>
                            </a>
                        </div>	
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Measuring_Bowling_Ball.jpg")}>
                                <img class="img-fluid image" src={require("./img/Measuring_Bowling_Ball.jpg")} alt="Measuring Bowling Ball"/>
                                <span class="description">
                                    <span class="description-heading">Accurate Measurements</span>
                                    <span class="description-body">We constantly check the measurements to make sure your fingers fit propperly.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Bowling_Pro_Shop_Waiting_Area.jpg")}>
                                <img class="img-fluid image" src={require("./img/Bowling_Pro_Shop_Waiting_Area.jpg")} alt="Waiting area."/>
                                <span class="description">
                                    <span class="description-heading">Waiting Area</span>
                                    <span class="description-body">Please wait at our shop while we take care of your bowling ball(s).</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Bowling_Shoes.jpg")}>
                                <img class="img-fluid image" src={require("./img/Bowling_Shoes.jpg")} alt="Bowling shoes."/>
                                <span class="description">
                                    <span class="description-heading">Wide Selection of Bowling Accessories</span>
                                    <span class="description-body">We provide a wide assortment of bowling accessories.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Bowling_Balls.jpg")}>
                                <img class="img-fluid image" src={require("./img/Bowling_Balls.jpg")} alt="Bowling Balls"/>
                                <span class="description">
                                    <span class="description-heading">A Bowling Ball for Your Style</span>
                                    <span class="description-body">Whatever your throwing approach is, we have a ball just for you.</span>
                                </span>
                            </a>
                        </div>	
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Bowling_Ball_Bags.jpg")}>
                                <img class="img-fluid image" src={require("./img/Bowling_Ball_Bags.jpg")} alt="Bags"/>
                                <span class="description">
                                    <span class="description-heading">Ball Bags</span>
                                    <span class="description-body">We provide a handful of ball bags depending on how many bowling balls you have.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Rejuvenator_Machine.jpg")}>
                                <img class="img-fluid image" src={require("./img/Rejuvenator_Machine.jpg")} alt="Rejuvenator machine."/>
                                <span class="description">
                                    <span class="description-heading">Rejuvenator Machine</span>
                                    <span class="description-body">Bake your bowling ball every 50-60 games to remove excess oil.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Prices.jpg")}>
                                <img class="img-fluid image" src={require("./img/Prices.jpg")} alt="Prices"/>
                                <span class="description">
                                    <span class="description-heading">Prices</span>
                                    <span class="description-body">Here are the prices for our various services.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Simmons_Bowling_Pro_Shop_Sign.jpg")}>
                                <img class="img-fluid image" src={require("./img/Simmons_Bowling_Pro_Shop_Sign.jpg")} alt="Sign outside."/>
                                <span class="description">
                                    <span class="description-heading">Street Sign</span>
                                    <span class="description-body">Main sign outside the shop.</span>
                                </span>
                            </a>
                        </div>	
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href={require("./img/Simmons_Pro_Shop_Store_Front.jpg")}>
                                <img class="img-fluid image" src={require("./img/Simmons_Pro_Shop_Store_Front.jpg")} alt="Store Front"/>
                                <span class="description">
                                    <span class="description-heading">Storefront</span>
                                    <span class="description-body">Front of Simmons Bowling Pro Shop.</span>
                                </span>
                            </a>
                        </div>		
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;