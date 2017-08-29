import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DisplayComponent from '../components/DisplayComponent';

class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
        <Header>
        Navbar
        </Header>
          <DisplayComponent>
          </DisplayComponent>
          {this.props.children}
        <Footer>
        I am the Footer
        </Footer>
      </div>
    );
  }
}

export default BaseLayout;
