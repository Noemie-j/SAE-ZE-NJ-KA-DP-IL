import {UserRound,HeartHandshake, Stethoscope} from "lucide-react";
import { Carte } from "../../common/Carte";
import { LienAvecFleche } from "../../common/LienAvecFleche";


const profils = [
    {icone: UserRound, titre: "Je suis malade ou je pense l'etre", texte: "Comprendre les symptômes et trouver de l’aide.", lien: "Mes premieres reperes", to: "/comprendre"},
    {icone: HeartHandshake, titre: "J'accompagne un proche", texte: "Mieux comprendre pour soutenir au quotidien.", lien: "Les repères pour les proches", to: "/proches"},
    {icone: Stethoscope, titre: "Je suis professionnel de santé", texte: "Accéder aux ressources et aux formations.", lien: "Les ressources pour les soignants", to: "/proffessionel"}

]
export function ChoixProfil(){
    return (
        <section>
            <h2 className="titre-profil">Par ou vous voulez commencer?</h2>
            <ul className="grille grille-3">
                {
                    profils.map((profil)=>{
                        const Icone = profil.icone;
                        return (
                            <li key={profil.to}>
                                <Carte className="carte-blanc">
                                    <Icone size={22} className="icone" />
                                    <h3>{profil.titre}</h3>
                                    <p className="texte-doux">{profil.texte}</p>
                                    <LienAvecFleche to={profil.to}>{profil.lien}</LienAvecFleche>
                                </Carte>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}