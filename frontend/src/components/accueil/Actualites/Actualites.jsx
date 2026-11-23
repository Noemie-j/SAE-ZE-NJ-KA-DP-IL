import { BookOpenText } from "lucide-react"
import { actualites } from "../../../data/actualites"
import { Carte } from "../../common/Carte/Carte"
import { LienAvecFleche } from "../../common/LienAvecFleche/LienAvecFleche";

export default function Actualites(){
    return (
        <section className="container section">
            <div>
                <p className="surtitre">S’INFORMER, À SON RYTHME</p>
                <h2>Des nouvelles et des repères utiles</h2>
            </div>

            <ul className="grille grille-3">
                {
                    actualites.map((article) =>{

                        const Icone = article.icone;
                        return (
                            
                            <li key={article.to}>
                                <Carte>
                                    <p>
                                        <Icone size={22} />
                                        {article.categorie}
                                    </p>

                                    <time datetime={article.date}>
                                        {article.date}
                                    </time>

                                    <h3>{article.titre}</h3>
                                    <p>{article.resume}</p>
                                    <LienAvecFleche>{article.lien}</LienAvecFleche>
                                </Carte>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}