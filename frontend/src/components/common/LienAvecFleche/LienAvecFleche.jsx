import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import styles from "./LienAvecFleche.module.css"
export function LienAvecFleche({to, variant, children}){
    return (
        <Link to={to} className={`${styles.lienFleche} ${styles[variant]}`}>
            <span>{children}</span>
            <ArrowRight size={16}/>
        </Link>
    )
    
}