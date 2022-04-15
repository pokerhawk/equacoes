import { Component } from "react";
import './Footer.css'

class Footer extends Component{
    render(){
        if(this.props.state.home === 'Início'){
            return(
            <footer>
                FOOTER(em progresso...)
            </footer>
            )
        } else{
            return(
                <footer>
                    <button 
                        className='home'//not being used, can delete
                        value={this.className} //not being used, can delete
                        onClick={this.props.onClickEvent}>
                            Início
                    </button>
                </footer>
            )
        }
    }
}

export default Footer;