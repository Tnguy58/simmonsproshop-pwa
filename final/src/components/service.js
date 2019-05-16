import React from 'react'
import Intro from './intro'

export default class Service extends React.Component {
    render() {
        const ServiceComponent = (props) => (
            <div className="col-md-6 col-lg-4">
                <span id="maroon"><i className={props.icon}></i></span>
                <span id="charcoal"><h3>{props.title}</h3><h1 className="lead">{props.description}</h1></span>
            </div>  
        );
        return(
            <div id="serviceSection" className="container">
                <Intro icon="fas fa-handshake" title=" WHAT WE DO" description="At Simmons Bowling Pro Shop, we are focused on helping you bowl your perfect game. Below is a list of the main services/ products that we provide."/><br />
                <div className="row text-center">
                    <ServiceComponent icon="fas fa-bowling-ball fa-6x" title="Ball Drilling" 
                    description="We can drill any bowling ball based on your style. From the two-handed 'shovel' approach to the classic one-handed approach, we have the experience and expertise you need."/>
                    <ServiceComponent icon="fas fa-fill-drip fa-6x" title="Ball Plugging" 
                    description="Many get their bowling ball plugged in order to prepare it for redrilling. Changing the drilling layout of your ball will influence ball motion."/>
                    <ServiceComponent icon="fas fa-brush fa-6x" title="Ball Resurfacing" 
                    description="Over time the surface of your bowling ball may collect nicks and track lines. By resurfacing your ball using our Abralon pads we can remove deformities and restore your ball leaving it looking almost new!"/>
                    <ServiceComponent icon="fas fa-fire fa-6x" title="Ball Baking" 
                    description="With repeated use, your bowling ball will soak up oil like a sponge. Our Rejuvenator Machine bakes the oil right out of your ball! It's recommended to bake your bowling ball every 50-60 games."/>
                    <ServiceComponent icon="fas fa-shopping-cart fa-6x" title="Bowling Accessories" 
                    description="We provide nearly all of the essential accessories to improve your game from ball cleaner spray to skin protection tape to shoe protector covers. Simmons Bowling Pro Shop has got you covered."/>
                    <ServiceComponent icon="fas fa-chalkboard-teacher fa-6x" title="Bowling Lessons for Beginners" 
                    description="If you are new to bowling and want to learn the proper techniques, please call us to schedule a bowling lesson. We teach out of Waveland Bowl located at 3700 N. Western Ave."/>
                </div>
            </div>
        );
    }
}   