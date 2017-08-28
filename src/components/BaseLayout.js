import React, { Component } from 'react';
import '../styles/App.css';

class BaseLayout extends Component {
  render() {
    return (
      <div>This should house Header and Footer components and be able to house any children components.</div>
    );
  }
}


class Header extends Component {
  render() {
    return (
      <nav>I am the Navigation Bar</nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>I am the Footer</footer>
    );
  }
}

export default BaseLayout;
