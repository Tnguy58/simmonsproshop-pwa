import React from 'react'

var myDate = new Date(); // Test date '2019/04/02 19:00:00'

export function season() {
    if ( (myDate.getMonth() <= 3) || (myDate.getMonth() >= 8) )
        return("Fall League Season");
    else 
        return("Summer League Season");
}

export function season_hours()  {
    if (season() === "Fall League Season") 
        return(
            <div>
                <p>Sunday: Closed</p>
                <p>Monday: 4-7:30pm</p>
                <p>Tuesday-Thursday: 12-7:00pm</p>
                <p>Friday: 11am-5pm</p>
                <p>Saturday: 11am-5pm</p>
            </div>
        );
    else if (season() === "Summer League Season")
        return (
            <div>
                <p>Sunday: Closed</p>
                <p>Monday: 4-7:30pm</p>
                <p>Tuesday: 1-7:00pm</p>
                <p>Wednesday: Closed</p>
                <p>Thursday: 1-7:00pm</p>
                <p>Friday: 12-5:30pm</p>
                <p>Saturday: 11am-4pm</p>
            </div>
        );
}

export function season_description() {
    if (season() === "Fall League Season") 
        return(
            <span id="charcoal">Our current hours are based on the Fall league season, 
            which usually runs from September to April. These hours will change during the Summer 
            league season which typically runs from May to August.</span>
        );
    else 
        return (
            <span id="charcoal">Our current hours are based on the Summer league season, 
            which usually runs from May to August. These hours will change during the Fall 
            league season which typically runs from September to April.</span>
        );
}

const open_now = { color: 'green' }
const currently_closed = { color: 'red' }

