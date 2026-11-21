import styles from "./Hero.module.css"
export function Hero(){
    return (
        <section className={styles.hero}>
            <div>
                <p className="surtitre">EM/SFC ET COVID LONG</p>
                <h1>Vous n'avez pas à faire ce chemin seul.</h1>
            </div>

            <div>
                <p>L’ASFC vous écoute, vous informe et vous accompagne, à votre rythme.</p>
                <p>Une association de patients, depuis 1998.</p>
            </div>

    </section>
    )
}