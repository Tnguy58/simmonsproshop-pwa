import React from 'react'
import {season_hours, season} from './functions'

export default class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={require("./img-min/LOGO_YELLOW.png")} width="281.25" height="75" alt="logo" />
                        <hr className="light" />
                        <p><i className="fas fa-phone"></i> (773) 267-0926</p>
                        <p>2147 Irving Park Rd.</p>
                        <p>Chicago, IL 60618</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <hr className="light" />
                            <h5><i className="fas fa-calendar-alt"></i> {season()} Hours</h5>
                        <hr className="light" />
                        {season_hours()}
                    </div>
                    <div className="col-md-4 text-center">
                        <hr className="light" />
                            <h5><i className="fas fa-map-marked-alt"></i> Service Area</h5>
                        <hr className="light" />
                        <p>Chicago, IL 60618</p>
                    </div>
                    <div className="col-12 text-center">
                        <hr className="light-100" />
                        <p>&copy; Simmons Bowling Pro Shop 2019. All rights reserved</p>
                        <p>Website developed by Timothy Nguyen</p>
                    </div>
                </div>
            </footer>        
        );
    }
}