import React from 'react'

export default class Location extends React.Component {
    render() {
        return(
            <div id="locationSection" className="container">
                <div className="row welcome text-center">
                    <div className="col-12">
                        <h1 className="display-4">
                            <span id="charcoal"><i className="fas fa-map-marked-alt"></i></span>
                            <span id="maroon"> LOCATION</span>
                        </h1>
                        <hr />
                        <span id="charcoal">
                            <h1 className="lead">
                                Simmons Bowling Pro Shop<br />
                                2147 W. Irving Park Rd.<br />
                                Chicago, IL 60618<br /><br />
                                <p>There's free street parking directly across the street (availablity may vary) and there is meter parking in front of the store.</p>
                                <p>Public Transportation: CTA Bus 80 - Irving Park and Irving Park Brown Line.</p>
                            </h1>
                        </span>
                    </div>
                </div>
                <iframe title="location" width="100%" height="500px" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=2147%20Irving%20Park%20road%20IL%20&key=AIzaSyBFQe4wr-yhimjOhDgf0vBSsbRPH10oXMQ" allowFullScreen></iframe>
            </div>
        );
    }
}