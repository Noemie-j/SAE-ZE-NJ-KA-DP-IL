import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function LienAvecFleche({to, children}){
    return (
        <Link to={to} className="lien-fleche">
            <span>{children}</span>
            <ArrowRight size={16}/>
        </Link>
    )
    
}