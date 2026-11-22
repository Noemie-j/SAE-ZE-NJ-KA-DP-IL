import { BookOpen } from "lucide-react";
import Bouton from "../../common/Bouton";
import { Carte } from "../../common/Carte/Carte";
import { LienAvecFleche } from "../../common/LienAvecFleche/LienAvecFleche";

import styles from "./Pacing.module.css"

export default function Pacing(){
    return (
        <section className="container section">
            <div className={styles.bloc}>
                <div className={styles.contenu}>
                    <p className="surtitre">VIVRE AU QUOTIDIEN</p>
                    <h2>Faire avec votre énergie, pas contre elle.</h2>
                    <p className="texte">Le pacing aide à adapter le quotidien à l’énergie disponible et à repérer le malaise post-effort.</p>
                    <Bouton to="/pacing" type="primaire">Découvrir le pacing</Bouton>

                    <p className="note">L’information associative ne remplace pas un avis médical.</p>

                </div>

                <Carte>
                    
                    <p>
                        <BookOpen />
                        DE PATIENTS À PATIENTS
                    </p>
                    <h3>Petit guide pratique du pacing</h3>
                    <p>Conçu par des patients. Offert aux nouveaux adhérents.</p>
                    <LienAvecFleche>Découvrir le guide</LienAvecFleche>
                        

                    
                </Carte>
            </div>
        </section>
    )
}