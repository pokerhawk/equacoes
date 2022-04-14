import { Component } from 'react';
import './App.css';
import './Components/Style/style.css'
import Clock from './Components/Clock/Clock'
import Home from './Components/Home/Home'

class App extends Component {
  render(){
    return (
      <div className="App">
      <Clock/>
      <Home/>
      <footer>
        FOOTER(em progresso...)
        </footer>
      </div>
    )
  }
}

export default App;