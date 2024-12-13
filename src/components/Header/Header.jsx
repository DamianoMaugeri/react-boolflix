import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import style from './Header.module.css'

export default function Header() {
    return (
        <header className={`${style.header} container`}>
            <Logo />
            <Nav />
            <Search />
        </header>
    )
}