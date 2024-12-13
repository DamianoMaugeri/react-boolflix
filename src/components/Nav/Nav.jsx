import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import style from './Nav.module.css'

export default function Nav() {

    return (
        <nav>
            <ul className={style.navlink}>
                <li><NavLink to='/' > HOME</NavLink></li>
                <li><NavLink to='/' > FILM</NavLink></li>
                <li><NavLink to='/' > SERIE TV</NavLink></li>
            </ul>

        </nav>
    )
}