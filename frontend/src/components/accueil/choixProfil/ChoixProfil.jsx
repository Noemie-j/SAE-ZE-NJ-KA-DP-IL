import {UserRound,HeartHandshake, Stethoscope} from "lucide-react";
import { Carte } from "../../common/Carte";


const profils = [
    {icone: UserRound, titre: "Je suis malade ou je pense l'etre", texte: "Comprendre les symptômes et trouver de l’aide.", lien: "Mes premieres reperes", to: "/comprendre"},
    {icone: HeartHandshake, titre: "J'accompagne un proche", texte: "Mieux comprendre pour soutenir au quotidien.", lien: "Les repères pour les proches", to: "/proches"},
    {icone: Stethoscope, titre: "Je suis professionnel de santé", texte: "Accéder aux ressources et aux formations.", lien: "Les ressources pour les soignants", to: "/proffessionel"}

]
export function ChoixProfil(){
    return (
        <section className="container ">
            <h2>Par ou vous voulez commencer?</h2>
            <ul>
                {
                    profils.map((profil)=>{
                        const Icone = profil.icone;
                        return (
                            <li key={profil.to}>
                                <Carte className="carte-blanc">
                                    <Icone size={22} />
                                    <h3>{profil.titre}</h3>
                                    <p>{profil.texte}</p>
                                    <a href={`${profil.to}`}>{profil.lien}</a>
                                </Carte>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}