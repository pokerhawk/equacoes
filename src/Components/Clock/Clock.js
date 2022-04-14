import React from "react";
import '../Style/style.css'

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
          <nav className="sticky">
              <ul className="main-nav">
                  <li className="nomeEqua">Equações</li>
                  <li className="push">Current Time: {this.state.date.toLocaleTimeString()}</li>
              </ul>
          </nav>          
      </div>
    );
  }
}

export default Clock;