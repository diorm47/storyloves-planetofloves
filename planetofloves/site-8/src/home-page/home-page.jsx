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
import "../_themes/russiandate/css/user_russiandate.css";
import malePng from "../assets/img/male.jpg";
import visaPng from "../assets/img/visa.png";
import mastercard from "../assets/img/mastercard.png";

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

        <div className="russianDate" onClick={setModal}>
          <div className="wrapper pointer_none">
            <div className="header">
              <div className="pure-c">
                <div className="pure-g pure-g--middle">
                  <div className="pure-u header__left">
                    <a
                      href="/"
                      className="logo svgEl"
                      data-svg="logoImg#logoText"
                    >
                      <span>PlanetOfLoves</span>
                      <svg className="svg__logoImg">
                        <use href="#svg__logoImg"></use>
                      </svg>
                      <svg className="svg__logoText">
                        <use href="#svg__logoText"></use>
                      </svg>
                    </a>
                  </div>
                  <div className="pure-u header__right">
                    {/* <div className="menu">
                      <div className="burger">
                        <div className="burger__item"></div>
                      </div>

                      <a
                        href="/online"
                        className="menu__item active"
                        data-svg="location"
                      >
                        <span>People online</span>
                      </a>
                      <a
                        href="/search"
                        className="menu__item"
                        data-svg="search"
                      >
                        <span>Search</span>
                      </a>

                      <a href="/premium" className="menu__item prem">
                        <span data-svg="premium_v2" className="svgEl">
                          Premium
                          <svg className="svg__premium_v2">
                            <use href="#svg__premium_v2"></use>
                          </svg>
                        </span>
                      </a>
                    </div> */}
                    <div className="menu">
                      <div className="burger">
                        <div className="burger__item"></div>
                      </div>
                      <a
                        href="/chat"
                        className="menu__item hidden-md hidden-lg hidden-xl svgEl"
                        data-svg="message"
                      >
                        {isVisible && <sup className="count-mes">1</sup>}

                        <span>Messages</span>
                        <svg className="svg__message">
                          <use href="#svg__message"></use>
                        </svg>
                      </a>
                      <a
                        href="/online"
                        className="menu__item active svgEl"
                        data-svg="location"
                      >
                        <span>People online</span>
                        <svg className="svg__location">
                          <use href="#svg__location"></use>
                        </svg>
                      </a>
                      <a
                        href="/search"
                        className="menu__item svgEl"
                        data-svg="search"
                      >
                        <span>Search</span>
                        <svg className="svg__search">
                          <use href="#svg__search"></use>
                        </svg>
                      </a>

                      <a
                        href="/premium"
                        // onclick="ymc('premium_from_header')"
                        className="menu__item prem"
                      >
                        <span data-svg="premium_v2" className="svgEl">
                          Premium
                          <svg className="svg__premium_v2">
                            <use href="#svg__premium_v2"></use>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main">
              <div className="pure-c">
                <div className="pure-g">
                  <div className="pure-u-1 pure-u-md-1-3 pure-u-xl-1-4">
                    <div className="user site-bar">
                      <div className="user__info">
                        <div className="user__photo js_add_photo">
                          <div className="user__photo--lock hidden"></div>
                          <img src={malePng} />
                        </div>
                        <div className="user__cell">
                          <div className="user__name">user</div>

                          <a href="/premium" className="user__novip">
                            Get premium
                          </a>
                        </div>
                        <div className="user__button">
                          <div></div>
                          <a
                            href="/user/profile"
                            className="user__edit tooltipstered svgEl"
                            data-tooltip="tooltip-top"
                            data-svg="edit"
                            data-content="Edit profile"
                          >
                            <svg className="svg__edit">
                              <use href="#svg__edit"></use>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="user__line"></div>
                      <div className="user__links">
                        <a href="/id287330877" className="user__link">
                          <span data-svg="people" className="svgEl">
                            <svg className="svg__people">
                              <use href="#svg__people"></use>
                            </svg>
                          </span>
                          <span>Profile</span>
                        </a>
                        <a href="/user/photo" className="user__link">
                          <span data-svg="photo" className="svgEl">
                            <svg className="svg__photo">
                              <use href="#svg__photo"></use>
                            </svg>
                          </span>
                          <span>My photos</span>
                        </a>
                        {/* <a href="/chat" className="user__link">
                          <span data-svg="message" className="svgEl">
                            <svg className="svg__message">
                              <use href="#svg__message"></use>
                            </svg>
                          </span>
                          <span>Messages</span>
                        </a> */}
                        <a href="/chat" className="user__link">
                          <span data-svg="message" className="svgEl">
                          {isVisible && <sup className="count-mes">1</sup>}
                            <svg className="svg__message">
                              <use href="#svg__message"></use>
                            </svg>
                          </span>
                          <span>Messages</span>
                        </a>

                        <a href="/favorites" className="user__link">
                          <span data-svg="like" className="svgEl">
                            <svg className="svg__like">
                              <use href="#svg__like"></use>
                            </svg>
                          </span>
                          <span>Favorites</span>
                        </a>
                        <a href="/guests" className="user__link">
                          <span data-svg="eye" className="svgEl">
                            <svg className="svg__eye">
                              <use href="#svg__eye"></use>
                            </svg>
                          </span>
                          <span>Guests</span>
                        </a>
                        <a href="/settings" className="user__link">
                          <span data-svg="setting" className="svgEl">
                            <svg className="svg__setting">
                              <use href="#svg__setting"></use>
                            </svg>
                          </span>
                          <span>Settings</span>
                        </a>
                        <a href="/logout" className="user__link">
                          <span data-svg="exit" className="svgEl">
                            <svg className="svg__exit">
                              <use href="#svg__exit"></use>
                            </svg>
                          </span>
                          <span>Log out</span>
                        </a>
                      </div>
                    </div>

                    <div className="premium site-bar">
                      <div className="premium__title">
                        <b>$</b> Premium account
                      </div>
                      <div className="premium__img svgEl" data-svg="premium_v2">
                        <svg className="svg__premium_v2">
                          <use href="#svg__premium_v2"></use>
                        </svg>
                      </div>
                      <div className="premium__text">
                        Premium account allows you to enjoy all features of
                        PlanetOfLoves. Get to know new people, view photos, chat
                        and make friends!
                      </div>
                      <a href="/premium" className="premium__button button">
                        <span>Get premium</span>
                      </a>
                    </div>
                  </div>
                  <div className="pure-u-1 pure-u-md-2-3 pure-u-xl-3-4">
                    <div className="content">
                      <div className="pure-g">
                        <div className="pure-u">
                          <div className="content__title">People online</div>
                        </div>
                      </div>
                      <div className="content__line"></div>
                      <div className="content__box">
                        <div className="pure-g">
                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318593"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/8cf68c6c5b2a55e074ac747a4bcb527c/19f8d2b61d4f7ae30c8968229490af2d/d6a78444e5b21fdea8a90f0ff104820f.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Sasha
                                      </span>
                                      , 33
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318589"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/cc1f28cf106e063af8e8ad3a50446ce7/d417f4ae7be4d4e15e946d695823281b/44899b3d316c2d15a018d72363982393.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Marta
                                      </span>
                                      , 36
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id246173083"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/51a325de545ab8549930fe21df2d49c5/f15864450b83c4b5efca82390adc5706/6f2f5e5d19da219b3a5921b03abbfd71.jpg" />

                                  <div className="people__status"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Valerie
                                      </span>
                                      , 31
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318564"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/43dc20d7291b39d205576be4736476ea/daf804643de4948f25c14c96d2b56b82/e74c87ce4dd3af2a84110706627a498a.jpg" />

                                  <div className="people__status"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Victoria
                                      </span>
                                      , 32
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id254194207"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/c3f1e581dd2b691f4fe0c53c64883391/394482a0c2cdf4433158dac53d98c917/5c90b31894e8dc2b1e6990d056d54d58.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Eva
                                      </span>
                                      , 36
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287320463"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/26d058e22879fbf758346e9b11053628/a079287f4c655bdd20cddff112e17baf/c0d50a8ff7aaa5bb7bf0631e120baf6b/0ba2d6da995e4358f5e728d3fa8b5be7.jpg" />

                                  <div className="people__status"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Cherry
                                      </span>
                                      , 30
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id244098734"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/4d2abac1941415717bedaa33434d5843/b47d043652995643c22b869effad423d/9a8ad5edc2bf2ca2f1d3a6350f3fe029.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Maria
                                      </span>
                                      , 33
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318698"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/321f6f95c184e883dbe3ebb60a29c206/37b5708e871d8b328d3a855d628b44ee/db54efe3d1997035d0ed90aa11e8b7bb.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Natasha
                                      </span>
                                      , 40
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id246144657"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/a6737ce74822c7360d24ad1b899f5871/20e22a0a903fea17d94420cbd29b52fd/ae21d01ab0e15767b7a840cf64fed379.jpg" />

                                  <div className="people__status"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Katrin
                                      </span>
                                      , 31
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318700"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/5bcb95decd47a88ca326052276ee9634/88b9863483fb8f45f7f10ba5dd9fbe5a/3fdde91f6843807075ef132f56738bf4.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Katya
                                      </span>
                                      , 37
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318706"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/d849c065c06e7a17346a88e9f689adb3/b648904ee5fa17038abb6a069a481211/5a929498118e28911f99aecb1b916074.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Maria
                                      </span>
                                      , 36
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318703"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/cb4c4f9346ba9ecc9f2ec0bf460ad018/1e5a41cd40d0d710648aeaf16df16938/f4b1b2826d7126656dafb617109c2cfa.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Marina
                                      </span>
                                      , 39
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318645"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/7e0f928de8b69df73bff7bad70c906af/30ea4dafc7651bbbf55160b1ba915b70/bb2420330e842d0493747669f034d2ee.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Maria
                                      </span>
                                      , 35
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287328044"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/25e700cf2cdc59e28eb84e29ff7a9498/5029461e51dd68172804b6a6b539cf06/5b6b1696920dd27f232cae144ad7c5e0/2efc92a330c820080eeea52990aa1bb0.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Valeriya
                                      </span>
                                      , 31
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318670"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/7794498fff08c1a5adbd4f7be553c0d2/04ecd054ef67b250f24f9faddd0f8282/42102051605cf39ab72e6a15a8e20151.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Tatiana
                                      </span>
                                      , 34
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id246497815"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/0dae983174765c971d0654781e5c32b1/201482b7b095d1564c46769e3c82115f/22a3b86c75a4ff6626ded142b23d3bed.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Kathy
                                      </span>
                                      , 40
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id244351387"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/f07f4109b673750fdb644d2f2f0af8e7/7bff3e4e3786bd898fc33cec590ffe4f/ded923d1bb43638cfa1dd10a8cea856f.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Alexandra
                                      </span>
                                      , 40
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id246381768"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/ef7287c65192c17093ba953d6b733f0c/efc6984233241f0d326f3655632abf4a/a549fc80a67b98a5023d64ac2cd2050c.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Natalie
                                      </span>
                                      , 37
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318653"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/7501ca142758eea2b9ae328a11fd7db5/5286deca57eccfb8c87421ed5b9c48e2/f902bb446eaa44179e90f8e44ca3a42f.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Venera
                                      </span>
                                      , 37
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318623"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/35b0639bff3b5e87e6bd777128bdea83/1849d6ccfa93b298c5337fde739093f5/55e04db176fc8d8682b12d16c281641f.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Maria
                                      </span>
                                      , 31
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id246452571"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/5166ae39eab8d0650f594f3d5d39d2f5/49ecaa1512aeae405c4cfd05091ba6f0/b724aa7a2424fda45c43e15bf08ee5fa.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Elizabeth
                                      </span>
                                      , 39
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id287318569"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/88b0d5d72c5587498718916b39b714e6/ca1477263508abcc8fabf5e6863c3ec8/684c8d24483bd95a544a7fed6f6efd0e.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Katerina
                                      </span>
                                      , 35
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id246150178"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/195bae3b08133035d604581b24f2b794/6a138cc612c5ff3ff0682c89bd0571c1/126c29b10ec9b4df40c7b1ea0ca05bdf.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Olga
                                      </span>
                                      , 31
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div className="people__item">
                              <div className="people__photo">
                                <a
                                  href="/id283233555"
                                  className="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/4d2abac1941415717bedaa33434d5843/5b22d4eccfec1adac7e0d8304e91e99b/076c8225253402e2034a1bd79a40b06f.jpg" />

                                  <div className="people__status people__status--online"></div>

                                  <div className="people__info">
                                    <div className="people__name">
                                      <span className="js_people__name">
                                        Diana
                                      </span>
                                      , 32
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="people__links">
                                <div className="people__link">
                                  <a
                                    className="people__link--item svgEl"
                                    href="/chat/287318593"
                                    data-svg="message:before"
                                  >
                                    <svg className="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div className="people__link">
                                  <div
                                    className="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="631748568b20f192d4964e3e"
                                  >
                                    <svg className="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg className="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pagination">
                          <span className="pagination__item pagination__item--prev pagination__item--delimiter"></span>

                          <a
                            href="/online?page=1"
                            className="pagination__item pagination__item--active"
                          >
                            1
                          </a>

                          <a href="/online?page=2" className="pagination__item">
                            2
                          </a>

                          <a href="/online?page=3" className="pagination__item">
                            3
                          </a>

                          <span className="pagination__item pagination__item--delimiter">
                            ...
                          </span>

                          <a href="/online?page=8" className="pagination__item">
                            8
                          </a>

                          <a
                            href="/online?page=2"
                            className="pagination__item pagination__item--next"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer">
              <div className="pure-c">
                <div className="pure-g footer__top">
                  <div className="pure-u-1 pure-u-md-5-7 pure-u-lg-5-6">
                    <div className="footer__menu">
                      <div className="footer__list">
                        <a href="/terms">Terms of use</a>
                      </div>
                      <div className="footer__list">
                        <a href="/policy">Privacy</a>
                      </div>

                      <div className="footer__list">
                        <a href="/payments">Payment</a>
                      </div>

                      <div className="footer__list">
                        <a href="/contacts">Contact Information</a>
                      </div>
                      <div className="footer__list">
                        <a href="/about">About us</a>
                      </div>
                      <div className="footer__list">
                        <a href="/imprint">Imprint</a>
                      </div>
                      <div className="footer__list">
                        <a href="/help">Support service</a>
                      </div>
                    </div>
                  </div>

                  <div className="pure-u-1 pure-u-md-2-7 pure-u-lg-1-6">
                    <div className="footer__payment">
                      <img src={visaPng} />
                      <img src={mastercard} />
                    </div>
                  </div>
                </div>
                <div className="footer__table">
                  <div className="footer__copyright">
                    Copyright &copy; PlanetOfLoves 2023
                  </div>
                  <div className="footer__info">
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
            <symbol id="svg__logoImg" viewBox="0 5 50 10" fill="none">
              <path
                d="M0 12.0153L0.500625 11.6153C0.901125 11.3153 1.50188 11.3153 1.80225 11.5153C2.10263 11.8153 2.30288 11.6153 2.20275 11.1153L2.10263 10.9153C2.00251 10.4153 2.20276 9.91526 2.60326 9.61526L13.7171 3.01526C14.6183 2.41526 18.423 1.01526 20.3254 3.11526C21.8272 4.71526 20.826 4.41526 23.9299 3.01526C26.1326 2.01526 29.8372 2.61526 40.6507 19.2153C40.6507 19.2153 39.9499 20.5153 35.9449 20.9153C31.9399 21.3153 27.6345 15.3153 27.6345 15.3153C27.3341 14.9153 26.8335 14.8153 26.5331 15.0153C26.2327 15.2153 26.1326 15.0153 26.3329 14.6153L26.8335 13.6153C27.0337 13.2153 27.5344 12.5153 27.8347 12.1153L30.438 9.31526C30.7384 8.91526 28.9361 10.6153 28.4355 10.8153L25.8322 12.3153C25.4317 12.5153 25.1314 12.4153 25.3316 11.9153L26.7334 8.21527C26.8335 7.71527 25.8322 9.41526 25.5319 9.81526L23.7296 12.5153C23.4292 12.9153 22.8285 13.3153 22.3279 13.3153L20.7259 13.5153C20.2253 13.6153 19.8247 13.2153 19.8247 12.7153V7.71527C19.8247 7.21527 19.7246 9.01526 19.5244 9.41526L18.7234 11.6153C18.5231 12.1153 17.4218 12.1153 17.2215 11.6153V7.41526C17.0213 7.01526 16.821 9.61526 16.821 10.1153L16.7209 11.7153C16.7209 12.2153 16.3204 12.4153 15.8197 12.3153L14.8185 11.9153C14.418 11.7153 14.0175 12.0153 14.1176 12.4153C14.2178 12.9153 14.0175 13.0153 13.617 12.6153L12.1151 11.1153C11.8148 10.7153 10.7134 9.11526 10.8135 9.61526L12.015 12.7153C12.1151 13.2153 11.8147 13.7153 11.4142 14.0153H11.3141C10.9136 14.2153 10.2127 14.1153 9.91237 13.8153L8.21025 12.1153C7.90988 11.8153 6.0075 10.1153 6.20775 10.5153L8.51062 13.4153C8.71087 13.8153 8.51062 14.2153 8.01 14.3153L4.10513 14.9153C3.60451 15.0153 2.8035 14.9153 2.403 14.8153C2.50313 14.7153 1.00125 14.4153 0 12.0153Z"
                fill="#BA0026"
              />
              <path
                d="M1.90237 15.5152C2.8035 16.2152 3.80475 16.0152 4.10513 16.0152C4.4055 16.0152 4.60575 17.2152 4.60575 17.7152C4.60575 18.2152 4.10512 16.0152 6.50812 15.9152C7.00875 15.9152 7.40925 16.0152 7.50937 16.6152C7.6095 17.2152 8.11012 17.2152 8.51062 16.6152C8.91112 16.0152 9.41175 15.4152 9.51187 15.3152C9.612 15.2152 10.2128 15.1152 10.6133 15.1152H12.5156C13.1164 15.1152 13.617 15.5152 13.617 15.9152C13.617 16.4152 13.0162 17.7152 12.3154 18.8152C9.91237 22.6152 9.91237 22.0152 12.816 19.0152C13.8172 18.0152 15.0188 17.4152 15.6195 17.6152C16.2203 17.8152 15.3191 20.4152 16.7209 18.3152C16.821 18.1152 17.0212 18.5152 17.3216 18.3152C17.622 18.1152 17.9224 19.0152 17.9224 20.4152C17.9224 21.8152 18.1226 27.1152 18.423 25.8152C18.7234 24.5152 17.9224 17.8152 20.3254 18.3152C22.5281 18.8152 21.8272 25.9152 22.0275 26.5152C22.2277 27.1152 22.5281 20.0152 22.7284 19.4152C22.9286 18.8152 24.1301 19.2152 24.3304 20.6152C25.2315 27.0152 25.5319 21.8152 25.5319 20.5152C25.5319 19.2152 26.0325 18.5152 26.6332 19.1152C27.234 19.7152 27.6345 19.5152 27.3341 18.7152C27.0337 17.9152 27.7346 18.2152 28.4355 18.1152C29.1364 18.1152 29.4367 18.5152 29.8372 19.1152C30.2377 19.6152 30.8385 19.9152 30.5381 21.0152C30.3379 22.1152 30.5381 22.3152 30.9386 21.5152C31.3391 20.7152 31.9399 20.4152 32.2402 20.8152C32.5406 21.2152 32.7409 22.0152 32.7409 22.5152C32.7409 23.1152 32.9411 23.2152 33.0412 22.8152C33.2415 22.4152 33.642 22.1152 33.9424 22.3152C34.2427 22.5152 35.0437 22.5152 35.6445 22.4152C36.2452 22.3152 36.045 23.1152 35.1439 24.2152C35.1439 24.2152 27.3341 32.4152 16.9211 29.7152C10.9136 28.2152 6.20775 27.1152 1.90237 15.5152Z"
                fill="#BA0026"
              />
            </symbol>
            <symbol
              id="svg__logoText"
              viewBox="75 -12 150 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.8317 30L55.2682 4.55078L61.1936 3.76953L58.358 17.1289C59.0359 17.0768 59.6748 16.8945 60.2745 16.582C60.8872 16.2695 61.4543 15.8724 61.9758 15.3906C62.4973 14.8958 62.9666 14.3294 63.3838 13.6914C63.801 13.0534 64.153 12.3828 64.4398 11.6797C64.7397 10.9635 64.9678 10.2344 65.1243 9.49219C65.2807 8.73698 65.3589 8.0013 65.3589 7.28516C65.3589 6.54297 65.2612 5.84635 65.0656 5.19531C64.8831 4.53125 64.5898 3.95182 64.1856 3.45703C63.7945 2.94922 63.2795 2.55208 62.6407 2.26562C62.0149 1.97917 61.2653 1.83594 60.3918 1.83594C58.7622 1.83594 57.302 2.05729 56.0113 2.5C54.7337 2.94271 53.6516 3.58073 52.7651 4.41406C51.8786 5.2474 51.2006 6.26953 50.7313 7.48047C50.262 8.67839 50.0273 10.0391 50.0273 11.5625C50.0273 12.0703 50.0534 12.487 50.1055 12.8125C50.1707 13.125 50.2359 13.3789 50.3011 13.5742C50.3663 13.7565 50.4249 13.8997 50.4771 14.0039C50.5423 14.1081 50.5749 14.1992 50.5749 14.2773C49.8839 14.2773 49.2712 14.2122 48.7366 14.082C48.2021 13.9388 47.7523 13.7174 47.3873 13.418C47.0353 13.1185 46.7615 12.7214 46.566 12.2266C46.3834 11.7318 46.2922 11.1198 46.2922 10.3906C46.2922 9.50521 46.4812 8.63281 46.8593 7.77344C47.2504 6.91406 47.7784 6.10026 48.4433 5.33203C49.1212 4.5638 49.91 3.85417 50.8095 3.20312C51.7221 2.55208 52.6934 1.99219 53.7233 1.52344C54.7663 1.04167 55.8484 0.670573 56.9696 0.410156C58.1038 0.136719 59.2315 0 60.3527 0C61.9954 0 63.4099 0.221354 64.5963 0.664062C65.7826 1.09375 66.7604 1.67318 67.5296 2.40234C68.3118 3.13151 68.8855 3.97135 69.2505 4.92188C69.6156 5.85938 69.7981 6.84245 69.7981 7.87109C69.7981 9.14714 69.5308 10.4232 68.9963 11.6992C68.4748 12.9753 67.7121 14.1276 66.7083 15.1562C65.7175 16.1719 64.505 16.9987 63.0709 17.6367C61.6499 18.2747 60.0398 18.5938 58.2407 18.5938H58.0256L55.5811 30H49.8317Z"
                fill="black"
              />
              <path
                d="M81.3946 22.832C81.0165 23.9128 80.5928 24.8503 80.1235 25.6445C79.6672 26.4388 79.1848 27.1094 78.6763 27.6562C78.1809 28.2031 77.666 28.6458 77.1315 28.9844C76.61 29.3229 76.1015 29.5833 75.6061 29.7656C75.1107 29.9479 74.6348 30.0716 74.1785 30.1367C73.7353 30.2018 73.3377 30.2344 72.9857 30.2344C72.3859 30.2344 71.8253 30.1432 71.3039 29.9609C70.7824 29.7786 70.3261 29.4922 69.935 29.1016C69.5569 28.7109 69.257 28.2161 69.0354 27.6172C68.8138 27.0182 68.703 26.2956 68.703 25.4492C68.703 25.0846 68.729 24.6875 68.7812 24.2578C68.8333 23.8151 68.9116 23.3398 69.0159 22.832L73.2985 2.79297L79.2239 1.99219L74.6283 23.5938C74.5631 23.8151 74.5175 24.0365 74.4914 24.2578C74.4784 24.4661 74.4719 24.6745 74.4719 24.8828C74.4719 25.4427 74.6023 25.8333 74.863 26.0547C75.1237 26.263 75.5344 26.3672 76.095 26.3672C76.4861 26.3672 76.8642 26.2826 77.2292 26.1133C77.6073 25.931 77.9528 25.6836 78.2657 25.3711C78.5786 25.0586 78.8589 24.6875 79.1066 24.2578C79.3543 23.8151 79.5564 23.3398 79.7128 22.832H81.3946Z"
                fill="black"
              />
              <path
                d="M102.476 22.832C102.098 23.9128 101.687 24.8503 101.244 25.6445C100.8 26.4388 100.338 27.1094 99.8551 27.6562C99.3858 28.2031 98.9034 28.6458 98.408 28.9844C97.9126 29.3229 97.4302 29.5833 96.9609 29.7656C96.4916 29.9479 96.0418 30.0716 95.6115 30.1367C95.1813 30.2018 94.7902 30.2344 94.4382 30.2344C93.304 30.2344 92.3979 29.9284 91.72 29.3164C91.0551 28.6914 90.6509 27.7734 90.5075 26.5625C90.1816 27.0182 89.8231 27.4674 89.432 27.9102C89.0408 28.3398 88.6041 28.7305 88.1217 29.082C87.6394 29.4206 87.0983 29.7005 86.4986 29.9219C85.9119 30.1302 85.2601 30.2344 84.543 30.2344C83.8521 30.2344 83.1872 30.1237 82.5484 29.9023C81.9096 29.681 81.3424 29.3164 80.847 28.8086C80.3516 28.3008 79.954 27.6367 79.6541 26.8164C79.3543 25.9961 79.2044 24.9935 79.2044 23.8086C79.2044 22.8971 79.2956 21.9206 79.4781 20.8789C79.6606 19.8372 79.9409 18.7956 80.319 17.7539C80.6971 16.7122 81.1664 15.7161 81.727 14.7656C82.3007 13.8021 82.9656 12.9557 83.7217 12.2266C84.4909 11.4844 85.3579 10.8984 86.3226 10.4688C87.2874 10.026 88.3499 9.80469 89.5102 9.80469C90.6444 9.80469 91.4657 10 91.9742 10.3906C92.4957 10.7812 92.7564 11.263 92.7564 11.8359V12.1289L93.1866 10H98.9556L96.0809 23.5938C96.0157 23.8151 95.9701 24.0365 95.944 24.2578C95.9179 24.4661 95.9049 24.6745 95.9049 24.8828C95.9049 26.0286 96.4524 26.6016 97.5476 26.6016C97.9387 26.6016 98.2972 26.5039 98.6231 26.3086C98.9621 26.1003 99.2685 25.8268 99.5422 25.4883C99.816 25.1497 100.057 24.7526 100.266 24.2969C100.474 23.8281 100.65 23.3398 100.794 22.832H102.476ZM92.3849 13.8086C92.3849 13.6914 92.3588 13.5482 92.3066 13.3789C92.2545 13.1966 92.1632 13.0273 92.0329 12.8711C91.9155 12.7018 91.7526 12.5651 91.544 12.4609C91.3354 12.3438 91.0681 12.2852 90.7422 12.2852C90.1816 12.2852 89.6471 12.4674 89.1386 12.832C88.6432 13.1966 88.1869 13.6849 87.7697 14.2969C87.3525 14.8958 86.981 15.5794 86.6551 16.3477C86.3291 17.1159 86.0488 17.9102 85.8142 18.7305C85.5925 19.5378 85.4231 20.3385 85.3057 21.1328C85.1884 21.9141 85.1297 22.6172 85.1297 23.2422C85.1297 24.0104 85.2014 24.6029 85.3448 25.0195C85.4882 25.4362 85.6577 25.7487 85.8533 25.957C86.0619 26.1523 86.2835 26.2695 86.5182 26.3086C86.7528 26.3477 86.9614 26.3672 87.1439 26.3672C87.4438 26.3672 87.7567 26.2956 88.0826 26.1523C88.4216 25.9961 88.741 25.7747 89.0408 25.4883C89.3537 25.1888 89.634 24.8177 89.8817 24.375C90.1425 23.9323 90.338 23.418 90.4684 22.832L92.3849 13.8086Z"
                fill="black"
              />
              <path
                d="M122.716 22.832C122.155 24.4727 121.549 25.7812 120.897 26.7578C120.258 27.7344 119.606 28.4831 118.941 29.0039C118.29 29.5117 117.644 29.8438 117.005 30C116.38 30.1562 115.8 30.2344 115.265 30.2344C114.378 30.2344 113.635 30.1107 113.036 29.8633C112.436 29.6029 111.954 29.2643 111.589 28.8477C111.223 28.418 110.956 27.9362 110.787 27.4023C110.63 26.8555 110.552 26.2956 110.552 25.7227C110.552 25.0456 110.643 24.2578 110.826 23.3594C111.021 22.4479 111.23 21.5169 111.452 20.5664C111.673 19.6159 111.875 18.6979 112.058 17.8125C112.253 16.9271 112.351 16.1654 112.351 15.5273C112.351 14.1602 111.869 13.4766 110.904 13.4766C110.539 13.4766 110.2 13.5742 109.887 13.7695C109.574 13.9648 109.287 14.2318 109.027 14.5703C108.766 14.8958 108.531 15.2865 108.323 15.7422C108.114 16.1849 107.932 16.6602 107.775 17.168L105.057 30H99.288L103.532 10H109.301L108.87 12.0703C109.301 11.5885 109.724 11.2044 110.141 10.918C110.572 10.6185 110.989 10.3906 111.393 10.2344C111.797 10.0781 112.175 9.97396 112.527 9.92188C112.892 9.86979 113.231 9.84375 113.544 9.84375C114.183 9.84375 114.776 9.92839 115.324 10.0977C115.871 10.2669 116.341 10.5339 116.732 10.8984C117.136 11.263 117.449 11.7318 117.67 12.3047C117.892 12.8776 118.003 13.5612 118.003 14.3555C118.003 14.8893 117.951 15.4688 117.846 16.0938C117.755 16.7057 117.638 17.3372 117.494 17.9883C117.351 18.6263 117.194 19.2643 117.025 19.9023C116.869 20.5404 116.719 21.1523 116.575 21.7383C116.432 22.3242 116.308 22.8711 116.204 23.3789C116.112 23.8737 116.067 24.3099 116.067 24.6875C116.067 25.1823 116.178 25.5859 116.399 25.8984C116.634 26.2109 117.058 26.3672 117.67 26.3672C118.101 26.3672 118.479 26.2826 118.805 26.1133C119.13 25.944 119.424 25.7031 119.685 25.3906C119.945 25.0781 120.18 24.707 120.389 24.2773C120.61 23.8346 120.825 23.3529 121.034 22.832H122.716Z"
                fill="black"
              />
              <path
                d="M137.774 22.832C137.213 23.7695 136.568 24.681 135.838 25.5664C135.121 26.4518 134.306 27.2396 133.393 27.9297C132.494 28.6198 131.49 29.1797 130.382 29.6094C129.286 30.026 128.08 30.2344 126.764 30.2344C125.812 30.2344 124.952 30.1172 124.182 29.8828C123.413 29.6354 122.755 29.2578 122.207 28.75C121.66 28.2422 121.243 27.5911 120.956 26.7969C120.656 25.9896 120.506 25.0195 120.506 23.8867C120.506 23.1185 120.584 22.2331 120.741 21.2305C120.897 20.2279 121.145 19.1992 121.484 18.1445C121.823 17.0898 122.272 16.0547 122.833 15.0391C123.394 14.0234 124.072 13.1185 124.867 12.3242C125.662 11.5169 126.594 10.8724 127.663 10.3906C128.732 9.89583 129.951 9.64844 131.32 9.64844C132.22 9.64844 132.95 9.75911 133.51 9.98047C134.084 10.1888 134.534 10.4688 134.86 10.8203C135.199 11.1719 135.427 11.582 135.544 12.0508C135.675 12.5065 135.74 12.9818 135.74 13.4766C135.74 14.6354 135.486 15.7161 134.977 16.7188C134.469 17.7083 133.784 18.5742 132.924 19.3164C132.076 20.0586 131.099 20.6576 129.99 21.1133C128.882 21.569 127.728 21.8359 126.529 21.9141C126.503 22.2135 126.477 22.5 126.451 22.7734C126.438 23.0339 126.431 23.2812 126.431 23.5156C126.431 24.1927 126.49 24.7526 126.607 25.1953C126.738 25.625 126.92 25.9635 127.155 26.2109C127.403 26.4583 127.702 26.6341 128.054 26.7383C128.419 26.8294 128.843 26.875 129.326 26.875C130.121 26.875 130.838 26.7708 131.477 26.5625C132.128 26.3542 132.735 26.0677 133.295 25.7031C133.856 25.3385 134.384 24.9089 134.879 24.4141C135.388 23.9193 135.896 23.3919 136.405 22.832H137.774ZM126.842 20C127.598 19.9479 128.328 19.7331 129.032 19.3555C129.736 18.9779 130.355 18.4896 130.89 17.8906C131.424 17.2786 131.848 16.5885 132.161 15.8203C132.487 15.0391 132.65 14.2318 132.65 13.3984C132.65 12.9036 132.578 12.5065 132.435 12.207C132.291 11.9076 132.031 11.7578 131.653 11.7578C131.144 11.7578 130.642 12.0052 130.147 12.5C129.664 12.9818 129.208 13.6133 128.778 14.3945C128.348 15.1758 127.963 16.0612 127.624 17.0508C127.298 18.0273 127.037 19.0104 126.842 20Z"
                fill="black"
              />
              <path
                d="M138.966 11.6016H137.637L137.969 10H139.279L140.492 4.47266L146.417 3.67188C146.352 3.93229 146.287 4.21875 146.222 4.53125C146.156 4.83073 146.091 5.14974 146.026 5.48828C145.883 6.04818 145.726 6.71875 145.557 7.5C145.4 8.26823 145.231 9.10156 145.048 10H147.454L147.141 11.6016H144.735L142.174 23.5938C142.108 23.8542 142.056 24.1081 142.017 24.3555C141.991 24.5898 141.978 24.8047 141.978 25C141.978 25.4167 142.069 25.7617 142.252 26.0352C142.447 26.3086 142.819 26.4453 143.366 26.4453C143.51 26.4453 143.679 26.4453 143.875 26.4453C144.07 26.4323 144.253 26.3932 144.422 26.3281C144.123 27.1875 143.797 27.8776 143.445 28.3984C143.093 28.9062 142.734 29.2969 142.369 29.5703C142.004 29.8438 141.633 30.0195 141.254 30.0977C140.889 30.1888 140.531 30.2344 140.179 30.2344C139.462 30.2344 138.849 30.1237 138.341 29.9023C137.832 29.668 137.415 29.349 137.089 28.9453C136.776 28.5417 136.548 28.0664 136.405 27.5195C136.248 26.9596 136.17 26.3607 136.17 25.7227C136.17 25.0326 136.248 24.3229 136.405 23.5938L138.966 11.6016Z"
                fill="black"
              />
              <path
                d="M178.664 14.8047C177.882 15.625 176.872 16.3216 175.633 16.8945C174.395 17.4674 173.039 17.8776 171.566 18.125C171.409 19.974 171.051 21.6406 170.49 23.125C169.943 24.6094 169.245 25.8724 168.398 26.9141C167.55 27.9557 166.579 28.7565 165.484 29.3164C164.389 29.8763 163.229 30.1562 162.003 30.1562C161.077 30.1562 160.217 30.0456 159.422 29.8242C158.639 29.5898 157.962 29.2253 157.388 28.7305C156.827 28.2227 156.391 27.5716 156.078 26.7773C155.752 25.9701 155.589 24.9935 155.589 23.8477C155.589 23.0664 155.674 22.181 155.843 21.1914C155.999 20.1888 156.254 19.1602 156.606 18.1055C156.971 17.0508 157.434 16.0221 157.994 15.0195C158.568 14.0039 159.259 13.099 160.067 12.3047C160.888 11.5104 161.834 10.8724 162.903 10.3906C163.972 9.89583 165.191 9.64844 166.559 9.64844C169.988 9.64844 171.703 11.7773 171.703 16.0352V16.0742C171.768 16.1003 171.826 16.1133 171.879 16.1133C171.944 16.1133 172.029 16.1133 172.133 16.1133C172.602 16.1133 173.104 16.0482 173.639 15.918C174.186 15.7747 174.734 15.5924 175.281 15.3711C175.829 15.1497 176.363 14.8958 176.885 14.6094C177.406 14.3099 177.882 14.0104 178.312 13.7109L178.664 14.8047ZM168.241 18.2422C167.824 18.138 167.537 17.9362 167.381 17.6367C167.237 17.3242 167.166 16.9661 167.166 16.5625C167.166 16.0026 167.277 15.5469 167.498 15.1953C167.733 14.8307 168.039 14.5638 168.417 14.3945C168.391 13.9648 168.346 13.6068 168.28 13.3203C168.215 13.0208 168.124 12.7799 168.007 12.5977C167.889 12.4023 167.739 12.2656 167.557 12.1875C167.387 12.1094 167.166 12.0703 166.892 12.0703C166.41 12.0703 165.947 12.2591 165.503 12.6367C165.06 13.0013 164.637 13.4896 164.232 14.1016C163.841 14.7135 163.476 15.4167 163.137 16.2109C162.811 16.9922 162.531 17.7995 162.296 18.6328C162.062 19.4661 161.879 20.293 161.749 21.1133C161.618 21.9206 161.553 22.6562 161.553 23.3203C161.553 23.9844 161.586 24.5247 161.651 24.9414C161.729 25.3581 161.847 25.6901 162.003 25.9375C162.172 26.1719 162.388 26.3346 162.648 26.4258C162.909 26.5169 163.229 26.5625 163.607 26.5625C164.089 26.5625 164.571 26.3477 165.054 25.918C165.549 25.4883 166.005 24.9023 166.423 24.1602C166.84 23.418 167.205 22.5391 167.518 21.5234C167.844 20.5078 168.085 19.4141 168.241 18.2422Z"
                fill="black"
              />
              <path
                d="M177.159 6.83594C177.445 5.40365 177.863 4.24479 178.41 3.35938C178.971 2.47396 179.59 1.78385 180.268 1.28906C180.946 0.794271 181.65 0.46224 182.38 0.292969C183.11 0.123698 183.801 0.0390625 184.453 0.0390625C185.053 0.0390625 185.633 0.143229 186.193 0.351562C186.767 0.559896 187.269 0.852865 187.699 1.23047C188.142 1.60807 188.494 2.0638 188.755 2.59766C189.029 3.11849 189.166 3.70443 189.166 4.35547C189.166 4.98047 189.127 5.52734 189.048 5.99609H187.171C187.197 5.77474 187.217 5.58594 187.23 5.42969C187.243 5.27344 187.249 5.10417 187.249 4.92188C187.249 4.46615 187.093 4.1276 186.78 3.90625C186.48 3.67188 186.128 3.55469 185.724 3.55469C185.515 3.55469 185.274 3.60026 185 3.69141C184.74 3.78255 184.472 3.95182 184.199 4.19922C183.938 4.43359 183.69 4.76562 183.456 5.19531C183.234 5.625 183.058 6.17188 182.928 6.83594L182.243 10H185.176L184.883 11.6016H181.93L177.315 33.2031C177.028 34.6354 176.611 35.7943 176.064 36.6797C175.529 37.5651 174.929 38.2552 174.264 38.75C173.613 39.2448 172.928 39.5768 172.211 39.7461C171.494 39.9154 170.81 40 170.158 40C169.558 40 168.978 39.8958 168.417 39.6875C167.844 39.4792 167.335 39.1862 166.892 38.8086C166.449 38.431 166.097 37.9753 165.836 37.4414C165.562 36.9206 165.425 36.3346 165.425 35.6836C165.425 34.7591 165.608 33.9779 165.973 33.3398C166.325 32.7148 166.814 32.1745 167.439 31.7188C168.065 31.276 168.795 30.8984 169.63 30.5859C170.464 30.2734 171.357 29.974 172.309 29.6875L177.159 6.83594ZM172.035 30.9961C171.409 31.2044 170.829 31.4323 170.295 31.6797C169.747 31.9401 169.278 32.2331 168.887 32.5586C168.495 32.8971 168.189 33.2747 167.967 33.6914C167.746 34.1081 167.635 34.5833 167.635 35.1172C167.635 35.2734 167.674 35.4297 167.752 35.5859C167.831 35.7422 167.941 35.8789 168.085 35.9961C168.228 36.1263 168.398 36.2305 168.593 36.3086C168.789 36.3997 169.004 36.4453 169.239 36.4453C169.447 36.4453 169.662 36.3932 169.884 36.2891C170.093 36.1979 170.301 36.0286 170.51 35.7812C170.705 35.5469 170.888 35.2279 171.057 34.8242C171.227 34.4206 171.377 33.9193 171.507 33.3203L172.035 30.9961Z"
                fill="black"
              />
              <path
                d="M205.534 22.832C205.156 23.9128 204.732 24.8503 204.263 25.6445C203.806 26.4388 203.324 27.1094 202.816 27.6562C202.32 28.2031 201.805 28.6458 201.271 28.9844C200.749 29.3229 200.241 29.5833 199.745 29.7656C199.25 29.9479 198.774 30.0716 198.318 30.1367C197.875 30.2018 197.477 30.2344 197.125 30.2344C196.525 30.2344 195.965 30.1432 195.443 29.9609C194.922 29.7786 194.465 29.4922 194.074 29.1016C193.696 28.7109 193.396 28.2161 193.175 27.6172C192.953 27.0182 192.842 26.2956 192.842 25.4492C192.842 25.0846 192.868 24.6875 192.921 24.2578C192.973 23.8151 193.051 23.3398 193.155 22.832L197.438 2.79297L203.363 1.99219L198.768 23.5938C198.702 23.8151 198.657 24.0365 198.631 24.2578C198.618 24.4661 198.611 24.6745 198.611 24.8828C198.611 25.4427 198.742 25.8333 199.002 26.0547C199.263 26.263 199.674 26.3672 200.234 26.3672C200.625 26.3672 201.004 26.2826 201.369 26.1133C201.747 25.931 202.092 25.6836 202.405 25.3711C202.718 25.0586 202.998 24.6875 203.246 24.2578C203.494 23.8151 203.696 23.3398 203.852 22.832H205.534Z"
                fill="black"
              />
              <path
                d="M226.38 14.8047C225.598 15.625 224.588 16.3216 223.349 16.8945C222.111 17.4674 220.755 17.8776 219.282 18.125C219.125 19.974 218.767 21.6406 218.206 23.125C217.658 24.6094 216.961 25.8724 216.114 26.9141C215.266 27.9557 214.295 28.7565 213.2 29.3164C212.105 29.8763 210.944 30.1562 209.719 30.1562C208.793 30.1562 207.933 30.0456 207.137 29.8242C206.355 29.5898 205.677 29.2253 205.104 28.7305C204.543 28.2227 204.106 27.5716 203.793 26.7773C203.468 25.9701 203.305 24.9935 203.305 23.8477C203.305 23.0664 203.389 22.181 203.559 21.1914C203.715 20.1888 203.969 19.1602 204.321 18.1055C204.687 17.0508 205.149 16.0221 205.71 15.0195C206.284 14.0039 206.975 13.099 207.783 12.3047C208.604 11.5104 209.549 10.8724 210.618 10.3906C211.687 9.89583 212.906 9.64844 214.275 9.64844C217.704 9.64844 219.418 11.7773 219.418 16.0352V16.0742C219.484 16.1003 219.542 16.1133 219.594 16.1133C219.66 16.1133 219.744 16.1133 219.849 16.1133C220.318 16.1133 220.82 16.0482 221.354 15.918C221.902 15.7747 222.45 15.5924 222.997 15.3711C223.545 15.1497 224.079 14.8958 224.601 14.6094C225.122 14.3099 225.598 14.0104 226.028 13.7109L226.38 14.8047ZM215.957 18.2422C215.54 18.138 215.253 17.9362 215.097 17.6367C214.953 17.3242 214.882 16.9661 214.882 16.5625C214.882 16.0026 214.992 15.5469 215.214 15.1953C215.449 14.8307 215.755 14.5638 216.133 14.3945C216.107 13.9648 216.061 13.6068 215.996 13.3203C215.931 13.0208 215.84 12.7799 215.722 12.5977C215.605 12.4023 215.455 12.2656 215.273 12.1875C215.103 12.1094 214.882 12.0703 214.608 12.0703C214.125 12.0703 213.663 12.2591 213.219 12.6367C212.776 13.0013 212.352 13.4896 211.948 14.1016C211.557 14.7135 211.192 15.4167 210.853 16.2109C210.527 16.9922 210.247 17.7995 210.012 18.6328C209.777 19.4661 209.595 20.293 209.465 21.1133C209.334 21.9206 209.269 22.6562 209.269 23.3203C209.269 23.9844 209.302 24.5247 209.367 24.9414C209.445 25.3581 209.562 25.6901 209.719 25.9375C209.888 26.1719 210.103 26.3346 210.364 26.4258C210.625 26.5169 210.944 26.5625 211.322 26.5625C211.805 26.5625 212.287 26.3477 212.77 25.918C213.265 25.4883 213.721 24.9023 214.138 24.1602C214.556 23.418 214.921 22.5391 215.234 21.5234C215.559 20.5078 215.801 19.4141 215.957 18.2422Z"
                fill="black"
              />
              <path
                d="M224.19 10H229.959L227.084 23.5938C227.019 23.8932 226.967 24.1667 226.928 24.4141C226.889 24.6484 226.869 24.8568 226.869 25.0391C226.869 25.4427 226.973 25.7682 227.182 26.0156C227.404 26.25 227.756 26.3672 228.238 26.3672C228.89 26.3672 229.516 26.1393 230.115 25.6836C230.715 25.2279 231.269 24.6289 231.778 23.8867C232.286 23.1315 232.749 22.2786 233.166 21.3281C233.583 20.3776 233.935 19.4076 234.222 18.418C234.522 17.4284 234.75 16.4648 234.907 15.5273C235.076 14.5768 235.161 13.737 235.161 13.0078C235.135 13.0729 235.063 13.1315 234.946 13.1836C234.841 13.2357 234.724 13.2812 234.594 13.3203C234.463 13.3464 234.333 13.3659 234.203 13.3789C234.072 13.3919 233.968 13.3984 233.89 13.3984C233.655 13.3984 233.446 13.3398 233.264 13.2227C233.081 13.0924 232.925 12.9297 232.795 12.7344C232.677 12.5391 232.586 12.3242 232.521 12.0898C232.469 11.8424 232.443 11.6016 232.443 11.3672C232.443 10.7422 232.638 10.2279 233.029 9.82422C233.433 9.40755 234.066 9.19922 234.926 9.19922C235.408 9.19922 235.806 9.29688 236.119 9.49219C236.445 9.6875 236.706 9.94792 236.901 10.2734C237.097 10.599 237.234 10.9701 237.312 11.3867C237.403 11.8034 237.449 12.2331 237.449 12.6758C237.449 13.7435 237.357 14.9219 237.175 16.2109C236.992 17.487 236.699 18.776 236.295 20.0781C235.904 21.3802 235.402 22.6432 234.789 23.8672C234.189 25.0781 233.466 26.1589 232.619 27.1094C231.771 28.0469 230.8 28.8021 229.705 29.375C228.61 29.9479 227.384 30.2344 226.028 30.2344C224.516 30.2344 223.317 29.8503 222.43 29.082C221.557 28.3008 221.12 27.1159 221.12 25.5273C221.12 25.306 221.133 25.026 221.159 24.6875C221.185 24.3359 221.237 23.9714 221.315 23.5938L224.19 10Z"
                fill="black"
              />
              <path
                d="M254.795 22.832C254.234 23.7695 253.589 24.681 252.859 25.5664C252.142 26.4518 251.327 27.2396 250.414 27.9297C249.515 28.6198 248.511 29.1797 247.403 29.6094C246.307 30.026 245.102 30.2344 243.785 30.2344C242.833 30.2344 241.973 30.1172 241.203 29.8828C240.434 29.6354 239.776 29.2578 239.228 28.75C238.681 28.2422 238.264 27.5911 237.977 26.7969C237.677 25.9896 237.527 25.0195 237.527 23.8867C237.527 23.1185 237.605 22.2331 237.762 21.2305C237.918 20.2279 238.166 19.1992 238.505 18.1445C238.844 17.0898 239.294 16.0547 239.854 15.0391C240.415 14.0234 241.093 13.1185 241.888 12.3242C242.683 11.5169 243.615 10.8724 244.684 10.3906C245.753 9.89583 246.972 9.64844 248.341 9.64844C249.241 9.64844 249.971 9.75911 250.531 9.98047C251.105 10.1888 251.555 10.4688 251.881 10.8203C252.22 11.1719 252.448 11.582 252.565 12.0508C252.696 12.5065 252.761 12.9818 252.761 13.4766C252.761 14.6354 252.507 15.7161 251.998 16.7188C251.49 17.7083 250.805 18.5742 249.945 19.3164C249.097 20.0586 248.12 20.6576 247.011 21.1133C245.903 21.569 244.75 21.8359 243.55 21.9141C243.524 22.2135 243.498 22.5 243.472 22.7734C243.459 23.0339 243.452 23.2812 243.452 23.5156C243.452 24.1927 243.511 24.7526 243.628 25.1953C243.759 25.625 243.941 25.9635 244.176 26.2109C244.424 26.4583 244.723 26.6341 245.075 26.7383C245.44 26.8294 245.864 26.875 246.347 26.875C247.142 26.875 247.859 26.7708 248.498 26.5625C249.15 26.3542 249.756 26.0677 250.316 25.7031C250.877 25.3385 251.405 24.9089 251.9 24.4141C252.409 23.9193 252.917 23.3919 253.426 22.832H254.795ZM243.863 20C244.619 19.9479 245.349 19.7331 246.053 19.3555C246.757 18.9779 247.377 18.4896 247.911 17.8906C248.446 17.2786 248.869 16.5885 249.182 15.8203C249.508 15.0391 249.671 14.2318 249.671 13.3984C249.671 12.9036 249.599 12.5065 249.456 12.207C249.313 11.9076 249.052 11.7578 248.674 11.7578C248.165 11.7578 247.663 12.0052 247.168 12.5C246.686 12.9818 246.229 13.6133 245.799 14.3945C245.369 15.1758 244.984 16.0612 244.645 17.0508C244.319 18.0273 244.059 19.0104 243.863 20Z"
                fill="black"
              />
              <path
                d="M265.12 8.76953C265.198 10.5013 265.27 12.0052 265.335 13.2812C265.413 14.5443 265.485 15.6445 265.55 16.582C265.615 17.5065 265.674 18.2943 265.726 18.9453C265.778 19.5964 265.824 20.1758 265.863 20.6836C265.915 21.1784 265.948 21.6341 265.961 22.0508C265.987 22.4544 266 22.8776 266 23.3203C266 24.1927 265.876 24.974 265.628 25.6641C265.394 26.3411 265.068 26.9336 264.651 27.4414C264.247 27.9492 263.771 28.3854 263.223 28.75C262.689 29.1016 262.121 29.388 261.522 29.6094C260.935 29.8307 260.335 29.987 259.723 30.0781C259.11 30.1823 258.53 30.2344 257.982 30.2344C256.978 30.2344 256.105 30.0846 255.362 29.7852C254.632 29.4727 254.025 29.0755 253.543 28.5938C253.061 28.099 252.709 27.5521 252.487 26.9531C252.252 26.3411 252.135 25.7292 252.135 25.1172C252.135 24.6484 252.2 24.2188 252.331 23.8281C252.448 23.4245 252.604 23.0664 252.8 22.7539C252.996 22.4414 253.217 22.1745 253.465 21.9531C253.726 21.7188 253.993 21.5365 254.267 21.4062C255.388 19.401 256.333 17.4219 257.102 15.4688C257.871 13.5026 258.569 11.5299 259.195 9.55078L265.12 8.76953ZM254.267 24.2773C254.267 25.2148 254.449 25.918 254.814 26.3867C255.192 26.8424 255.825 27.0703 256.711 27.0703C257.154 27.0703 257.585 27.0117 258.002 26.8945C258.419 26.7643 258.79 26.556 259.116 26.2695C259.442 25.9701 259.703 25.5859 259.899 25.1172C260.094 24.6484 260.192 24.0625 260.192 23.3594C260.192 23.0208 260.179 22.6953 260.153 22.3828C260.14 22.0573 260.12 21.7188 260.094 21.3672C260.068 21.0026 260.029 20.599 259.977 20.1562C259.938 19.7135 259.886 19.1992 259.82 18.6133C259.768 18.0273 259.71 17.3503 259.644 16.582C259.579 15.8138 259.508 14.9154 259.429 13.8867C259.025 15.1888 258.549 16.4518 258.002 17.6758C257.454 18.8997 256.848 20.1562 256.183 21.4453C256.444 21.5885 256.659 21.7708 256.828 21.9922C257.011 22.2135 257.102 22.4935 257.102 22.832C257.102 23.0794 257.063 23.3203 256.985 23.5547C256.907 23.7891 256.789 24.0039 256.633 24.1992C256.476 24.3815 256.287 24.5312 256.066 24.6484C255.857 24.7526 255.616 24.8047 255.342 24.8047C255.121 24.8047 254.912 24.7721 254.716 24.707C254.521 24.6419 254.371 24.4987 254.267 24.2773Z"
                fill="black"
              />
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
