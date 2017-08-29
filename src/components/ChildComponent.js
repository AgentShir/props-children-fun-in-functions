import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (
        <div>
          <input type="submit" className="btn btn-primary" onClick={this.props.onClick}/>
        </div>
    );
  }
}

export default ChildComponent;
