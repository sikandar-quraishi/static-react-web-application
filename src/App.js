import React, { Component } from 'react'
import "./resources/styles.css";

import Featured from './components/featured/index'
import Header from "./components/header_footer/Header";
import VenueNFo from './components/venueNFo'
import Highlight from './components/Highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'

import { Element } from 'react-scroll'




 class App extends Component {
  render() {
    return (
      <div
      className="App"
      style={{ height: "1000px", background: "cornflowerblue" }}
    >
    
      <Header />
    
      <Element name="Featured">
          <Featured />
      </Element>
      
      <Element name="Venue NFO">
         <VenueNFo/> 
      </Element>
      
      <Element name="highlights">
         <Highlight/>
      </Element>

      <Element name="Pricing">
         <Pricing/>
      </Element>

      <Element name="Location">
          <Location/>
      </Element>
      
      <Footer/>
    </div>
    )
  }
}

export default App;