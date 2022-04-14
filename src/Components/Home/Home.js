import React from 'react';
import Bhaskara from '../Bhaskara/Bhaskara';
import ProgAritmética from '../ProgAritmetica/ProgAritmetica';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            home:'Início'
        }
    }
   
    onClickEvent=(event)=>{this.setState({home: event.target.innerHTML})}
    ///////////////////////////////MAKE CHANGES ON THIS IF BELOW////////////////////////
    render(){
        if(this.state.home === 'Início'){
            return (
                <div className="equaSegGrau">
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
                </div>
            );
        } else if (this.state.home === 'Bhaskara'){
            return(
                <div>
                    <Bhaskara/>
                    <button 
                    className='home'//not being used, can delete
                    value={this.className} //not being used, can delete
                    onClick={this.onClickEvent}>
                        Início
                    </button>
                </div>
            )
        } else if(this.state.home === 'PA'){
            return(
            <div>
                <ProgAritmética/>
                <button
                className='home'//not being used, can delete 
                value={this.className}//not being used, can delete
                onClick={this.onClickEvent}>
                    Início
                </button>
            </div>
            )
        }
    }
}

export default Home;

