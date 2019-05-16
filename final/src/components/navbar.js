import React from 'react';
import logo from './img/LOGO.png';
import {is_Open} from './functions';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-light bg-warning">
                <div class="container-fluid">
                    
                    <a class="navbar-brand" href="index.html"><img id="main_logo" src={logo} width="375" height="100" alt="logo" /></a>
                    
                    <p id="heading_info">2147 Irving Park Rd. &bull; Chicago, IL <br /> &#9742; (773) 267-0926 <br/> {is_Open()} </p>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#serviceSection">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="#packageSection">Packages</a></li>
                            <li class="nav-item"><a class="nav-link" href="#historySection">History</a></li>
                            <li class="nav-item"><a class="nav-link" href="#gallerySection">Gallery</a></li>
                            <li class="nav-item"><a class="nav-link" href="#faqSection">FAQs</a></li>
                            <li class="nav-item"><a class="nav-link" href="#locationSection"><i class="fas fa-map-marked-alt"></i></a></li>
                            <li class="nav-item"><a class="nav-link" href="#contactSection"><i class="fas fa-phone"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;