import './Main.css';

function Main() {

    return (
        <section>
            <div className="container">
                <h2>Bizning ofis manzillarimiz</h2>

                <div>
                    <form action="" className="office-addresses">
                        <div>
                            <a href="#yunusobod">Yunusobod</a>
                        </div>

                        <div>
                            <a href="#beruniy">Beruniy</a>
                        </div>

                        <div>
                            <a href="#shofayzi">Shofayzi</a>
                        </div>

                        <div>
                            <a href="#xondamir">Xondamir</a>
                        </div>

                        <div>
                            <a href="#sergeliy">Sergeliy</a>
                        </div>

                        <div>
                            <a href="#keles">Keles</a>
                        </div>
                    </form>

                    <div className="location-of-offices-box">
                        <div id='yunusobod' className="yunusobodBox">
                            <h2>Yunusobod ofis</h2>
                            <p>
                                Yunusobod tumani, 18-daxa,
                                <br />
                                orintir: Zuxriniso to'yxonasi
                            </p>

                            <div>
                                <iframe title="This is a unique title" width="100%" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Yunusobod%20district,%20Block%2019%20Yunusobod%20mavzesi,%2019-daha%20Bus%20stop+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                            </div>

                            <div>
                                <span>Bog'lanish uchun </span>
                                <a href="tel:+998951424542">+998 95 142-45-42</a>
                            </div>
                        </div>

                        <div id='beruniy' className="beruniyBox">
                            <h2>Beruniy ofis</h2>
                            <p>
                                Beruniy  metrodan 1.3 km uzoqlikda Farobiy ko'chasida joylashgan,
                                <br />
                                orintir: Beruniy metrodan Karima tomon yurganda To'lqin Akrom o'g'li Masjidiga yetmasdan
                            </p>

                            <div>
                                <iframe title="This is a unique title" width={'100%'} src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=41.349277,%2069.191626+(Beruniy%20Ofis)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                            </div>

                            <div>
                                <span>Bog'lanish uchun </span>
                                <a href="tel:+998951434542">+998 95 143-45-42</a>
                            </div>
                        </div>

                        <div id='shofayzi' className="shofayziBox">
                            <h2>Shofayzi ofis</h2>
                            <p>
                                Nurafshon ko'chasi.
                                <br />
                                orintir: Orginal Non Kabob ro'parasi
                            </p>

                            <div>
                                <iframe title="This is a unique title" width={'100%'} src="https://maps.google.com/maps?width=100%25&amp;height=1400&amp;hl=en&amp;q=41.341733,%2069.242466+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                            </div>

                            <div>
                                <span>Bog'lanish uchun </span>
                                <a href="tel:+998951444542">+998 95 144-45-42</a>
                            </div>
                        </div>

                        <div id='xondamir' className="xondamirBox">
                            <h2>Xondamir ofis</h2>
                            {/* <p>
                                <br />
                                orintir:
                            </p> */}

                            <div>

                            </div>

                            {/* <div>
                                <span>Bog'lanish uchun </span>
                                <a href="tel:+998951444542">+998 95 144-45-42</a>
                            </div> */}
                        </div>

                        <div id='sergeliy' className="sergeliyBox">
                            <h2>Sergiliy ofis</h2>
                            <p>
                                Qo'rg'ontepa ko'chasi
                                <br />
                                orintir: Metro 3-bekat
                            </p>

                            <div>
                                <iframe title="This is a unique title" width={'100%'} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Qo'rg'ontepa%20ko'chasi,%20Sergeli%20+(My%20Business%20Name)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                            </div>

                            <div>
                                <span>Bog'lanish uchun </span>
                                <a href="tel:+998951464542">+998 95 146-45-42</a>
                            </div>
                        </div>

                        <div id='keles' className="kelesBox">
                            <h2>Keles ofis</h2>
                            <p>
                                <br />
                                orintir:
                            </p>

                            <div>

                            </div>

                            {/* <div>
                                <span>Bog'lanish uchun </span>
                                <a href="tel:+998951444542">+998 95 144-45-42</a>
                            </div> */}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Main;