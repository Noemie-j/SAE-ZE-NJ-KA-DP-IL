import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import styles from "./LienAvecFleche.module.css"
export function LienAvecFleche({to, children}){
    return (
        <Link to={to} className={styles.lienFleche}>
            <span>{children}</span>
            <ArrowRight size={16}/>
        </Link>
    )
    
}