import { Link, NavLink } from "react-router-dom";
import Bouton from "../common/Bouton";

export function Header(){
    return (
        <header className="header">
            <div className="container header-inner">
                <Link to="/" className="logo">
                    <span className="logo-p1">asfc</span>
                    <span className="logo-nom">Association Francaise <br />du Syndrome de Fatique Chronique</span>
                </Link>
                <nav>
                    <ul className="nav">
                        <li><NavLink to="/comprendre">Comprendre</NavLink></li>
                        <li><NavLink to="/etre-accompagne">Etre accompagné</NavLink></li>
                        <li><NavLink to="/association">L'association</NavLink></li>
                    </ul>

                </nav>
                <div className="actions-nav">
                    <Bouton to="/adherer" type="primaire">Adhérer</Bouton>
                    <Bouton to="/don" type="secondaire">Faire un don</Bouton>
                </div>
            </div>
        </header>
    )
}