import { Link } from "react-router";

export default function Bouton({to, type="primaire", children}){
    return (
        <Link to={to} className={`bouton bouton-${type}`}>
            {children}
        </Link>
    )
}