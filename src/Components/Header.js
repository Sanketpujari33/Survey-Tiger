import React from 'react';
import pawn from '../static/paw.png';

class Header extends React.Component {
    render(){
        return(
            <>
                <div className="heading">
                    <img alt="paw" src ={pawn} />
                    <h1>Survey Tiger</h1>
                </div>
            </>
        );
    }
}

export default Header;