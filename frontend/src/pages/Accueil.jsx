import AidePersonel from "../components/Accueil/AidePersonel/AidePersonel";
import { ChoixProfil } from "../components/Accueil/ChoixProfil/ChoixProfil";
import { Hero } from "../components/Accueil/Hero/Hero";


export function Accueil(){
    return (
        <>
            <div className="container section">
                <Hero/>  
                <ChoixProfil/>
            </div>

            <AidePersonel />
        </>
        

        
        
        
    )
}