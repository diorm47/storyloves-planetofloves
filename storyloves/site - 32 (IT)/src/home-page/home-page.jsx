import React, { useEffect, useState } from "react";
import "./home-page.css";

import Modal from "../components/modal/modal";
import "../assets/css/tooltipster.css";
import "../assets/css/tooltipster-light.css";
import "../assets/css/normalize.css";
import "../assets/css/selectric.css";
import "../assets/css/jquery.mCustomScrollbar.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/bar-ui.css";
import "../assets/css/360player.css";
import "../assets/css/emoji.css";
import "../assets/css/blueimp-gallery.css";
import "../assets/css/cropper.min.css";
import "../_themes/russiandate/css/grids.css";
import "../_themes/russiandate/css/font.css";
// import "../_themes/russiandate/css/user_russiandate.css";
import "../_themes/russiandate/css/user.css";
import malePng from "../assets/img/male.jpg";
import visaPng from "../assets/img/visa.png";
import mastercard from "../assets/img/mastercard.png";
import whatsapp_icon from "../assets/whatsapp-icon.png";
import messanger_icon from "../assets/messanger-png.png";
import blur from "../assets/phone-blur.gif";
import length_1 from "../assets/length-1.jpg";
import length_2 from "../assets/length-2.jpg";
import length_3 from "../assets/length-3.jpg";
import profile from "../assets/profile.gif";

