import { MapPin, Phone } from "lucide-react";
import { Carte } from "../../common/Carte/Carte";
import Bouton from "../../common/Bouton";
import { LienAvecFleche } from "../../common/LienAvecFleche/LienAvecFleche";

import styles from "./AidePersonel.module.css"

export default function AidePersonel(){
    return (
        <section className="container section">
            <h2 className="titre">Besoin d'en parler ? Nous sommes là</h2>
            <div className={styles.solutions}>
                <Carte variant="mise-en-avant">
                    <div className={styles.entete}>
                        <Phone size={26}></Phone>
                        <h3>Une écoute par des benevoles</h3>
                    </div>

                    <div className={styles.contact}>
                        <p className={styles.numero}>03 27 27 44 99</p>

                        <div className={styles.creneau}>
                            <p className="creneau-jour">Le lundi de 14 à 16h</p>
                            <p className="creneau-detail">Avec Bernard | hors jours fériés</p>
                        </div>
                    </div>

                    <p className="note">Vous pouvez appeler depuis toutes les régions</p>

                    <div className={styles.actions}>
                        <Bouton href="tel:+3327274499" className="primaire">
                            <Phone size={20} />
                            Appeler l'accueil téléphonique
                        </Bouton>
                        <LienAvecFleche to="/creneau" variant="collee">Voir tous les crénaux</LienAvecFleche>
                    </div>
                </Carte>
                
                <Carte>
                    <MapPin size={26} />
                    <h3>Un contact près de chez vous</h3>
                    <p>Nos délégations vous orientent et vous accompagnent.</p>
                    <LienAvecFleche to="/delegations" variant="collee">Trouver un contact en région</LienAvecFleche>
                </Carte>
            </div>
        </section>
    )
    
}