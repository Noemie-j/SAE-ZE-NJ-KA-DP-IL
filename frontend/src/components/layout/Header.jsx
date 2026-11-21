import { Link, NavLink } from "react-router-dom";
import Bouton from "../common/Bouton";
import styles from "./Header.module.css"
export function Header(){
    return (
        <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoP1}>asfc</span>
                    <span className={styles.logoNom}>Association Francaise <br />du Syndrome de Fatique Chronique</span>
                </Link>
                <nav>
                    <ul className={styles.nav}>
                        <li><NavLink to="/comprendre">Comprendre</NavLink></li>
                        <li><NavLink to="/etre-accompagne">Etre accompagné</NavLink></li>
                        <li><NavLink to="/association">L'association</NavLink></li>
                    </ul>

                </nav>
                <div className={styles.actionsNav}>
                    <Bouton to="/adherer" type="secondaire">Adhérer</Bouton>
                    <Bouton to="/don" type="primaire">Faire un don</Bouton>
                </div>
            </div>
        </header>
    )
}