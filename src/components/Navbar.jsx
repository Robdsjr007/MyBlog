import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}>
            <NavLink to="/" className={styles.brand}>
                My<span>Blog</span>
            </NavLink>
            <article className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`} onClick={toggleMenu}>
                <li></li>
                <li></li>
                <li></li>
            </article>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Feed</NavLink>
                </li>
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")}>Novo post</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>Dashboard</NavLink>
                        </li>
                    </>
                )}
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
