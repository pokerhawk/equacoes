import React from 'react';
import Bhaskara from '../Bhaskara/Bhaskara';
import ProgAritmética from '../ProgAritmetica/ProgAritmetica';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            home:'home'
        }
    }
   
    onClickEvent=()=>{this.setState({home:'Bhaskara'})}
    onClickPA =()=>{this.setState({home:'PA'})}
    onClickReturn =()=>{this.setState({home:'home'})} //NEED changes here

    render(){
        if(this.state.home === 'home'){
            return (
                <div className="equaSegGrau">
                    <ul className='lista'>
                        <h1>Escolha uma formula</h1>
                        <button 
                            id='Bhaskara' 
                            onClick={this.onClickEvent}>
                            Bhaskara
                        </button>
                        <button 
                            id='PA' 
                            onClick={this.onClickPA}>
                            PA
                        </button>
                    </ul>
                </div>
            );
        } else if (this.state.home === 'Bhaskara'){
            return(
                <div>
                    <Bhaskara/>
                    <button onClick={this.onClickReturn}>Voltar ao Início</button>
                </div>
            )
        } else {
            return(
            <div>
                <ProgAritmética/>
                <button onClick={this.onClickReturn}>Voltar ao Início</button>
            </div>
            )
        }
    }
}

export default Home;