export function is_Open()  {
    if (season() === "Fall League Season") {
        // Closed on Sundays
        if (myDate.getDay() === 0) {
            return(
                <span>
                    <span style={currently_closed}>Currently Closed</span> <br />
                    Opens at 4pm Tomorrow 
                </span>
            );
        }
        // Open on Mondays from 4-7:30pm
        else if (myDate.getDay() === 1) {
            // Checks before opening time
            if (myDate.getHours() < 16 ) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br/>
                        Opens at 4pm Today
                    </span>
                );
            }
            // Checks 4-7pm
            else if ((myDate.getHours() >= 16 ) && (myDate.getHours() < 19)) {
                return(
                    <span >
                        <span style={open_now}>Open Now</span><br />
                            Closes at 7:30pm
                    </span>
                );
            } 
            // Checks if 7pm and less than 7:30pm
            else if ((myDate.getHours() === 19) && (myDate.getMinutes() < 30)) {
                return(
                    <span>
                        <span style={open_now}>Open Now</span><br />
                        Closes Soon at 7:30pm
                    </span>
                );
            }
            // Checks if after closed
            else {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br/>
                        Opens at 12pm Tomorrow
                    </span> 
                );
            }
        }
        // Open on Tuesday, Wednesday or Thursday from 12-7pm
        else if ((myDate.getDay() === 2) || (myDate.getDay() === 3) || (myDate.getDay() === 4)) {
            // Checks if before opening time
            if (myDate.getHours() < 12 ) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br/>
                        Opens at noon Today
                    </span>
                );
            }
            // Checks 12-7pm
            else if ((myDate.getHours() >= 12 ) && (myDate.getHours() < 19)) {
                return(
                    <span >
                        <span style={open_now}>Open Now</span><br />
                            Closes at 7:00pm
                    </span>
                );
            } 
            // Checks after 7pm on Tuesday and Wednesday
            else if ((myDate.getDay() === 2) || (myDate.getDay() === 3)){
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br />
                        Opens at Noon Tomorrow
                    </span>
                );
            }
            // Checks after 7pm Thursday
            else if (myDate.getDay() === 4){
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br />
                        Opens at 11am Tomorrow
                    </span>
                );
            }
        }
        // Open on Friday and Saturday from 11am-5pm
        else if ((myDate.getDay() === 5) || (myDate.getDay() === 6)) {
            // Checks if before opening time
            if (myDate.getHours() < 10 ) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br/>
                        Opens at 11am Today
                    </span>
                );
            }
            // Checks 11am-5pm
            else if ((myDate.getHours() >= 10 ) && (myDate.getHours() < 16)) {
                return(
                    <span>
                        <span style={open_now}>Open Now</span><br />
                        Closes at 5pm
                    </span>
                );
            }
            // Checks after 5pm on Friday
            else if ((myDate.getDay() === 5) && (myDate.getHours() >= 16)) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br />
                        Opens tomorrow at 11am
                    </span>
                );
            }
            // Checks after 5pm on Saturday
            else if ((myDate.getDay() === 6) && (myDate.getHours() >= 16)) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br />
                        Opens at 4pm next Monday
                    </span>
                );
            }
        } 
    }
    else if (season() === "Summer League Season") {
        // Closed on Sundays and Wednesdays
        if ((myDate.getDay() === 0) || (myDate.getDay() === 3)) {
            // Checks if Sunday
            if (myDate.getDay() === 0) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span> <br />
                        Opens at 4pm Tomorrow 
                    </span>
                );
            }
            // Checks if Wednesday
            if (myDate.getDay() === 3) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span> <br />
                        Opens at 1pm Tomorrow 
                    </span>
                );
            }
        }
        // Open on Mondays from 4-7:30pm
        else if (myDate.getDay() === 1) {
            // Checks before opening time
            if (myDate.getHours() < 15 ) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br/>
                        Opens at 4pm Today
                    </span>
                );
            }
            // Checks 4-7pm
            else if ((myDate.getHours() >= 15 ) && (myDate.getHours() < 18)) {
                return(
                    <span >
                        <span style={open_now}>Open Now</span><br />
                            Closes at 7:30pm
                    </span>
                );
            } 
            // Checks if 7pm and less than 7:30pm
            else if ((myDate.getHours() === 18) && (myDate.getMinutes() < 30)) {
                return(
                    <span>
                        <span style={open_now}>Open Now</span><br />
                        Closes Soon at 7:30pm
                    </span>
                );
            }
            // Checks if after closed
            else {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span> <br/>
                        Opens at 12pm Tomorrow
                    </span>
                );
            }
        }
        // Open on Tuesday and Thursday from 12-7pm
        else if ((myDate.getDay() === 2) || (myDate.getDay() === 4)) {
            // Checks if before opening time
            if (myDate.getHours() < 12 ) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br/>
                        Opens at 1pm Today
                    </span>
                );
            }
            // Checks 1-7pm
            else if ((myDate.getHours() >= 12 ) && (myDate.getHours() < 18)) {
                return(
                    <span >
                        <span style={open_now}>Open Now</span><br />
                            Closes at 7:00pm
                    </span>
                );
            } 
            // Checks after 7pm on Tuesday 
            else if ((myDate.getDay() === 2) && (myDate.getHours() >= 18)){
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br />
                        Opens at 1pm on Thursday
                    </span>
                );
            }
            // Checks after 7pm on Thursday
            else if ((myDate.getDay() === 4) && (myDate.getHours() >= 18)){
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br />
                        Opens at 12pm Tomorrow
                    </span>
                );
            }
        }
        // Open on Friday from 12-4:30pm
        else if (myDate.getDay() === 5) {
            // Checks before opening time
            if (myDate.getHours() < 11 ) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br/>
                        Opens at noon Today
                    </span>
                );
            }
            // Checks 12-5:30pm
            else if ((myDate.getHours() >= 11 ) && (myDate.getHours() < 16)) {
                return(
                    <span >
                        <span style={open_now}>Open Now</span><br />
                            Closes at 5:30pm
                    </span>
                );
            } 
            // Checks if 5pm and less than 5:30pm
            else if ((myDate.getHours() === 16) && (myDate.getMinutes() < 30)) {
                return(
                    <span>
                        <span style={open_now}>Open Now</span><br />
                        Closes Soon at 5:30pm
                    </span>
                );
            }
            // Checks if after closed
            else {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span> <br/>
                        Opens at 11am Tomorrow
                    </span>
                );
            }
        }
        // Open on Saturday from 11am-4pm
        else if (myDate.getDay() === 6) {
            // Checks if before opening time
            if (myDate.getHours() < 10 ) {
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br/>
                        Opens at 11am Today
                    </span>
                );
            }
            // Checks 11am-5pm
            else if ((myDate.getHours() >= 10 ) && (myDate.getHours() < 15)) {
                return(
                    <span>
                        <span style={open_now}>Open Now</span><br />
                        Closes at 4pm
                    </span>
                );
            }
            // Checks after 5pm on Saturday
            else{
                return(
                    <span>
                        <span style={currently_closed}>Currently Closed</span><br />
                        Opens at 4pm on Monday
                    </span>
                );
            }
        } 
    }
}