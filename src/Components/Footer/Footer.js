import { Component } from "react";
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <footer>
                FOOTER(em progresso...)
                <button 
                    className='home'//not being used, can delete
                    value={this.className} //not being used, can delete
                    onClick={this.onClickEvent}>
                        Início
                </button>
            </footer>
        )
    }
}

export default Footer;