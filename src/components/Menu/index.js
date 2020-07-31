import React from 'react';
import Logo from '../../assets/img/logo.png';
import ButtonLink from '../ButtonLink/'
import './menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="CodeFlix logo" className="Logo"/>
            </a>

            <ButtonLink href="/" className="ButtonLink">
                Novo vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu