import { ChoixProfil } from "../components/accueil/choixProfil/ChoixProfil";
import { Hero } from "../components/accueil/hero/Hero";


export function Accueil(){
    return (
        <div className="container">
            <Hero/>  
            <ChoixProfil/>
        </div>


        
        
        
    )
}