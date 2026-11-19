export function Carte({className="", children}){
    return (
        <div className={`carte ${className}`}>
            {children}
        </div>
    )
}