import { Link } from "react-router";

export default function Bouton({to, href, type="primaire", children}){
    const classes = `bouton bouton-${type}`;
    if (href){
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        )
    }
    return (
        <Link to={to} className={classes}>
            {children}
        </Link>
    )
}