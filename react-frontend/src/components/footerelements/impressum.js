import { useEffect } from "react";

export const Impressum = () => {

    useEffect(() => {

        window.scrollTo(5, 5)

    }, [])


    return (

        <div className="container">

            <div className="row">

                <div className="col-md-6 lg-6 ">

                    <div className="mt-3 mb-3">
                        <h2>Impressum</h2>
                    </div>





                    <div className="mt-2">
                        <p>NVBW - Nahverkehrsgesellschaft</p>
                        <p>Baden-Württemberg mbH</p>
                        <p>Wilhelmsplatz 11</p>
                        <p>D-70182 Stuttgart</p>
                    </div>


                    <h4></h4>


                </div>
            </div>

            <div className="row">
                <div className="col-md-6 lg-6 mt-3">

                    <div className="mt-3 mb-3">
                        <h5>Kontakt</h5>
                    </div>





                    <div className="mt-2">
                        <p>Tel.: 0711 / 23991-0</p>
                        <p>Fax: 0711 / 23991-23</p>
                        <p>E-Mail: info(at)nvbw.de</p>

                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-6 lg-6 mt-3">

                    <div className="mt-3 mb-3">
                        <h5>Haftungsausschluss</h5>
                    </div>





                    <div className="mt-2">
                        <p>
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>

                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-6 lg-6 mt-3">

                    <div className="mt-3 mb-3">
                        <h5>Urheberrecht</h5>
                    </div>





                    <div className="mt-2">
                        <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>

                    </div>

                </div>
            </div>

            



        </div>
    );
}