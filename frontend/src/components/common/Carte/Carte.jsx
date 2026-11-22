import styles from "./Carte.module.css"

export function Carte({variant = "normale", className="", children}){
    return (
        <div className={`${styles.carte} ${styles[variant]} ${className}`}>
            {children}
        </div>
    )
}