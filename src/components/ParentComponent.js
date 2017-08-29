import React, { Component } from 'react';
import ChildComponent from '../components/ChildComponent';
import DisplayComponent from '../components/DisplayComponent';

class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    let whatToSay = e.target.value
    this.setState({whatToSay: whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div className="col-8">
        <form>
          <div className="form-group">
            <input onChange={this.handleInput} type="text" className="form-control" aria-describedby="text input" placeholder="Write Or Do Not Write" />
          </div>
          <div>
            <ChildComponent onClick={this.handleSubmit}/>
          </div>
        </form>
        <DisplayComponent sayWhat={this.state.whatWasSaid}/>
      </div>
    );
  }
}

export default ParentComponent;
