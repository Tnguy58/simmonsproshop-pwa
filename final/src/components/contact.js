import React from 'react'
import {season_hours, season_description} from './functions'

export default class Contact extends React.Component {
    render() {
        return(
            <div id="contactSection" className="container"><br />
	            <div className="row welcome text-center">
		            <div className="col-12">
                        <h1 className="display-4">
                            <span id="charcoal"><i className="fas fa-phone"></i></span>
                            <span id="maroon"> CONTACT US</span>
                        </h1><hr />
                        <h1 className="lead">
                            <span id="charcoal">See us in person! We enjoy helping our customers, so feel free to stop in. Please visit our shop or call us at (773) 267-0926 during our hours of operations for anything bowling!</span>
                        </h1><br />
                        <strong>
                            <h3>
                                <span id="charcoal"><i className="fas fa-map-marked-alt"></i></span>
                                <span id="maroon"> OUR HOURS</span>
                            </h3>
                            <hr className="light"/>
                                <span id="charcoal">{season_hours()}</span>
                            <hr className="light"/>
                        </strong><br/>
                        <h1 className="lead">{season_description()}</h1>
                    </div>
                </div><br />
            </div>
        );
    }
}