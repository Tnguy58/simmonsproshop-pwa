import React from 'react';

class FAQ extends React.Component {
    render() {
        return (
            <div id="faqSection" class="container">
                <div class="row welcome text-center">
                    <h1 class="display-4">
                        <font color="#303030"><i class="fas fa-question"></i></font>
                        <font color="#a01945"> FREQUENTLY ASKED QUESTIONS (FAQs)</font>
                    </h1>
                    <hr/>
                    <h1 class="lead"><font color="#303030">Quickly find out if we've already addressed your query.</font></h1>
                </div>
                <br/>
                <div class="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" style={{whiteSpace: "normal", color: "#303030"}} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">1. How long does it take to fit and drill a bowling ball?</button>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body"><font color="#303030">Once we begin, between 45 minutes to an hour on average.</font></div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" style={{whiteSpace: "normal", color: "#303030"}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">2. Why should I purchase a new bowling ball?</button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">
                                <font color="#303030">Whether you're a novice or an expert, a properly fitted bowling ball is essential if you want to bowl your best. A bowling ball that fits properly will actually feel lighter and be easier to throw. And it reduces the chance of hand pain or injury. A properly fitted bowling ball not only feels better, it will help you to be more accurate and help you to hook the bowling ball if that is your goal.</font>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" style={{whiteSpace: "normal", color: "#303030"}} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">3. How many bowling balls should I have?</button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body">
                                <font color="#303030">A beginner only throwing straight balls only needs one ball. As you advance and start to throw a hook you may need more than one ball.</font>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" style={{whiteSpace: "normal", color: "#303030"}} type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">4. Why do bowling ball prices vary?</button>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div class="card-body">
                                <font color="#303030">Bowling balls range in price from $70 to $250 (with drilling), depending on their purpose and quality. High performance balls are more expensive because they have high tech cores/ covers and are designed to have more hook potential.</font>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFive">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" style={{whiteSpace: "normal", color: "#303030"}} type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">5. Can you drill a ball that I bought somewhere else?</button>
                            </h5>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                            <div class="card-body">
                                <font color="#303030">Yes, we drill balls that have been purchased online or elsewhere. Prices online tend to be more expensive than if you buy directly from your Bowling Pro Shop. 
                                <br/><br/>
                                <h5>Disadvantages of Buying Your Ball Online: </h5>
                                <h6>
                                    <ul style={{listStyleType: "none", paddingLeft: "0"}}>
                                        <li>1. Warrenty Issues</li>
                                        <li>2. Cost of Drilling Usually Higher</li>
                                    </ul>
                                </h6></font>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSix">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" style={{whiteSpace: "normal", color: "#303030"}} type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">6. Why does my bowling ball not hook anymore?</button>
                            </h5>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                            <div class="card-body">
                                <font color="#303030">There are many reasons why bowling balls stop hooking. If your ball is not hooking it might need to be cleaned, sanded with an Abralon pad or have the oil removed with a Rejuvenator Machine. It might also need to be fully resurfaced. One (or a combination) of these techniques will probably bring your bowling ball back to life. If your ball is very old you may need to purchase a new ball from your local Bowling Pro Shop. Most react resin bowling balls last ~200 games.</font>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSeven">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" style={{whiteSpace: "normal", color: "#303030"}} type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">7. Should I clean my bowling ball every time I bowl?</button>
                            </h5>
                        </div>
                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                            <div class="card-body">
                                <font color="#303030">YES! It is very important to clean your bowling ball after each bowling session. You want to use high quality bowling ball cleaner, that is designed specifically for bowling balls, and disposable paper towel(s) to clean your ball. This will maximize the life of your bowling ball.</font>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingEight">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" style={{whiteSpace: "normal", color: "#303030"}} type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">8. What does the new USBC rule mean to me?</button>
                            </h5>
                        </div>
                        <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                            <div class="card-body"><font color="#303030">All balance holes must be plugged by August 1st 2020.</font></div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingNine">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" style={{whiteSpace: "normal", color: "#303030"}} type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">9. Is there parking at Simmons Bowling Pro Shop?</button>
                            </h5>
                        </div>
                        <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                            <div class="card-body"><font color="#303030">Yes, there's free street parking directly across the street and meter parking in front of the store.</font></div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default FAQ;