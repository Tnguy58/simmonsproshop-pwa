import React from 'react';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import Packages from './components/packages'
import History from './components/history';
import Gallery from './components/gallery';
import FAQ from './components/faq';
import Location from './components/location';
import Service from './components/service';
import Footer from './components/footer';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Service />
      <Packages />
      <History />
      <Gallery />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
