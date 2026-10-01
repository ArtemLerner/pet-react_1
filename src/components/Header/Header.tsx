import {MENU} from '../../shared/config/HeadeMenu.ts'
import Logo from '../../assets/logo.png'
import Burger from '../../assets/Burger.svg'
import { Link } from "react-router-dom";

import './Header-module.less'


export function Header() {

    return (
            <header className="header container-big">
                <div className="header-block flex">
                    <HeaderLogo/>
                    <HeaderMenu/>
                </div>
            </header>
    )
}

export function HeaderMenu() {

    const width = window.innerWidth;
    return (
        <>
            {width <= 1024 ?
                (<div className="menu-hide">
                        <img src={Burger} alt="" onClick={(e) => {
                            e.currentTarget.classList.toggle('active');
                        }}/>
                    </div>
                ) : <div className="menu flex">
                    {
                        MENU.map((item) => (
                            <li key={item.path}><Link to={item.path}>{item.label}</Link></li>
                        ))
                    }
                </div>
            }
        </>
    )
}
export function HeaderLogo(){
    return(
            <div className="logo-block">
                <Link to='/'>
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>
    )
}