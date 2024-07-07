import './Main.css';

function Main() {

    return (
        <section>
            <div className="container">
                <h2>Bizning ofis manzillarimiz</h2>

            <div>
                <form action="" className="office-addresses">
                    <div>
                        <input type="radio" name="ofis" id="yunusobod" value={'Yunusobod'} />
                        <label htmlFor="yunusobod">Yunusobod</label>
                    </div>
                    <div>
                        <input type="radio" name="ofis" id="beruniy" />
                        <label htmlFor="beruniy"><a href="#beruniy">Beruniy</a></label>
                    </div>
                    <div>
                        <input type="radio" name="ofis" id="shofayzi" value={'Shofayzi'} />
                        <label htmlFor="shofayzi">Shofayzi</label>
                    </div>
                    <div>
                        <input type="radio" name="ofis" id="xondamir" />
                        <label htmlFor="xondamir">Xondamir</label>
                    </div>
                    <div>
                        <input type="radio" name="ofis" id="sergiliy" />
                        <label htmlFor="sergiliy">Sergiliy</label>
                    </div>
                    <div>
                        <input type="radio" name="ofis" id="keles" />
                        <label htmlFor="keles">Keles</label>
                    </div>
                </form>

                <h2 id='#beruniy'>Beruniy ofis</h2>
                <p>
                    Beruniy metrodan 1.3 km uzoqlikda Farobiy ko'chasida joylashgan,
                    orintir: Beruniy metrodan Farobiy ko'chaga qarab yurganda To'lqin Akrom o'g'li Masjidiga yetmasdan
                </p>

                <div>
                    <iframe style={{ width: "100%" }} src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=41.349277,%2069.191626+(Beruniy%20Ofis)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                    <a href="https://www.gps.ie/">gps devices</a>
                </div>

                <div>
                    <span>Bog'lanish uchun </span>
                    <a href="tel:998951434542">+998 95 143-45-42</a>
                </div>
            </div>

            </div>
        </section>
    );
}

export default Main;