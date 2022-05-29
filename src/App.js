import { Component } from 'react';
import './App.css';
import Clock from './Components/Clock/Clock'
import Footer from './Components/Footer/Footer'
import Bhaskara from './Components/Bhaskara/Bhaskara';
import ProgAritmética from './Components/ProgAritmetica/ProgAritmetica';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        home:'Início'
    }
  }

  onClickEvent=(event)=>{this.setState({home: event.target.innerHTML})}

  render(){
    if(this.state.home === 'Início'){
      return (
        <div className="App">
          <Clock/>
          <ul className='lista'>
            <h1>Escolha uma formula</h1>
            <button 
              id='Bhaskara' //not being used, can delete
              value={this.id}//not being used, can delete
              onClick={this.onClickEvent}>
              Bhaskara
            </button>
            <button 
              id='PA' //not being used, can delete
              value={this.id}//not being used, can delete
              onClick={this.onClickEvent}>
              PA
            </button>
          </ul>
          <Footer state={this.state} onClickEvent={this.onClickEvent}/>
        </div>
      )
    } else if (this.state.home === 'Bhaskara'){
      return(
        <div>
          <Clock/>
          <Bhaskara/>
          <Footer state={this.state} onClickEvent={this.onClickEvent}/>
        </div>
      )
    } else if(this.state.home === 'PA'){
      return(
        <div>
          <Clock/>
          <ProgAritmética/>
          <Footer state={this.state} onClickEvent={this.onClickEvent}/>
        </div>
      )
    }
  }
}

export default App;