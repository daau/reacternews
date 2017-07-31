import React, { Component } from 'react';
import App from './App';

class Wrapper extends Component {
    render(){
        return(
            <div>
                <nav
                    style={{
                        background:"deeppink",
                        fontSize: "20px",
                        padding: "0.5em 1em",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    <i>REACTER NEWS</i>
                </nav>
                <App/>
            </div>
        )
    }

}

export default Wrapper;