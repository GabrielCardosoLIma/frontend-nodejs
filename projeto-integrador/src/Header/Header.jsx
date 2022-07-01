import React from 'react';
import './Header.css';
import Logo from '.././img/logo.png';

function Header(){
    return(
        <div>
            <header>
                <nav className="NH">
                    {/* NH = Nav do Header */}
                    <div>
                        <a href=""><img src={Logo} className="Logo" alt="Logo"/></a>
                    </div>
                    <button>&#9776;</button>
                    <ul className="UH">
                        {/* UH = UL do Header */}
                        <li className="LH"><a href="" className="LIH">Sobre Nós</a></li> 
                        <li className="LH"><a href="" className="LIH">Sofás</a></li>
                        <li className="LH"><a href="" className="LIH">Produtos</a></li>
                        <li className="LH"><a href="" className="LIH">Contato</a></li>   
                        {/* LH,LIH = Li do Header */}
                    </ul>
                </nav>
            </header>
        </div>
    )
} 

export default Header;