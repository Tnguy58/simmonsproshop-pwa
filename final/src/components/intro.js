import React from 'react'
import classnames from 'classnames'

const Intro = (props) => (
    <div className="row welcome container">
        <div className="col-md-12">
            <h1 className="display-4 welcome text-center">
                <span id="charcoal"><i className={classnames(props.icon)}></i></span>
                <span id="maroon">{props.title}</span>
            </h1><hr />
        </div>
        <div className="col-12 text-center">
            <h1 className="lead"><span id="charcoal">{props.description}</span></h1>
        </div>
    </div>
)
export default Intro;