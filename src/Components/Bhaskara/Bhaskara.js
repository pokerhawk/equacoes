import React from 'react';
import './Bhaskara.css'

class Bhaskara extends React.Component {

    bhaskara = (coefA, coefB, coefC) => {
        coefA = document.getElementById("coefA").value;
        coefB = document.getElementById("coefB").value;
        coefC = document.getElementById("coefC").value;
        const e2gResposta = document.getElementById("e2gResposta");
        let delta = Math.sqrt((coefB)**2 - 4*coefA*coefC);
        let positivo = (-(coefB) + (delta))/(2*coefA);
        let negativo = (-(coefB) - (delta))/(2*coefA);
        let resposta = `x'=${positivo}
        x"=${negativo}
        delta=${delta}`;
        return e2gResposta.innerText = resposta;
    }
    addEnter = (event) => {
        if(event.key === "Enter"){
            this.bhaskara();
        }
    }
    
    render(){
        return (
            <div className="equaSegGrau">
                <h1>Equação do Segundo grau</h1>
                <p>A:</p>
                <input type="text" id="coefA" placeholder="Coeficiente A" onKeyPress={this.addEnter}/>
                <p>B:</p>
                <input type="text" id="coefB" placeholder="Coeficiente B" onKeyPress={this.addEnter}/>
                <p>C:</p>
                <input type="text" id="coefC" placeholder="Coeficiente C" onKeyPress={this.addEnter}/>
                <p></p>
                <button id="button" onClick={this.bhaskara}>Calcular</button>
                <p id="e2gResposta">Resposta</p>
            </div>
        );
    }
}

export default Bhaskara;