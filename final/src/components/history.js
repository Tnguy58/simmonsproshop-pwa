import React from 'react'
import Intro from './intro'
import classnames from 'classnames'

export default class Navbar extends React.Component {
    render() {
        const HistoryComponent = (props) => (
            <div className="timeline">
                <div className="timeline-content">
                    <div className="circle"><span><i className={classnames(props.icon)}></i></span></div>
                    <div className="content">
                        <span className="year">{props.year}</span>
                        <h4 className="title"><font color="#303030">{props.title}</font></h4>
                        <p><font color="#505050">{props.description}</font></p>
                        <div className="icon"><span></span></div>
                    </div>
                </div>
            </div>
        );
        return(
            <div id="historySection" className="container">
                <Intro icon="fas fa-history" title=" OUR HISTORY" description="Simmons Bowling Pro Shop has gone through many changes since it's debut. Below are some of the key notable events from the past."/> 
                <div className="row">
                    <div className="col-12"><br />
                        <div className="main-timeline9">
                            <HistoryComponent icon="fas fa-store" year="1946" title="Simmons Sporting Goods Established"
                            description="Simmons Sporting Goods was started in 1946 by Vern Simmons."/>
                            <HistoryComponent icon="fas fa-certificate" year="1976" title="Transformation"
                            description="Simmons Sporting Goods became Simmons Bowling Pro Shop."/>
                            <HistoryComponent icon="fas fa-running" year="Early 1980's" title="New Leadership"
                            description="Brian Simmons, the present owner of Simmons Pro Shop and son of Vern Simmons, started working full time at the pro shop."/>
                            <HistoryComponent icon="fas fa-school" year="Summer 1999" title="IBPSIA School"
                            description="In the Summer 1999, Brian Simmons traveled to Las Vegas to attend IBPSIA School. His experience there revolutionized the way that he drilled bowling balls."/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 } 