import { Link } from "react-router-dom";
import './navbar.css'
import './../../helper.css'
import logo from '../../assets/logo.png'
import {useEffect, useState } from "react";
import { useMediaQuery } from 'usehooks-ts'

interface SectionProps{
     changeSection: (sectionIndex : number) => void
}

export function NavBar ({changeSection} : SectionProps)  {

    const [menuOpen, setMenuOpen] = useState(false);

    const minWidth = useMediaQuery('(min-width: 450px)');

    useEffect(() => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    }, [minWidth])

    return (
        <nav>
            <img src={logo} className="navBar-logo"></img>
            <div className="navBar-menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }
            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className= {menuOpen ? 'navBar-menu--links' : 'navBar-links'}>
                <li>
                    <Link to={'/about'} onClick={() => changeSection(1)}>About</Link>
                </li>
                <li>
                    <Link to={'/projects'} onClick={() => changeSection(2)}>Projects</Link>
                </li>
                <li>
                    <Link to={'/contact'} onClick={() => changeSection(3)}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}