import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default BaseLayout;