function HomePage() {
  const [modal1, setModal1] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const setModal = () => {
    setModal1(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header>
        <div className="mobile_background"></div>
        {/* pointer_none */}
        <div onClick={setModal}>
          <div class="wrapper pointer_none">
            <div class="header">
              <div class="pure-c">
                <div class="pure-g pure-g--middle">
                  <div class="pure-u header__left">
                    <a href="/" class="logo svgEl" data-svg="logoImg#logoText">
                      <span>StoryLoves</span>
                      <svg class="svg__logoImg">
                        <use href="#svg__logoImg"></use>
                      </svg>
                      <svg class="svg__logoText">
                        <use href="#svg__logoText"></use>
                      </svg>
                    </a>
                  </div>
                  <div class="pure-u header__right">
                    <div class="menu">
                      <div class="burger">
                        <div class="burger__item"></div>
                      </div>
                      <a
                        href="/chat"
                        class="menu__item hidden-md hidden-lg hidden-xl svgEl"
                        data-svg="message"
                      >
                        {!isVisible || <sup class="count-mes">1</sup>}

                        <span>Messaggi</span>
                        <svg class="svg__message">
                          <use href="#svg__message"></use>
                        </svg>
                      </a>
                      <a
                        href="/nearby"
                        class="menu__item svgEl"
                        data-svg="location"
                      >
                        <span>Persone</span>
                        <svg class="svg__location">
                          <use href="#svg__location"></use>
                        </svg>
                      </a>
                      <a
                        href="/search"
                        class="menu__item svgEl"
                        data-svg="search"
                      >
                        <span>Cerca</span>
                        <svg class="svg__search">
                          <use href="#svg__search"></use>
                        </svg>
                      </a>

                      <a
                        href="/premium"
                        onclick="ymc('premium_from_header')"
                        class="menu__item prem"
                      >
                        <span data-svg="premium_v2" class="svgEl">
                          Premium
                          <svg class="svg__premium_v2">
                            <use href="#svg__premium_v2"></use>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="main">
              <div class="pure-c">
                <div class="pure-g">
                  <div class="pure-u-1 pure-u-md-1-3 pure-u-xl-1-4">
                    <div class="user site-bar">
                      <div class="user__info">
                        <div class="user__photo js_add_photo">
                          <div
                            class="user__photo--lock hidden tooltipstered svgEl"
                            data-svg="lock"
                            data-tooltip="tooltip-top"
                            data-content="Foto privata"
                          >
                            <svg class="svg__lock">
                              <use href="#svg__lock"></use>
                            </svg>
                          </div>
                          <img
                            src={malePng}
                            data-all-user-photo="0"
                            data-max-photo="30"
                          />
                        </div>
                        <div class="user__cell">
                          <div class="user__name">user</div>

                          <a
                            href="/premium"
                            onclick="ymc('getpremium_menu_button')"
                            class="user__novip"
                          >
                            Passa a Premium
                          </a>
                        </div>
                        <div class="user__button">
                          <div>
                            {/* <a
                              href="/premium"
                              onclick="ymc('click_balance_sidebar_premium')"
                            >
                              <span class="coins_bl">0</span>
                            </a> */}
                          </div>
                          <a
                            href="/user/profile"
                            class="user__edit tooltipstered svgEl"
                            data-tooltip="tooltip-top"
                            data-svg="edit"
                            data-content="Modifica profilo"
                          >
                            <svg class="svg__edit">
                              <use href="#svg__edit"></use>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="user__line"></div>
                      <div
                        class="user__links mCS_destroyed"
                        style={{ overflow: "visible" }}
                      >
                        <a href="/id287833666" class="user__link">
                          <span data-svg="people" class="svgEl">
                            <svg class="svg__people">
                              <use href="#svg__people"></use>
                            </svg>
                          </span>
                          <span>Visualizza profilo</span>
                        </a>
                        <a href="/user/photo" class="user__link">
                          <span data-svg="photo" class="svgEl">
                            <svg class="svg__photo">
                              <use href="#svg__photo"></use>
                            </svg>
                          </span>
                          <span>Le mie foto</span>
                        </a>
                        <a href="/chat" class="user__link">
                          <span data-svg="message" class="svgEl">
                            {!isVisible || <sup class="count-mes">1</sup>}
                            <svg class="svg__message">
                              <use href="#svg__message"></use>
                            </svg>
                          </span>
                          <span>Messaggi</span>
                        </a>

                        <a href="/favorites" class="user__link">
                          <span data-svg="like" class="svgEl">
                            <svg class="svg__like">
                              <use href="#svg__like"></use>
                            </svg>
                          </span>
                          <span>Preferiti</span>
                        </a>
                        <a href="/guests" class="user__link">
                          <span data-svg="eye" class="svgEl">
                            <svg class="svg__eye">
                              <use href="#svg__eye"></use>
                            </svg>
                          </span>
                          <span>Ospiti</span>
                        </a>
                        <a href="/settings" class="user__link">
                          <span data-svg="setting" class="svgEl">
                            <svg class="svg__setting">
                              <use href="#svg__setting"></use>
                            </svg>
                          </span>
                          <span>Impostazioni</span>
                        </a>
                        <a href="/logout" class="user__link">
                          <span data-svg="exit" class="svgEl">
                            <svg class="svg__exit">
                              <use href="#svg__exit"></use>
                            </svg>
                          </span>
                          <span>Esci</span>
                        </a>
                      </div>
                    </div>

                    <div class="premium site-bar">
                      <div class="premium__title">
                        <b>$</b> Account premium
                      </div>
                      <div class="premium__img svgEl" data-svg="premium-img_v2">
                        <svg class="svg__premium-img_v2">
                          <use href="#svg__premium-img_v2"></use>
                        </svg>
                      </div>
                      <div class="premium__text">
                        Un account Premium ti permette di sfruttare tutte le
                        funzionalità di StoryLoves. Conosci persone, vedi foto,
                        chatta e fai nuove amicizie!
                      </div>
                      <a
                        href="/premium"
                        onclick="ym(56503840,'reachGoal','getpremium_banner')"
                        class="premium__button button"
                      >
                        <span>Passa a Premium</span>
                      </a>
                    </div>
                  </div>
                  <div class="pure-u-1 pure-u-md-2-3 pure-u-xl-3-4">
                    <div class="content">
                      <div class="pure-g">
                        <div class="pure-u-1 pure-u-lg-1-3">
                          <div class="profile__info profile--mob">
                            <div class="profile__name ">
                              <span class="js_profile__name">Francesca</span>,
                              29
                            </div>
                            <div class="profile__info--box">
                              <div
                                class="profile__location svgEl"
                                data-svg="location:before"
                              >
                                <svg class="svg__location">
                                  <use href="#svg__location"></use>
                                </svg>

                                <span>~25 km da te</span>
                              </div>

                              <div class="profile__status profile__status--online">
                                <span>Online</span>
                              </div>
                            </div>
                          </div>
                          <div class="pure-g">
                            <div class="pure-u-2-3 pure-u-lg-1">
                              <div class="profile__photo ">
                                <a
                                  href="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/8f972c7d7c8cdee9de030e263e64b6f5/7b9a8ac20ac5e6635cdc1237004e8cac/184e6d22800f44a58372a1dbffc339cb.jpg"
                                  data-gallery=""
                                  class="profile__mainPhoto"
                                >
                                  <img src={profile} />
                                </a>
                              </div>
                            </div>

                            <div class="pure-u-1-3 pure-u-lg-1 mb-20">
                              <div class="pure-g">
                                <div class="pure-u-1 pure-u-lg-1-3 profile__photo--1">
                                  <a
                                    href="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/ef7287c65192c17093ba953d6b733f0c/7b9a8ac20ac5e6635cdc1237004e8cac/7c4d2342a684ea1da19ae7bcefb1ad88.jpg"
                                    class="profile__photo--min"
                                    data-gallery=""
                                  >
                                    <img
                                      src={length_1}
                                      class="photo__img--contour"
                                    />
                                  </a>
                                </div>

                                <div class="pure-u-1 pure-u-lg-1-3 profile__photo--2 profile__photo--mob">
                                  <a
                                    href="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/0dae983174765c971d0654781e5c32b1/7b9a8ac20ac5e6635cdc1237004e8cac/daaa46081283412aa0445e3a5c6567a7.jpg"
                                    class="profile__photo--min"
                                    data-gallery=""
                                  >
                                    <span>+4</span>

                                    <img
                                      src={length_2}
                                      class="photo__img--contour"
                                    />
                                  </a>
                                </div>

                                <div class="pure-u-1 pure-u-lg-1-3 profile__photo--3 profile__photo--desc">
                                  <a
                                    href="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/c92d32f89b0ab26a6073901440f6baa8/7b9a8ac20ac5e6635cdc1237004e8cac/4a3afe6eacd19cd8cc20d3d78e3572dd.jpg"
                                    class="profile__photo--min"
                                    data-gallery=""
                                  >
                                    <span>+3</span>

                                    <img
                                      src={length_3}
                                      class="photo__img--contour"
                                    />
                                  </a>
                                </div>

                                <a
                                  href="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/9ac1dd65600c5e5e52cb7dc5eab8dce6/7b9a8ac20ac5e6635cdc1237004e8cac/91ab19f9b5df2dda88c3f6e65611af6d.jpg"
                                  class="hidden"
                                  data-gallery=""
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/4d2abac1941415717bedaa33434d5843/7b9a8ac20ac5e6635cdc1237004e8cac/009cc285273596725492c614d2332b72.jpg" />
                                </a>

                                <a
                                  href="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/645a742c8f16235d35aefcc64325bcba/7b9a8ac20ac5e6635cdc1237004e8cac/3dfdb6a6cad7a13cef4de9beb9d7ab34.jpg"
                                  class="hidden"
                                  data-gallery=""
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/34c74e3ef923479afc149c3b785d8156/7b9a8ac20ac5e6635cdc1237004e8cac/3713867f687e30403f64eaf7fcafbe12.jpg" />
                                </a>

                                <a
                                  href="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/f96956952750e7c88c32cfcb26c59e48/7b9a8ac20ac5e6635cdc1237004e8cac/9327580ee0770b33419ea129ca96c0fd.jpg"
                                  class="hidden"
                                  data-gallery=""
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/195bae3b08133035d604581b24f2b794/7b9a8ac20ac5e6635cdc1237004e8cac/a427b8567f3869cd7f1b0f417b02a941.jpg" />
                                </a>
                              </div>
                            </div>
                          </div>

                          <a
                            href="/chat/253967192"
                            class="profile__button button profile__button--mes svgEl"
                            data-svg="message:before"
                          >
                            <svg class="svg__message">
                              <use href="#svg__message"></use>
                            </svg>
                            Invia messaggio
                          </a>

                          <div class="profile__gift custom_blocks">
                            <img src={whatsapp_icon} alt="phone_icon" />
                            <img
                              src={messanger_icon}
                              className="messanger_icon"
                              alt="messanger_icon"
                            />
                            <span class="profile__button--text">
                              Contatto aperto
                            </span>
                          </div>

                          <div class="profile__gift custom_blocks">
                            <img src={whatsapp_icon} alt="whatsapp_icon" />

                            <span class="profile__button--text">+39</span>
                            <img src={blur} alt="blur" className="blur_gif" />
                          </div>

                          <script></script>
                        </div>

                        <div class="pure-u-1 pure-u-lg-2-3">
                          <div class="profile__info profile--desc">
                            <div class="profile__name">Francesca, 29</div>
                            <div class="profile__info--box">
                              <div
                                class="profile__location svgEl"
                                data-svg="location:before"
                              >
                                <svg class="svg__location">
                                  <use href="#svg__location"></use>
                                </svg>

                                <span>~25 km da te</span>
                              </div>

                              <div class="profile__status profile__status--online">
                                <span>Online</span>
                              </div>
                            </div>
                            <div class="content__line"></div>
                          </div>
                          <div class="profile__label">Cerco</div>
                          <div class="profile__label--text">
                            un uomo tra i 22 e i 65
                          </div>
                          <div class="profile__label">
                            Informazioni su di te o sul tuo partner
                          </div>
                          <div class="profile__label--text">
                            <div id="about_me_text">
                              descriversi sia qui che nella vita normale è solo
                              una perdita di tempo, ci si conosce pian piano...
                              NON SOPPORTO LA GENTE BANALE, MI PIACEREBBE POTER
                              CONVERSARE CON I PROFILI INVISIBILI DATO CHE NON
                              AVETE LE PALLE PER MOSTRARVI...
                            </div>
                          </div>
                          <div class="profile__label">
                            Scopo della conoscenza
                          </div>
                          <ul class="profile__label--text">
                            <li>Nuove amicizie</li>

                            <li>Relazioni sentimentali</li>

                            <li>Corrispondenza</li>

                            <li>Chat</li>

                            <li>Relazioni aperte</li>
                          </ul>
                          <div class="profile__label">
                            Informazioni aggiuntive:
                          </div>
                          <div class="profile__label--table">
                            <div class="profile__label--row">
                              <div class="profile__label--cell profile__label--title">
                                Capelli
                              </div>
                              <div class="profile__label--cell">Castani</div>
                            </div>

                            <div class="profile__label--row">
                              <div class="profile__label--cell profile__label--title">
                                Socievolezza
                              </div>
                              <div class="profile__label--cell">
                                Aperta a conoscere persone interessanti
                              </div>
                            </div>

                            <div class="profile__label--row">
                              <div class="profile__label--cell profile__label--title">
                                Stato di relazione
                              </div>
                              <div class="profile__label--cell">Single</div>
                            </div>

                            <div class="profile__label--row">
                              <div class="profile__label--cell profile__label--title">
                                Orientamento sessuale
                              </div>
                              <div class="profile__label--cell">
                                Eterosessuale
                              </div>
                            </div>

                            <div class="profile__label--row">
                              <div class="profile__label--cell profile__label--title">
                                Fumatore
                              </div>
                              <div class="profile__label--cell">
                                Non fumo e non mi piacciono i fumatori
                              </div>
                            </div>

                            <div class="profile__label--row">
                              <div class="profile__label--cell profile__label--title">
                                Automobile
                              </div>
                              <div class="profile__label--cell">No</div>
                            </div>

                            <div class="profile__label--row">
                              <div class="profile__label--cell profile__label--title">
                                Carattere
                              </div>
                              <div class="profile__label--cell">
                                Nessuno si lamenta
                              </div>
                            </div>

                            <div class="profile__label--row">
                              <div class="profile__label--cell profile__label--title">
                                Segno zodiacale
                              </div>
                              <div class="profile__label--cell">Ariete</div>
                            </div>
                          </div>
                          <div class="profile__label">Interessi</div>
                          <div class="profile__label--text form__interests">
                            <a
                              href="/search/interest/57fcc046cf1e8c601809d490"
                              class="form__interest"
                            >
                              <span>Fare fotografie</span>
                            </a>

                            <a
                              href="/search/interest/57fcc00ecf1e8c601809d3ab"
                              class="form__interest"
                            >
                              <span>Acqua di colonia</span>
                            </a>

                            <a
                              href="/search/interest/57fcbfdbcf1e8c601809d27e"
                              class="form__interest"
                            >
                              <span>Ridere e scherzare</span>
                            </a>

                            <a
                              href="/search/interest/57fcc164cf1e8c601809d88d"
                              class="form__interest"
                            >
                              <span>Musica rock</span>
                            </a>

                            <a
                              href="/search/interest/57fcbff5cf1e8c601809d332"
                              class="form__interest"
                            >
                              <span>Posti al sole</span>
                            </a>

                            <a
                              href="/search/interest/57fcc164cf1e8c601809d88e"
                              class="form__interest"
                            >
                              <span>Ginnastica</span>
                            </a>

                            <a
                              href="/search/interest/57fcc054cf1e8c601809d4c4"
                              class="form__interest"
                            >
                              <span>Film e Programmi TV</span>
                            </a>

                            <a
                              href="/search/interest/57fcc03dcf1e8c601809d466"
                              class="form__interest"
                            >
                              <span>Abiti </span>
                            </a>

                            <a
                              href="/search/interest/57fcbfeecf1e8c601809d2f6"
                              class="form__interest"
                            >
                              <span>Capelli lunghi</span>
                            </a>

                            <a
                              href="/search/interest/57fcbfdbcf1e8c601809d281"
                              class="form__interest"
                            >
                              <span>Leggere libri</span>
                            </a>

                            <a
                              href="/search/interest/57fcbff6cf1e8c601809d33a"
                              class="form__interest"
                            >
                              <span>Viaggiare</span>
                            </a>

                            <a
                              href="/search/interest/57f72e31cf1e8c419176ea9a"
                              class="form__interest"
                            >
                              <span>Arte</span>
                            </a>

                            <a
                              href="/search/interest/57fcbfeccf1e8c601809d2e3"
                              class="form__interest"
                            >
                              <span>Make Up</span>
                            </a>

                            <a
                              href="/search/interest/56f528a2778ead2977c7a509"
                              class="form__interest"
                            >
                              <span>Cinema</span>
                            </a>

                            <a
                              href="/search/interest/57fcbfdecf1e8c601809d29c"
                              class="form__interest"
                            >
                              <span>Viaggiare nei fine settimana</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div id="get_premium_popup" class="popup popup__new">
                        <div class="popup__box">
                          <div class="popup__close"></div>
                          <div class="premium__title"> Account premium</div>
                          <div
                            class="premium__img svgEl"
                            data-svg="premium-img_v2"
                          >
                            <svg class="svg__premium-img_v2">
                              <use href="#svg__premium-img_v2"></use>
                            </svg>
                          </div>
                          <div class="premium__text">
                            Condividi le tue foto private direttamente nelle
                            chat con un abbonamento Premium.
                          </div>
                          <a
                            href="/premium"
                            onclick="ymc('premium_button_chat_send_photo')"
                            class="premium__button button"
                          >
                            <span>Passa a Premium</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer">
              <div class="pure-c">
                <div class="pure-g footer__top">
                  <div class="pure-u-1  pure-u-md-5-7 pure-u-lg-5-6 ">
                    <div class="footer__menu">
                      <div class="footer__list">
                        <a href="/terms">Condizioni di utilizzo</a>
                      </div>
                      <div class="footer__list">
                        <a href="/policy">Privacy</a>
                      </div>

                      <div class="footer__list">
                        <a href="/payments">Pagamento</a>
                      </div>

                      <div class="footer__list">
                        <a href="/contacts">Informazioni di contatto</a>
                      </div>
                      <div class="footer__list">
                        <a href="/about">Chi siamo</a>
                      </div>
                      <div class="footer__list">
                        <a href="/imprint">Imprint</a>
                      </div>
                      <div class="footer__list">
                        <a href="/help">Servizio di assistenza</a>
                      </div>
                    </div>
                  </div>

                  <div class="pure-u-1 pure-u-md-2-7 pure-u-lg-1-6">
                    <div class="footer__payment">
                      <img src={visaPng} />
                      <img src={mastercard} />
                    </div>
                  </div>
                </div>
                <div class="footer__table">
                  <div class="footer__copyright">
                    Copyright © StoryLoves 2023
                  </div>
                  <div class="footer__info">
                    UAB Softeka 304873072, Saltkalviu g. 64-23, Vilnius, 02175,
                    LITHUANIA,
                    <br />
                    Landscape Trends LP NL000408 Suite 7030 6 Margaret Street,
                    Newry, County Down, Northern Ireland, BT34 1DF
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="popup_buy_credits"
            className="popup popup__new popup--gifts pointer_none"
          >
            <div className="popup__box scrollBar">
              <div className="popup__close"></div>
              <div className="popup__title">Buy Credits</div>
              <div className="popup__text">
                <div className="text-center giftsItems__label">
                  You don't have enough credits.
                </div>
                <div className="text-center giftsItems__label">
                  <span className="coins_bl" style={{ color: "#fff" }}>
                    1
                  </span>{" "}
                  = 1 sms
                </div>
                <div className="form__row">
                  <button
                    type="button"
                    className="form__button button js_buy_tokens"
                  >
                    Buy Credits
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="popup_photo_buy_credits"
            className="popup popup__new popup--gifts pointer_none"
          >
            <div className="popup__box scrollBar">
              <div className="popup__close"></div>
              <div className="popup__title">Buy Credits</div>
              <div className="popup__text">
                <div className="ph-row">
                  {/* <img src="/_themes/russiandate/img/photos.png" /> */}
                </div>
                <div className="text-center giftsItems__label">
                  The photo is hidden. You can view it for 4 credits.
                </div>
                <div className="text-center">
                  <div className="cr_info">4</div>
                </div>
                <div className="modal-hr"></div>
                <div className="text-center white_color svg_inside">
                  <div className="cr_info sm">3</div>
                  for
                  <div className="dib">
                    <span data-svg="premium_v2">Premium</span>
                  </div>
                </div>
                <div className="form__row">
                  <button
                    type="button"
                    className="form__button button js_buy_tokens"
                  >
                    Buy Credits
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="popup_buy_credits_attention"
            className="popup popup__new popup--gifts pointer_none"
          >
            <div className="popup__box scrollBar">
              <div className="popup__close"></div>
              <div className="popup__title">Attention!</div>
              <div className="popup__text">
                <div className="ph-row">
                  {/* <img src="/_themes/russiandate/img/attention_ph.png" /> */}
                </div>
                <div className="text-center giftsItems__label">
                  Want to see more? You'll be charged 4 credits.
                </div>
                <br />
                <br />
                <div className="form__row">
                  <button
                    type="button"
                    className="form__button button js_buy_photo"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="popup_buy_credits_for_gifts"
            className="popup popup__new popup--gifts pointer_none"
          >
            <div className="popup__box scrollBar">
              <div className="popup__close"></div>
              <div className="popup__title">Buy Credits</div>
              <div className="popup__text">
                <div className="text-center giftsItems__label">
                  You don't have enough credits.
                </div>
                <div className="form__row">
                  <button
                    type="button"
                    className="form__button button js_buy_tokens_for_gifts"
                  >
                    Buy Credits
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="popup__faq_mes" className="popup pointer_none">
            <div className="popup__box">
              <div className="popup__close"></div>
              <div className="popup__title">Thank you!</div>
              <div className="popup__text">
                The response will be sent to the specified address
              </div>
            </div>
          </div>

          <div id="popup__payment_error" className="popup pointer_none">
            <div className="popup__box">
              <div className="popup__close"></div>
              <div className="popup__text">
                An error occurred during payment! Please check your details and
                try again.
                <a href="khj" className="js_pay_retry">
                  Try to pay again
                </a>
              </div>
            </div>
          </div>

          <div
            id="popup__payment_success"
            data-click="false"
            className="popup popup__new pointer_none"
          >
            <div className="popup__box popup__box--dis2">
              <div className="popup__close"></div>
              <div className="premium__title">Congratulations!</div>
              <div className="premium__text">
                Premium Account is enabled. Now you can communicate and meet new
                people without limitations!
              </div>
              <a href="/online" className="premium__button button">
                <span>Yey! Start communication.</span>
              </a>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svgSprite pointer_none"
          >
            <symbol id="svg__logoImg" viewBox="0 0 200 257">
              <path d="M144 144l-1 6h-1c-1-9-3-9-11-11v9l2 1 2-1 8 5v1l-1 1h-1l-5-4-4 1-3 3h-2l-2 4h-1l1-4h-2c-1 3-3 7-1 11l1 1a1897 1897 0 013-4l1 1v3l2-2h2v2l-1 2 1 1 7-1-3 4-7-4-4 1c0 3-3 5-2 8l3 2v1l-2 5 2-1v3l2 1-4 6h-1-1l2-6h-1l-6 6h-1l-1-4h-2l-2 6c1 2 2 2 4 2v3h-5l-1 3-4 3v4l-2 5h-5c0 3-3 2-4 4l-2 7-4 3c-3 4-2 10-4 14 0 2-2 3-3 4l-1 8h-1-1l4-15 2-10c3-6 6-11 6-19 1-1 2-1 2-3l1-11h4l4-4h4c2-1 6-10 5-11l-1-1 2-4c-2-2 2-17 4-19l1 1c1 5-5 8-3 13l1 1c4-2 2-5 3-8l3-3 1-6c0-2 6-9 8-10l1-8-1-3 1-1 3 1c2-1 3-5 3-8h-1l-3 1v-1l6-13 2-1 2-3 2 4 6-1c1-4 3-6 2-11h-1l-3 1v-4c-4 1-3 5-2 8l-1 1h-2v-1-6l4-7c1 2 2 3 4 3l2-1 2 3 3-1c0-1 1-3 3-3v-1c-2-2-3-6-6-5l-2 4h-1v-1c0-4 4-4 6-7v-4c1-3 5-4 6-7 2-6 4-13 8-18l6-7 6-18c5-13-6-21-19-19l-1 3c-3-1-3 1-5 2h-4c-3 1-5 6-8 8l-5 1-4 5c-3 2-8 1-12 3 0 3 2 6 1 9-3 6-6 3-9 5l-2 3-4 3-1 5-4 3v3l-4 3-3-2-3 2-2-1-3 2h-2l-1-3c-6-1-10-2-16-5-4-1-8-5-13-5-5 4-18 0-21 6l-4 14c-2 10-7 11-4 23l-2 9 1 17 9 34c3 9 10 17 13 25 2 6 3 12 6 17l3 3 5 11 2 2 2 8c0 2 3 3 3 5v1l-4-4v1c1 5 4 10 7 14l-1 2h-1-1c-1-7-9-16-13-21l-15-21-4-4-1-4-11-12-1-6c-2-4-5-7-6-11 3-4 2-11-2-14-2 0-2 2-3 3l-1-1-3-5-1-11-2-6c-1-5-5-10-6-16h1l4-1c1-5-3-9-4-12H2l-1 1H0l2-4 1-7-2-3c2-1 3-3 3-6-3-4 0-6 1-10l-1-8 3-2v-6l7-18h2c6-11 14-19 25-24 3-1 6-5 10-4l2 2 3-1v4l4-3 3 1 7 9 2-1c2 1 3 3 4 6h1l3-1c6 2 6 10 10 13l2-1c1-3 4-3 6-6l7-8 15-9c3-1 5-5 8-7l4-1 12-6 4 1 8-2c7-4 13-3 20-1l5 1c6 5 11 11 14 19a4014 4014 0 002 5l3 13h-1c-4 2 0 4 1 6l-1 5c-1 4-5 7-9 9l-1 7c0 1 2 2 1 3-2 5-7 9-8 15h-2c-1 2-1 5-3 6h-1l-1-3-5 1c-1 0-2 4 0 5 2 2 4 0 7 0v2l-4 2v2h-3l-2 4h-1c0-2-2-5-4-4l-1 1v2l1 1c-5 0-6 3-9 5l2 3h1l1-1 3 1 5-4 1 1c0 4-3 4-6 6l-2 3-2 1c-1-2-3-3-6-3l-1 4 10 3-1 2h-5c0-2-1-2-2-3h-1c0 2 0 3-2 3l-3 1v2l2 2 2-1 2 2-1 1-3 1v2l3-1v1l-1 1-2 1c1 3 2 3 1 7a950 950 0 01-3-3l-2 3zM58 54l-1 1 1 1 2-1v-1h-2zm10 1l-2 1-1-1h-1v2l2 1 3-1v-2h-1zm103 22l-4 4-1-4-7 6c-1 2 0 5 1 6l4 1v-2c2 0 2-2 5-2l3 1c2-1 3-3 3-6-3-1-1-2-3-4h-1zm-19 10l1 1-1 1-1-1 1-1zm3 16v2h1l-1-2zm-14 14v2h2v-2h-2zm4 1l1 2-1-2zm-7 3l-1 4h1l1-4h-1zm-1 11l-1 2 1 1 1-1v-2h-1zm5 0c-2 2-2 3-2 6l1 1h3l1-5-3-2zm15 14l1 1-1-1zm-18 15h1l1 1-2 4-1-1 1-4zm-20 8l-1 3h2v-3h-1zm1 6c-2 2-1 4 0 6l1-1c1-1-1-4-1-5zm-4 2l-1 3-2-1v2c1 2-1 6 2 8l3-3c2-3 0-6-1-9h-1zm-13 5l1 1-1 3 2 1-1 2c-2 0-3-1-3-3l2-4zm-5 19h-3l1 6c-1 2-3 3-1 5 2 0 3-1 3-2l2-9h-2zm-6 26l2 1v1l-2-1v-1z"></path>
            </symbol>
            <symbol id="svg__logoText" viewBox="0 0 1000 251">
              <path d="M950 190c-6 0-29 0-35-25-23 23-42 25-54 25-14 0-38-4-38-39 0-17 4-34 10-47 18-39 44-42 57-42 18 0 28 7 27 25-1 30-31 50-57 51-1 18-2 31 18 31 19 0 30-11 37-17 1-9 8-15 12-17 3-6 19-35 31-74l37-5 5 91c0 6-1 41-50 43zM898 85c0-9-4-10-6-10-13 0-27 29-30 51 16-1 36-17 36-41zm66 54l-5-51c-3 10-8 24-20 47 5 3 5 6 5 9 1 3-2 12-10 12-4 0-6-1-7-3 0 4 0 18 15 18 25-1 22-24 22-32zm-213 51c-14 0-35-6-30-39l9-42c-11 4-20 5-21 5-1 12-9 74-60 76-23 0-41-13-39-40 3-57 32-89 68-88 8 0 32 0 32 40 9 1 21-4 22-5l7-33h36l-18 90-1 4c0 4 1 8 9 8 7 0 16-4 26-23 14-25 17-51 17-60l-8 2c-7 0-9-8-9-13 0-7 4-13 15-13 4 0 16 1 16 22 0 31-11 65-26 85-7 9-20 24-45 24zM680 77c-13-1-33 33-33 71-1 20 7 18 12 19 3 1 22-4 29-52 0 0-6 0-6-10 0-12 7-13 7-14 0-14-6-14-9-14zm4 135c-1 8-5 39-26 39-39 0-67-61-117-56l37-174c-44 18-36 65-31 72-9-1-26 0-27-24-1-32 48-70 98-65l-39 180c35 9 63 44 105 28zm-241 39c-11 0-29-7-30-27 0-25 25-31 44-37l2-11c-1 0-12 14-30 14-8 0-32-2-26-41l18-85h36l-18 85-1 6c0 2 0 11 7 11 15 0 20-21 20-22l17-80h37l-31 148c-3 6-7 38-45 39zm-16-31c0 4 4 9 10 9 14 0 15-27 18-34-10 4-28 8-28 25zm-38-119c-14 0-7-17-15-17-7 0-10 3-18 10l-20 95h-36l17-80c-4 2-16 5-21 5-2 40-25 76-59 76-8 0-31-2-37-22a52 52 0 01-42 22c-19 0-31-15-25-43l16-73h-8l2-10h8l7-35 37-5-8 40h15l-2 10h-15l-16 73-1 9c0 8 4 10 10 10s13-3 19-13c0-16 3-31 7-41 16-43 43-51 61-51 20 1 32 12 32 41 10 1 21-4 23-5l7-33h36l-3 15c17-15 24-15 30-15 10-1 17 8 17 18 0 4-2 18-18 19zM267 77c-12-1-33 33-33 70 0 21 8 19 13 20 3 1 21-4 29-52 0 0-7 0-7-10 0-12 8-13 8-14-1-14-7-14-10-14zM111 58c-4 0-11-1-16-7 10-7 12-19 10-26-2-10-10-13-17-13-10 0-23 7-23 26 0 14 11 24 19 34 5 7 36 34 36 61 0 41-36 60-67 60S0 176 0 149c0-23 17-39 34-39 18 0 22 12 23 16-7 0-29 3-29 26 0 16 11 24 24 24 21 0 30-17 30-31 1-20-15-36-28-52-17-20-25-30-25-47C29 20 53 0 85 0c19 0 44 8 45 35 0 9-5 24-19 23z"></path>
            </symbol>

            <symbol id="svg__message" viewBox="0 0 20 20">
              <path d="M4 19.8l6-3.8h8a2 2 0 002-2V2a2 2 0 00-2-2H2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h2v3.8zM9.5 14L6 16.2V14H2V2h16v12H9.5z"></path>
              <path d="M5 5h10v2H5zM5 9h10v2H5z"></path>
            </symbol>
            <symbol id="svg__location" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 4a3 3 0 110 6 3 3 0 010-6zM9 7a1 1 0 112 0 1 1 0 01-2 0z"
              ></path>
              <path
                fillRule="evenodd"
                d="M11.1 16.3l-1.1 1-1.1-1C4.9 12.8 3 9.8 3 7c0-4 3.1-7 7-7s7 3 7 7c0 2.8-2 5.8-5.9 9.3zM10 2a5 5 0 015 5c0 2-1.6 4.6-5 7.6C6.6 11.6 5 9 5 7a5 5 0 015-5z"
              ></path>
              <path d="M3.7 12.8L5 14.5C3.2 15 2 15.5 2 16c0 .8 3.6 2 8 2s8-1.2 8-2c0-.5-1.2-1-3-1.5l1.3-1.7c2.3.7 3.7 1.8 3.7 3.2 0 2.5-4.5 4-10 4S0 18.5 0 16c0-1.4 1.4-2.5 3.7-3.2z"></path>
            </symbol>
            <symbol id="svg__search" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 16a8 8 0 116.3-3l5.4 5.3-1.4 1.4-5.4-5.4A8 8 0 018 16zm6-8A6 6 0 112 8a6 6 0 0112 0z"
              ></path>
            </symbol>
            <symbol id="svg__premium" viewBox="0 0 200 200">
              <path
                fillRule="evenodd"
                d="M0 41l54 17 46-58 46 58 54-17-16 120H16L0 41zm23 27l38 12 39-49 39 49 38-12-10 74H33L23 68zm-1 113h156c14 0 14 19 0 19H22c-14 0-14-19 0-19z"
              ></path>
            </symbol>
            <symbol id="svg__premium_v2" viewBox="0 0 900 800">
              <path d="M207 0c-13 0-25 6-32 16L9 233a42 42 0 00-9 25 40 40 0 0010 27l407 498a43 43 0 0011 10 39 39 0 0053-8l2-2 407-498a41 41 0 0010-27 40 40 0 00-9-25L725 16c-7-10-19-16-32-16zm20 80h146l-98 138H121zm300 0h146l106 138H624zm-77 30l76 108H374zM125 299h142l85 277zm226 0h198l-99 324zm282 0h142L548 576z"></path>
            </symbol>
            <symbol id="svg__list" viewBox="0 0 20 20">
              <path d="M5 13v2h6v-2H5zM5 11V9h10v2H5zM5 5v2h10V5H5z"></path>
              <path d="M0 18c0 1.1.9 2 2 2h13.4l4.6-4.6V2a2 2 0 00-2-2H2a2 2 0 00-2 2v16zM2 2h16v11h-3a2 2 0 00-2 2v3H2V2zm13 13h2.6L15 17.6V15z"></path>
            </symbol>
            <symbol id="svg__people" viewBox="0 0 22 22">
              <path d="M11 14c-2.2 0-4-1.6-4-5 0-2.2 1.6-4 4-4s4 2 4 4.2c0 3.3-1.8 4.8-4 4.8zM9 9c0 2.3.8 3 2 3s2-.7 2-2.8C13 8 12.2 7 11 7c-1.3 0-2 .8-2 2z"></path>
              <path d="M11 22a11 11 0 110-22 11 11 0 010 22zm7.4-5.9a9 9 0 10-14.8 0C4.7 14.6 7.4 14 11 14c3.6 0 6.3.6 7.4 2.1zM17 17.7c-.3-1-2.4-1.7-6-1.7s-5.7.7-6 1.7a9 9 0 0012 0z"></path>
            </symbol>
            <symbol id="svg__photo" viewBox="0 0 22 18">
              <path d="M19 7a1 1 0 11-2 0 1 1 0 012 0zM6 10a5 5 0 1010 0 5 5 0 00-10 0zm8 0a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path d="M5.94 2.85l.25-.39.2-.34.1-.14C7.3.62 7.9 0 9 0h4c1.09 0 1.69.62 2.52 1.98l.08.14a85.05 85.05 0 00.46.73l.12.15H19a3 3 0 013 3v9a3 3 0 01-3 3H3a3 3 0 01-3-3V6a3 3 0 013-3h2.82l.12-.15zM3 5a1 1 0 00-1 1v9a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1h-3c-.66 0-1.11-.36-1.56-.99a8.42 8.42 0 01-.56-.87l-.07-.12C13.36 2.28 13.1 2 13 2H9c-.09 0-.36.28-.81 1.02l-.07.12a83.71 83.71 0 01-.56.87C7.11 4.64 6.66 5 6 5H3z"></path>
            </symbol>
            <symbol id="svg__help" viewBox="0 0 20 20">
              <path d="M10 14.54a.9.9 0 100-1.81.9.9 0 000 1.81zM9.1 11.82h1.8c0-.73.12-.86.87-1.23 1.3-.65 1.87-1.32 1.87-2.86 0-1.98-1.56-3.18-3.64-3.18-2 0-3.64 1.62-3.64 3.63h1.82c0-1 .82-1.82 1.82-1.82 1.16 0 1.82.5 1.82 1.37 0 .72-.12.86-.86 1.23-1.3.65-1.87 1.31-1.87 2.86z"></path>
              <path d="M0 10a10 10 0 1020 0 10 10 0 00-20 0zm18.18 0a8.18 8.18 0 11-16.36 0 8.18 8.18 0 0116.36 0z"></path>
            </symbol>
            <symbol id="svg__like" viewBox="0 0 22 20">
              <path d="M15.6 0A7.2 7.2 0 0011 1.4l-1-.7C8.7.2 7.8 0 6.4 0 2.7 0 0 3 0 7c0 3 1.7 6 4.8 8.8 1.7 1.5 3.8 3 5.3 3.8l.9.4.9-.4c1.5-.8 3.6-2.3 5.3-3.8C20.3 13 22 10.1 22 7.1c0-4-2.7-7-6.4-7.1zM20 7c0 2.4-1.4 4.9-4.2 7.4a26.6 26.6 0 01-4.8 3.4c-1.4-.7-3.3-2.1-4.8-3.4C3.4 11.9 2 9.4 2 7 2 4 3.9 2 6.5 2c1 0 1.7.1 2.5.5.5.2 1 .5 1.3 1l.7.7.7-.8 1.3-1c.7-.3 1.4-.4 2.5-.4C18.1 2 20 4.2 20 7z"></path>
            </symbol>
            <symbol id="svg__like-on" viewBox="0 0 22 20">
              <path d="M15.6 0A7.2 7.2 0 0011 1.4l-1-.7C8.7.2 7.8 0 6.4 0 2.7 0 0 3 0 7c0 3 1.7 6 4.8 8.8 1.7 1.5 3.8 3 5.3 3.8l.9.4.9-.4c1.5-.8 3.6-2.3 5.3-3.8C20.3 13 22 10.1 22 7.1c0-4-2.7-7-6.4-7.1z"></path>
            </symbol>
            <symbol id="svg__eye" viewBox="0 0 23 16">
              <path d="M7.2 8a4 4 0 108 0 4 4 0 00-8 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z"></path>
              <path d="M11.2 0c2.7 0 5.3 1.4 7.8 3.8a23.3 23.3 0 013 3.7l.4.5-.4.5-.8 1.2-2.2 2.5c-2.5 2.4-5 3.8-7.8 3.8-2.7 0-5.3-1.4-7.8-3.8a23.3 23.3 0 01-3-3.7L0 8l.3-.5.9-1.2c.6-.9 1.4-1.7 2.2-2.5C6 1.4 8.4 0 11.2 0zm8.4 7.5l-2-2.3c-2.1-2-4.3-3.2-6.4-3.2C9 2 6.9 3.2 4.8 5.2A21.3 21.3 0 002.4 8a20.4 20.4 0 002.4 2.8c2.1 2 4.3 3.2 6.4 3.2 2 0 4.3-1.2 6.4-3.2A21.3 21.3 0 0020 8l-.4-.5z"></path>
            </symbol>
            <symbol id="svg__setting" viewBox="0 0 22 22">
              <path
                fillRule="evenodd"
                d="M11 15a4 4 0 110-8 4 4 0 010 8zm2-4a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
              <path d="M17.7 19.9l2.2-2.2-.8-2.9.3-.8 2.6-1.4V9.4L19.4 8l-.3-.8.8-2.9-2.2-2.2-2.9.8-.8-.3L12.6 0H9.4L8 2.6l-.8.3L4.3 2 2.1 4.3 3 7.2l-.3.8L0 9.4v3.1L2.6 14l.3.8-.8 2.9 2.2 2.2 2.9-.8.8.3L9.4 22h3.1l1.5-2.6.8-.3 2.9.8zm.2-7.3l-1 2.1.7 2.4-.5.6-2.4-.7-2 .9-1.3 2.1h-.8l-1.2-2.1-2.1-1-2.4.7-.6-.5.7-2.4-.9-2L2 11.3v-.8l2.1-1.2 1-2.1-.7-2.4.5-.6 2.4.7 2-.9L10.7 2h.8l1.2 2.1 2.1 1 2.4-.7.6.5-.7 2.4.9 2 2.1 1.3v.8l-2.1 1.2z"></path>
            </symbol>
            <symbol id="svg__exit" viewBox="0 0 20 20">
              <path d="M7.3 5.7L10.6 9H0v2h10.6l-3.3 3.3 1.4 1.4 5.7-5.7-5.7-5.7-1.4 1.4z"></path>
              <path d="M18 0h-4v2h4v16h-4v2h4a2 2 0 002-2V2a2 2 0 00-2-2z"></path>
            </symbol>
            <symbol id="svg__edit" viewBox="0 0 20 20">
              <path d="M20 18v-7h-2v7H2V2h7V0H2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h16a2 2 0 002-2z"></path>
              <path
                fillRule="evenodd"
                d="M17.18.72a2.45 2.45 0 00-3.48 0L5.33 9.1A4.05 4.05 0 004 11.8V16h4.13a4.05 4.05 0 002.83-1.38l8.32-8.31a2.46 2.46 0 000-3.49l-2.1-2.1zM8.06 14a2.08 2.08 0 001.43-.74l6.07-6.06-2.76-2.75-6.1 6.1c-.4.36-.66.86-.7 1.32V14h2.06zm6.16-10.97l2.75 2.76.9-.9a.46.46 0 000-.65l-2.1-2.1a.46.46 0 00-.66 0l-.9.9z"
              ></path>
            </symbol>
            <symbol id="svg__addmes" viewBox="0 0 20 20">
              <path d="M9 4.04v3.03H6v2.02h3v3.03h2V9.09h3V7.07h-3V4.04H9z"></path>
              <path d="M10.09 16.16L4 20v-3.84H2c-1.1 0-2-.9-2-2.02V2.02C0 .9.9 0 2 0h16c1.1 0 2 .9 2 2.02v12.12c0 1.11-.9 2.02-2 2.02h-7.91zm-4.09.2l3.51-2.22H18V2.02H2v12.12h4v2.22z"></path>
            </symbol>
            <symbol id="svg__file" viewBox="0 0 18 18">
              <path d="M10.36 4.09l1.3 1.26-5.77 5.78a.74.74 0 000 1.05c.27.27.73.27 1 0l6.35-6.36c.93-.93.93-2.43 0-3.36a2.41 2.41 0 00-3.31 0L3 9.4a4.01 4.01 0 000 5.67 4.04 4.04 0 005.62 0l8.08-8.09L18 8.24l-8.08 8.08a5.8 5.8 0 11-8.23-8.2l6.93-6.92a4.25 4.25 0 015.92 0 4.16 4.16 0 010 5.88L8.2 13.43c-.98 1-2.62 1-3.62 0-.98-.98-.98-2.57 0-3.56l5.78-5.78z"></path>
            </symbol>
            <symbol id="svg__send" viewBox="0 0 15 15">
              <path d="M0 0l1.05 7.35.6.15-.6.15L0 15l15-7.5L0 0zm2.43 6.11l-.5-3.42 9.63 4.81-9.62 4.81.49-3.42L7.99 7.5 2.43 6.11z"></path>
            </symbol>
            <symbol id="svg__smile" viewBox="0 0 20 20">
              <path d="M14 13l-1-1a4 4 0 01-6 0l-1 1a5 5 0 008 0zM12 9V7h2v2h-2zM6 7v2h2V7H6z"></path>
              <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16z"></path>
            </symbol>
            <symbol
              id="svg__wink_smile"
              width="20px"
              height="20px"
              viewBox="0 -20 512 512"
            >
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm117.8-146.4c-10.2-8.5-25.3-7.1-33.8 3.1-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-60c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1z"></path>
            </symbol>
            <symbol id="svg__premium-img" viewBox="0 0 510.48 510.48">
              <path d="M323.8 385.08v-27.43H305.5v27.43c0 10.1-8.19 18.29-18.29 18.29h-18.28a18.29 18.29 0 01-18.29-18.29v-27.43h-26.4a28.13 28.13 0 01-28.35-25.04 27.12 27.12 0 018.06-21.82 26.75 26.75 0 0119.26-8H381.3c3.86-14.18 6.01-28.78 6.4-43.49.92-34.27-8.91-61.82-28.56-79.77a95 95 0 00-78.3-21.72 108.62 108.62 0 00-77 58.31c-.12.23-.34.37-.48.58-.35.5-.74.98-1.18 1.4-.42.43-.88.82-1.37 1.16-.22.15-.36.37-.6.5l-.91.29a9 9 0 01-5.19.54c-.6-.12-1.18-.3-1.74-.54a8.17 8.17 0 01-.92-.3c-.23-.12-.36-.34-.58-.5-.5-.32-.97-.71-1.38-1.15-.44-.42-.84-.9-1.18-1.4-.15-.21-.37-.35-.49-.58a108.62 108.62 0 00-77.04-58.31 94.84 94.84 0 00-78.33 21.71c-19.66 17.96-29.53 45.5-28.58 79.68A229.17 229.17 0 0034.3 362.52a190.93 190.93 0 0022.62 34.14c39.42 49.22 102.04 92.03 138.88 114.82 35.97-22.26 96.49-63.64 135.93-111.35a18.28 18.28 0 01-7.94-15.05zM73.93 374.33a9.14 9.14 0 01-12.72-2.35 154 154 0 01-10.47-17.48c-2.24-4.14-4.03-7.6-5.73-11.07a204.88 204.88 0 01-22.86-84.82c-.54-19.1 2.65-45.8 20.92-63.9a9.14 9.14 0 0112.84 13c-13.61 13.5-15.95 34.93-15.54 50.52A186.76 186.76 0 0061.4 335.4c1.59 3.24 3.26 6.47 5.01 9.7l.6 1.15a135.59 135.59 0 009.23 15.39 9.14 9.14 0 01-2.31 12.7zm48.4-185.42a9.14 9.14 0 01-11.25 6.39 63.08 63.08 0 00-23.92-1.77A9.14 9.14 0 1185 175.35c7.59-.89 15.26-.71 22.8.52 2.74.47 5.46 1.08 8.14 1.83a9.14 9.14 0 016.38 11.2zm110.04 205.32a36.57 36.57 0 01-73.15 0v-32.27a54.86 54.86 0 0158.52-91.16 9.14 9.14 0 11-7.31 16.76 36.57 36.57 0 00-51.2 33.52 36.83 36.83 0 0014.63 29.26 9.14 9.14 0 013.65 7.31v36.58a18.29 18.29 0 0036.57 0v-9.15a9.14 9.14 0 0118.29 0v9.15zM104.37 138.73V110.8a91.58 91.58 0 0191.43-91.43 91.56 91.56 0 0190.97 82.29h18.37a109.71 109.71 0 00-219.06 9.14v27.75c6.1-.41 12.2-.35 18.29.18z"></path>
              <path d="M498.42 307.18a36.44 36.44 0 00-28.34-13.52 36.86 36.86 0 00-33.6 21.98 9.14 9.14 0 01-8.37 5.44H223.23a8.75 8.75 0 00-6.34 2.64 8.92 8.92 0 00-2.74 7.36 9.9 9.9 0 0010.1 8.29h35.55c5.05 0 9.15 4.1 9.15 9.14v36.57h18.28v-36.57c0-5.05 4.1-9.14 9.15-9.14h36.57c5.05 0 9.14 4.1 9.14 9.14v36.57h18.29v-36.57c0-5.05 4.09-9.14 9.14-9.14h58.6c3.62 0 6.9 2.13 8.36 5.44a36.63 36.63 0 0069.35-6.65 36.41 36.41 0 00-7.4-30.98zm-10.05 32.19a9.14 9.14 0 01-18.29 0v-18.29a9.14 9.14 0 0118.29 0v18.29z"></path>
            </symbol>
            <symbol id="svg__premium-img_v2" viewBox="0 0 152 161">
              <path d="M100.5 0A22 22 0 0196 4.4c1.7 1.3 3.1 2.7 4.4 4.4h.1a22 22 0 014.4-4.4 22 22 0 01-4.4-4.4zM16.4 9.9a7.3 7.3 0 000 14.6 7.3 7.3 0 100-14.6zm113.3 3.6c-1 1.4-2.3 2.7-3.6 3.7 1.3 1 2.6 2.3 3.6 3.7 1-1.4 2.3-2.6 3.7-3.7-1.4-1-2.6-2.3-3.7-3.7zm-53.9.1a2.7 2.7 0 000 5.4 2.7 2.7 0 000-5.4zm33.8 6.5c-1 1.8-2.6 3.4-4.4 4.4 1.8 1.1 3.3 2.6 4.4 4.4v.1c1.1-1.9 2.6-3.4 4.4-4.5-1.8-1-3.3-2.6-4.4-4.4zm-68.5 4.4a2.75 2.75 0 000 5.5 2.75 2.75 0 000-5.5zm107.8 9.2a2.75 2.75 0 000 5.5 2.75 2.75 0 000-5.5zM24.8 44.8l-16 25.6h34L58 44.8H24.8zm37.4 0L47.1 70.4h61.1L93.1 44.8H62.2zm35.1 0l15.2 25.6h34l-16-25.6H97.3zM9.2 74l62.3 81.2-29-81.1.1-.1H9.2zm103.5 0L83 155l63.2-81h-33.5zm-66.3.1L76 156.7H56.6a1.85 1.85 0 000 3.7h54.8a1.85 1.85 0 000-3.7h-33l30.4-82.6H46.4zM2.7 101.4a2.75 2.75 0 000 5.5v.1a2.8 2.8 0 000-5.6zm144.3 1.9a2.75 2.75 0 000 5.5 2.75 2.75 0 000-5.5zm-8.2 32.9a5.5 5.5 0 000 11 5.5 5.5 0 000-11zm-31.9 6.4a2.75 2.75 0 000 5.5 2.75 2.75 0 000-5.5zm-67.6 2.8a2.75 2.75 0 000 5.5 2.75 2.75 0 000-5.5z"></path>
            </symbol>
            <symbol id="svg__lock" viewBox="0 0 16 20">
              <path d="M9 14a1 1 0 11-2 0 1 1 0 012 0z"></path>
              <path d="M3 5v3H2c-1 0-2 .8-2 1.8v8.4c0 1 1 1.8 2 1.8h12c1 0 2-.8 2-1.8V9.8c0-1-1-1.8-2-1.8h-1V5A5 5 0 003 5zm8 0v3H5V5a3 3 0 016 0zM2 18v-8h12v8H2z"></path>
            </symbol>
            <symbol id="svg__lock-on" viewBox="0 0 16 20">
              <path d="M9 14a1 1 0 11-2 0 1 1 0 012 0z"></path>
              <path d="M8 0a5 5 0 00-5 5v3H2c-1 0-2 .8-2 1.8v8.4c0 1 1 1.8 2 1.8h12c1 0 2-.8 2-1.8V9.8c0-1-1-1.8-2-1.8H5V5a3 3 0 016 0v.1h2V5a5 5 0 00-5-5zM2 10h12v8H2v-8z"></path>
            </symbol>
            <symbol id="svg__del" viewBox="0 0 20 22">
              <path
                fillRule="evenodd"
                d="M7 0h6a2 2 0 012 2v1h3a2 2 0 012 2v2a2 2 0 01-2 2l-1 11a2 2 0 01-2 2H5a2 2 0 01-2-2L2 9a2 2 0 01-2-2V5c0-1.1.9-2 2-2h3V2c0-1.1.9-2 2-2zM2 5h16v2H2V5zm2 4h12l-1 11H5L4 9zm9-7v1H7V2h6z"
              ></path>
            </symbol>
            <symbol id="svg__rotate" viewBox="0 0 20 20">
              <path d="M15.8 5A7 7 0 0010 2a8 8 0 108 8h2A10 10 0 1110 0a9 9 0 017 3.3V0h2v7h-7V5h3.8z"></path>
            </symbol>
            <symbol id="svg__gift" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.5 5C3.2 4.5 3 3.8 3 3a3 3 0 013-3c1.8 0 3.3 1.2 4 3.1.7-1.9 2.2-3.1 4-3.1a3 3 0 013 3c0 .8-.2 1.5-.5 2H18a2 2 0 012 2v2a2 2 0 01-2 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1.5zM9 7H2v2h7V7zm9 2h-7V7h7v2zm-9 9v-7H4v7h5zm7 0h-5v-7h5v7zM6 2a1 1 0 00-1 1c0 1.3 1 1.8 3.4 2C8.2 3 7.2 2 6 2zm5.5 3c.3-1.9 1.3-3 2.4-3 .6 0 1 .5 1 1 0 1.3-1 1.8-3.4 2z"
              ></path>
            </symbol>
            <symbol id="svg__top" viewBox="0 0 20 17">
              <path d="M5.5 12.9h1.8V7.4H5.5v5.5zM11 12.9H9V3.7h2v9.2zM12.7 12.9h1.8V6.4h-1.8V13z"></path>
              <path d="M1.8 0h16.4c1 0 1.8.8 1.8 1.8v13c0 1-.8 1.8-1.8 1.8H1.8c-1 0-1.8-.9-1.8-1.9V1.8C0 .8.8 0 1.8 0zm0 1.8v13h16.4v-13H1.8z"></path>
            </symbol>
            <symbol id="svg__prem-off" viewBox="0 0 22 30">
              <path d="M11.37.44a7 7 0 00-6.95 9.34c-2.6.9-4.42 3.54-4.42 6.77 0 3 1.68 5.95 4.85 8.8a27.92 27.92 0 005.28 3.76l.87.45.87-.45c1.54-.8 3.6-2.25 5.28-3.75 3.17-2.86 4.85-5.8 4.85-8.81 0-3.2-1.83-5.84-4.42-6.77a6.99 6.99 0 00-.43-5.7A7 7 0 0011.37.45zm-.1 2a5 5 0 014.3 6.99h-.02c-1.42 0-2.43.2-3.45.7-.4.19-.77.42-1.11.7a6.3 6.3 0 00-1.07-.67 7.4 7.4 0 00-3.46-.73h-.04a5 5 0 014.84-7z"></path>
            </symbol>
            <symbol id="svg__prem-on" viewBox="0 0 22 30">
              <path d="M11.37.44a7 7 0 00-6.95 9.34c-2.6.9-4.42 3.54-4.42 6.77 0 3 1.68 5.95 4.85 8.8a27.92 27.92 0 005.28 3.76l.87.45.87-.45c1.54-.8 3.6-2.25 5.28-3.75 3.17-2.86 4.85-5.8 4.85-8.81 0-3.98-2.83-7.1-6.45-7.12-1.42 0-2.43.2-3.45.7-.4.19-.77.42-1.11.7a6.3 6.3 0 00-1.07-.67 7.4 7.4 0 00-3.46-.73h-.04a5 5 0 018.97-4.39l.12.24 1.8-.84-.16-.35A7 7 0 0011.37.44zm-.37 15a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3z"></path>
            </symbol>
            <symbol id="svg__prem-check" viewBox="0 0 1000 970">
              <path d="M0 261h252L122 52zm352 0h287L496 30zm341-14L847 0H540zM451 0H153l149 240zm297 261h252L878 52zM0 304h290l131 561zm344 0h312L500 970zm366 0h290L579 865z"></path>
            </symbol>
            <symbol id="svg__check" viewBox="0 0 12.47 14.03">
              <path d="M12.32.05a.32.32 0 00-.44.1L4.63 11.07.57 6.05a.32.32 0 00-.43-.06.33.33 0 00-.1.43l4.34 7.45c.06.1.17.16.28.16.12 0 .22-.07.28-.17L12.43.5a.33.33 0 00-.11-.44z"></path>
            </symbol>
            <symbol id="svg__real-gift" viewBox="0 0 18 20">
              <path
                d="M0 11C0 13.3869 0.948211 15.6761 2.63604 17.364C4.32387 19.0518 6.61305 20 9 20C9 17.6131 8.05179 15.3239 6.36396 13.636C4.67613 11.9482 2.38695 11 0 11ZM2.44 13.44C4.35 14.15 5.85 15.65 6.56 17.56C5.6172 17.2102 4.76103 16.6611 4.04997 15.95C3.33892 15.239 2.78975 14.3828 2.44 13.44ZM9 20C11.3869 20 13.6761 19.0518 15.364 17.364C17.0518 15.6761 18 13.3869 18 11C15.6131 11 13.3239 11.9482 11.636 13.636C9.94821 15.3239 9 17.6131 9 20ZM11.42 17.57C11.7627 16.6149 12.3125 15.7475 13.03 15.03C13.7475 14.3125 14.6149 13.7627 15.57 13.42C15.2181 14.3699 14.6651 15.2325 13.9488 15.9488C13.2325 16.6651 12.3699 17.2181 11.42 17.57ZM9 12C10.5913 12 12.1174 11.3679 13.2426 10.2426C14.3679 9.11742 15 7.5913 15 6V1C14.2619 0.993749 13.5293 1.12604 12.84 1.39C12.29 1.62 11.8 1.96 11.39 2.39L9 0L6.61 2.39C6.2 1.96 5.71 1.62 5.16 1.39C4.47073 1.12604 3.73806 0.993749 3 1V6C3 7.5913 3.63214 9.11742 4.75736 10.2426C5.88258 11.3679 7.4087 12 9 12ZM5 3.61L6.57 5.26L9 2.83L11.43 5.26L13 3.61V6C13 7.06087 12.5786 8.07828 11.8284 8.82843C11.0783 9.57857 10.0609 10 9 10C7.93913 10 6.92172 9.57857 6.17157 8.82843C5.42143 8.07828 5 7.06087 5 6V3.61Z"
                fill="black"
                fillOpacity="0.5"
              />
            </symbol>
            <linearGradient id="prem_grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop className="premium__color1" offset="0%" />
              <stop className="premium__color2" offset="100%" />
            </linearGradient>
          </svg>

          <button
            id="ajax_upload_button"
            className="hidden "
            hidden="hidden"
          ></button>
          <div id="photo_upload" className="popup pointer_none">
            <div className="popup__box" style={{ maxWidth: "450px" }}>
              <div className="popup__title">Add your Photos</div>
              <button
                type="button"
                className="button js_upload_photo"
                style={({ margin: `0 auto` }, { display: `table` })}
              >
                Upload from PC
              </button>
              <div className="popup__text" style={{ textAlign: `center` }}>
                <p>
                  Supported file formats: jpg, png, bmp.
                  <br />
                  The maximum size of a picture is 10 MB
                </p>
                <p className="popup__note">
                  Photos must have only you or you with friends in them. Please
                  add photos which identify you easily and show your face
                  clearly. Photos without you in them, children, erotic or
                  inappropriate photos are not allowed.
                </p>
              </div>
            </div>
          </div>

          <div id="photo_upload_success" className="popup">
            <div className="popup__box" style={{ maxWidth: "450px" }}>
              <div className="popup__title">Uploading photos</div>
            </div>
          </div>

          <div id="premium_popup_main" className="popup popup__new">
            <div className="popup__box">
              <div className="popup__close"></div>
              <div className="premium__title">Premium account</div>
              <div className="premium__img" data-svg="premium-img_v2"></div>
              <div className="premium__text">
                Premium account allows you to enjoy all features of site. Get to
                know new people, view photos, chat and make friends!
              </div>
              <a href="/premium" className="premium__button button">
                <span>Get premium</span>
              </a>
            </div>
          </div>

          <div id="real_gift_delivered" className="popup popup__new ggfon2">
            <div className="popup__box">
              <div className="popup__close"></div>
              <div className="premium__title">Excellent choice!</div>

              <div className="premium__text">
                She will definitely appreciate your taste! We will contact the
                girl and send her the gift as soon as possible.
              </div>
              <button
                type="button"
                className="button js_closePopup"
                style={({ margin: `0 auto` }, { display: `table` })}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </header>
      {modal1 ? <Modal setModal1={setModal1} /> : ""}
    </>
  );
}

export default HomePage;
