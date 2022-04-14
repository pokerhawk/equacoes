import React from 'react';
import '../Style/style.css'

class ProgAritmética extends React.Component {

    progAritimetica = (a1, n, r) => {
        a1 = document.getElementById("coefA1").value;
        n = document.getElementById("coefN").value;
        r = document.getElementById("coefR").value;
        let An = +a1+(+n-1)*+r;
        return document.getElementById("paResposta").innerText = `An = ${An}`;
    }

    render(){
        return (
            <div className="equaPA">
                <h1>Progressão Aritmética</h1>
                <input type="text" id="coefA1" placeholder="A1" /><p/>
                <input type="text" id="coefN" placeholder="N" /><p/>
                <input type="text" id="coefR" placeholder="R" /><p/>
                <button id="enterPA" onClick={this.progAritimetica}>Calcular</button>
                <p id="paResposta">Resposta</p>
            </div>
        );
    }
}

export default ProgAritmética;