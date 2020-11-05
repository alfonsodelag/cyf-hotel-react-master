import React from "react";
import Header from "./Header"
import Bookings from "./Bookings";
import TourstInfoCards from "./TouristInfoCards";
import SearchResults from "./SearchResults";
import Footer from "./Footer";
import Restaurant from './Restaurant'
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <Header />
      <TourstInfoCards />
      {/* <SearchResults /> */}
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;