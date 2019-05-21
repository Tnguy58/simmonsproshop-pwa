import React from 'react'
import Intro from './intro'

export default class Packages extends React.Component {
    render() {
        const PackageComponent = (props) => (
            <div className="card" style={{borderRadius: '25px'}}>
                <span id={props.id} style={{boxShadow: '10px 10px 5px grey', borderRadius: '25px'}}>
                    <strong><br />
                        <h3>{props.package} PACKAGE</h3>
                        <h5>
                            {props.ball} Ball<br />
                            BSI Basic Bag<br />
                            KR O.O.P. Shoe or Linds House Shoe<br />
                            Custom Fitting, Drilling, Engraving<br />
                            {props.value}<br />
                        </h5>
                        <h3>Special Price ${props.price}</h3><br />
                    </strong>
                </span>
            </div>  
        );
        return(
            <div id="packageSection" className="container">
                <Intro icon="far fa-star" title=" BEGINNER PACKAGES" description="For those that throw straight balls, we recommend the Basic Package while for those who want to throw hooks, we recommend the Hook Package. Both packages are available year-round!"/><br />
                <div className="row padding">
                    <div className="col-md-12 col-lg-6 text-center">
                        <span id="charcoal">
                            <PackageComponent package="BEGINNER'S BASIC" ball="T Zone" value="148.95" price="132.95" id="blue_background"/><br />
                            <PackageComponent package="BEGINNER'S Hook" ball="Rhino or Boost" value="197.95" price="182.95" id="green_background"/><br />
                        </span>
                    </div>
                    <div className="col-md-12 col-lg-6"><img src={require("./img-min/Bowling_Bundle.jpg")} className="img-fluid" alt="Packages" style={{boxShadow: '5px 5px 5px grey', borderRadius: '25px'}}/></div>
                </div>
            </div>
        );
    }
}