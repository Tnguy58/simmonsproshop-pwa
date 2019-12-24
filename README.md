<img width="1438" alt="Screen Shot 2019-05-13 at 1 03 21 PM" src="https://user-images.githubusercontent.com/25943238/57643520-8853cb00-757f-11e9-806a-ab04f7abc5d1.png">

## [www.SimmonsProShop.com](https://www.simmonsproshop.com) 

## Introduction
www.SimmonsProShop.com is a ReactJS Single-Page-Application (SPA) that I developed for Simmons (Bowling) Pro Shop. The web app conveys specific and helpful information about the products and services that Simmons Pro Shop provides such as ball drilling, ball baking, etc. I had the task of developing the app from scratch, which entails gathering information such as the various bowling services, the history of the shop, Q&A, etc., taking all of the pictures that appear on the app and handwriting the descriptions of their bowling services with the guidance of Brian (the owner) and his acquaintances. 

## Motivation
To gain experience building a progressive web app while also learning more about the sport of bowling. 

## Build Status
Completed and working 100% ✅

## Technologies Used

Front-End
- HTML5
- ReactJS
- Javascript (ES6)

Styling
- CSS
- SASS
- Bootstrap

Compiler / Bundler
- Babel
- Webpack

Build-Tool / interpreter
- Gulp
- NodeJS

Web Hosting (Amazon Web Service)
- AWS Route 53 🌎
- AWS CloudFront ☁️
- AWS Certificate Manager 
- AWS Simple Cloud Storage Solution (S3) 
- AWS Identity and Access Management (IAM)

Software Used
- Microsoft Visual Studio Code (VS Code)
- Adobe Lightroom Classic CC
- Adobe Photoshop CC 2018

## Progressive Web Development Practices
Below is a list of some of the modern development tools that were used and their purposes:
- Gulp is a toolkit that automates painful or time-consuming tasks in the development process. Tasks such as removing metadata from images, concatenating / minifying CSS and Javascript files and automatically perform unit testing and constantly check for syntax errors were done using Gulp.
- Due to the mobile-first approach of modern web apps, the Bootstrap framework is the tool that most developers use to add responsiveness to their applications. Bootstrap was used to make ever component adapt to various screen sizes.
- Amazon Web Services was used to host the web app, store the project files on the cloud and provide a secure / encrypted connection between the client and server.

## Structure of Web App
A modern tool for web development is React. Instead of having one large HTML file with hundreds of line of code, React allows you to create individual components which can be imported into a central location.

``` ruby
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Service/>
      <Packages/>
      <History/>
      <Gallery/>
      <FAQ/>
      <Location/>
      <Contact/>
      <Footer/>
    </div>
  );
}
```

## Notable Features
All places where hours appear on the web app are generated dynamically. A Javascript date object is generated when the page is opened up and depending on the current date it determines whether to display the hours for the Summer league season or the Fall league season. Also in the navbar it tells you if the shop is currently open, closed or the next time it's open, depending on the current season, day of the week and time. 

## How To Use
#### Step 1. Download Project Folder

Download the project folder and make sure you have [NodeJS](https://nodejs.org/en/) installed. 

#### Step 2. Install Dependencies

In [Visual Code Studio](https://code.visualstudio.com) open up a terminal, go to the root directory then type in the following command to install the required dependencies:

``` 
npm install
```
#### Step 3. Run Development Server

Once the dependencies are installed you can run the program. Run the following command in the terminal:
```
npm run start
```

## Screenshots 

<img width="1249" alt="Screen Shot 2019-04-22 at 10 28 55 AM" src="https://user-images.githubusercontent.com/25943238/56508382-b77b9d00-64e9-11e9-9f51-263ede33c730.png">

<img width="1247" alt="Screen Shot 2019-04-22 at 10 30 00 AM" src="https://user-images.githubusercontent.com/25943238/56508396-c1050500-64e9-11e9-991a-8b9faa1905ca.png">

<img width="1250" alt="Screen Shot 2019-04-22 at 10 29 27 AM" src="https://user-images.githubusercontent.com/25943238/56508410-ccf0c700-64e9-11e9-9c59-b70a28248e28.png">

## Credits
I'd like to thank Brian Simmons for helping me get better at bowling and for teaching me a lot more about the sport.

## License  & Copyright
© Timothy Nguyen 2019
