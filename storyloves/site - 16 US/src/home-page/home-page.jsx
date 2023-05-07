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

                        <span>Messages</span>
                        <svg class="svg__message">
                          <use href="#svg__message"></use>
                        </svg>
                      </a>
                      <a
                        href="/nearby"
                        class="menu__item active svgEl"
                        data-svg="location"
                      >
                        <span>People nearby</span>
                        <svg class="svg__location">
                          <use href="#svg__location"></use>
                        </svg>
                      </a>
                      <a
                        href="/search"
                        class="menu__item svgEl"
                        data-svg="search"
                      >
                        <span>Search</span>
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
                            data-content="Private photo"
                          >
                            <svg class="svg__lock">
                              <use href="#svg__lock"></use>
                            </svg>
                          </div>
                          <img src={malePng} />
                        </div>
                        <div class="user__cell">
                          <div class="user__name">admin</div>

                          <a
                            href="/premium"
                            onclick="ymc('getpremium_menu_button')"
                            class="user__novip"
                          >
                            Get premium
                          </a>
                        </div>
                        <div class="user__button">
                          <div>
                            <a
                              href="/premium"
                              onclick="ymc('click_balance_sidebar_premium')"
                            >
                              {/* <span class="coins_bl">0</span> */}
                            </a>
                          </div>
                          <a
                            href="/user/profile"
                            class="user__edit tooltipstered svgEl"
                            data-tooltip="tooltip-top"
                            data-svg="edit"
                            data-content="Edit profile"
                          >
                            <svg class="svg__edit">
                              <use href="#svg__edit"></use>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="user__line"></div>
                      <div class="user__links">
                        <a href="/id287832982" class="user__link">
                          <span data-svg="people" class="svgEl">
                            <svg class="svg__people">
                              <use href="#svg__people"></use>
                            </svg>
                          </span>
                          <span>Profile</span>
                        </a>
                        <a href="/user/photo" class="user__link">
                          <span data-svg="photo" class="svgEl">
                            <svg class="svg__photo">
                              <use href="#svg__photo"></use>
                            </svg>
                          </span>
                          <span>My photos</span>
                        </a>
                        <a href="/chat" class="user__link">
                          <span data-svg="message" class="svgEl">
                          {!isVisible || <sup class="count-mes">1</sup>}
                            <svg class="svg__message">
                              <use href="#svg__message"></use>
                            </svg>
                          </span>
                          <span>Messages</span>
                        </a>

                        <a href="/favorites" class="user__link">
                          <span data-svg="like" class="svgEl">
                            <svg class="svg__like">
                              <use href="#svg__like"></use>
                            </svg>
                          </span>
                          <span>Favorites</span>
                        </a>
                        <a href="/guests" class="user__link">
                          <span data-svg="eye" class="svgEl">
                            <svg class="svg__eye">
                              <use href="#svg__eye"></use>
                            </svg>
                          </span>
                          <span>Guests</span>
                        </a>
                        <a href="/settings" class="user__link">
                          <span data-svg="setting" class="svgEl">
                            <svg class="svg__setting">
                              <use href="#svg__setting"></use>
                            </svg>
                          </span>
                          <span>Settings</span>
                        </a>
                        <a href="/logout" class="user__link">
                          <span data-svg="exit" class="svgEl">
                            <svg class="svg__exit">
                              <use href="#svg__exit"></use>
                            </svg>
                          </span>
                          <span>Log out</span>
                        </a>
                      </div>
                    </div>

                    <div class="premium site-bar">
                      <div class="premium__title">
                        <b>$</b> Premium account
                      </div>
                      <div class="premium__img svgEl" data-svg="premium-img_v2">
                        <svg class="svg__premium-img_v2">
                          <use href="#svg__premium-img_v2"></use>
                        </svg>
                      </div>
                      <div class="premium__text">
                        Premium account allows you to enjoy all features of
                        StoryLoves. Get to know new people, view photos, chat
                        and make friends!
                      </div>
                      <a
                        href="/premium"
                        onclick="ym(56503840,'reachGoal','getpremium_banner')"
                        class="premium__button button"
                      >
                        <span>Get premium</span>
                      </a>
                    </div>
                  </div>
                  <div class="pure-u-1 pure-u-md-2-3 pure-u-xl-3-4">
                    <div class="content">
                      <div class="pure-g">
                        <div class="pure-u">
                          <div class="content__title">People nearby</div>
                        </div>
                      </div>
                      <div class="content__line"></div>
                      <div class="content__box">
                        <div class="pure-g">
                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283120280"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/195bae3b08133035d604581b24f2b794/7a87c557351a8be07f7cea15f43e258b/08d295e51a50a4a8c392791ecafaf136.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Zoe</span>,
                                      19
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~18 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283120280"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4db"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283133134"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/ab259b698dce1ab640f52b630dec1946/cd3031f160fb03a231aabdcf33c2890f/6bf15df4e5b67098c49596f1c6afba3c.jpg" />

                                  <div class="people__status people__status--online"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Tyana</span>
                                      , 20
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~15 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283133134"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db50a"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id287717712"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/5974f12911544b2fd687811ebdf0d7e4/20229d140e5dda3d53a8fe0babd4617c/11e2019365d4e4d664a3eff232bf2349.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Arina</span>
                                      , 21
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~27 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/287717712"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="635a4d46ddaa2e66f61616a0"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283117511"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/5b0c33376fe218fc086124236d0ad7f9/fc57aff6d2abc3438936f5e9457d491f/838f24df15cf22378df02d505d0fe07f.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Livvie
                                      </span>
                                      , 19
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~9 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283117511"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4d3"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283131492"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/f48250d998bfcd38cf3e233fa0717c69/4eac90e4e182af9d7015077afa65c118/42b909b2799590f55deb79ec3eac3628.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Hannah
                                      </span>
                                      , 20
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~6 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283131492"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db505"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283123664"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/f9224c879a36a79edd626121194299f8/6d1678ee95377911420c9424aff90ba6/6f6fb37ea43e80fda505e225171da1b1.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Karrisha
                                      </span>
                                      , 19
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~24 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283123664"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4e8"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283162257"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/5b0c33376fe218fc086124236d0ad7f9/ec79aef3f1836e24196fb6f4826e5405/85e93dd03018690a771baa9d28fbd05a.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Ashley
                                      </span>
                                      , 23
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~28 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283162257"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db569"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283124472"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/608c6779802dd23e0e0a186a9989ca1c/a17b8885691b175221e78a235e15c7f8/10d42ba5c9da25355f8f2e2b9dd96d36.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Courtney
                                      </span>
                                      , 20
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~22 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283124472"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4eb"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283144064"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/6e02d689e73e5546b2a1c922817b0982/5148b7ca0c56bd2cb5080634fb8cd3cd/2b9af3d3e74f68d64040d1ed70be08da.jpg" />

                                  <div class="people__status people__status--online"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Chloe</span>
                                      , 22
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~6 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283144064"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db52d"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283125102"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/be73b365cd50122e4bd8b988d2fc3880/e65a4f1e57c378200e1b9a6ac38280d2/6c1f00c03b2f16bd1cfa301adb52962d.jpg" />

                                  <div class="people__status people__status--online"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Caitlin
                                      </span>
                                      , 20
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~29 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283125102"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4ee"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283118233"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/58c2e5f0722f02476aa5a670cef1b3cb/2bdf59f27430fc3f6ce3477305701614/31aa913e0ad7d208935eaafff285785e.jpg" />

                                  <div class="people__status people__status--online"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Holly</span>
                                      , 19
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~8 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283118233"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4d5"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283132383"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/db43f9b507d251b1868874f51a4c5065/51f4ddafbb3a98567627793c03f7e65f/a81f013f84d7d304f604a846f37b3884.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Bianca
                                      </span>
                                      , 20
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~23 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283132383"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db508"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283152528"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/df16fb02d4108aa3e51427d9b8053c0b/5c6611d00efc0f032f1ab5ac95286d53/1aa246d3b324c56b0f0583416d8a443f.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Tayla</span>
                                      , 22
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~13 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283152528"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db548"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283170636"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/72dab9ff179b968db928eeb53b2266c4/f6f9ca4f6105363e1e42161d18a1099f/d836d5f6f0fca087f3c2c4fe8ea2a383.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Ella</span>,
                                      24
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~21 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283170636"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a04cf1e8c4cc16db583"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283121630"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/5166ae39eab8d0650f594f3d5d39d2f5/e46fb9ed6ecfa648071ccf9e8f326eb4/7a09cad16e51f2dc67bd08a489ff050b.jpg" />

                                  <div class="people__status people__status--online"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Sian</span>,
                                      19
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~9 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283121630"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4e0"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283112423"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/f48250d998bfcd38cf3e233fa0717c69/4a666a3e79ec79590ee94f7c51917111/24866c288a5c0e7b31a70f1ef9b1452c.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Jamie</span>
                                      , 18
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~18 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283112423"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4c4"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283165515"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/195bae3b08133035d604581b24f2b794/841df9ceff999869c0d19b013053570b/a171676940ffbc406a3bf4c9fd0d4e7c.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Candi</span>
                                      , 24
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~24 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283165515"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db572"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283145537"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/1ce095d26ebfe394b104b21d2f9b85eb/7b66201bfaf74d30fc399ac5d74e8e55/aa80047dedeca7979b032f1137cc23ed.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Emma</span>,
                                      22
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~10 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283145537"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db532"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283141116"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/06412d77c1b22f7bccc2492439b173b4/d18c877591ebcc5148378942c23038bd/75bf7e3804b86fc6faa64057a259314d.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Caroline
                                      </span>
                                      , 21
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~10 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283141116"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db523"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283110089"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/a6737ce74822c7360d24ad1b899f5871/71fa7919b715c069dcb491bd346c05d1/1a78ee0d29343c8d7b48b6932d0f4a98.jpg" />

                                  <div class="people__status people__status--online"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Evelin
                                      </span>
                                      , 18
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~9 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283110089"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4bd"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283158726"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/f9224c879a36a79edd626121194299f8/78320cdec432b2958a822a6950329e24/e0b441724e61802981163771c8a2addd.jpg" />

                                  <div class="people__status people__status--online"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        ElliNa
                                      </span>
                                      , 23
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~8 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283158726"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db55d"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id287717607"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/ce539e776d9122d1dd5fe991b94ed56e/b5ca1abe528d4142167de84c52d08a68/43f8a777ad7cb2685e48d0964686ee42/57acd74da5730e62b2cefb5a18fb2f3c.jpg" />

                                  <div class="people__status people__status--online"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Lidia</span>
                                      , 22
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~5 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/287717607"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="635a4d45ddaa2e66f6161637"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283126226"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/15c77209a80a5f645373faacc2109d9c/0c72ce20be9e915dca6e807e034eb874/0bcb42ee9809624560b403da7b308876.jpg" />

                                  <div class="people__status"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">
                                        Shayne
                                      </span>
                                      , 20
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~27 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283126226"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db4f3"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-2 pure-u-xl-1-3 people__box">
                            <div class="people__item">
                              <div class="people__photo">
                                <a
                                  href="/id283141828"
                                  class="people__photo--link"
                                >
                                  <img src="//media.storyloves.net/photos/095c0b9ec373318287f6edd0168f01ab/e7274523e1ec03dce3c1c6a7cef400c3/65bf221c307636b53d8f8824a7f25b74/330f7877d8761f444089ee6dcca1318a.jpg" />

                                  <div class="people__status people__status--online"></div>

                                  <div class="people__info">
                                    <div class="people__name">
                                      <span class="js_people__name">Erin</span>,
                                      21
                                    </div>

                                    <div
                                      class="people__location svgEl"
                                      data-svg="location:before"
                                    >
                                      <svg class="svg__location">
                                        <use href="#svg__location"></use>
                                      </svg>

                                      <span>~14 miles to you</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="people__links">
                                <div class="people__link">
                                  <a
                                    class="people__link--item svgEl"
                                    href="/chat/283141828"
                                    data-svg="message:before"
                                  >
                                    <svg class="svg__message">
                                      <use href="#svg__message"></use>
                                    </svg>
                                    <span>Messages</span>
                                  </a>
                                </div>
                                <div class="people__link">
                                  <div
                                    class="people__link--item people__link--like js_favorites svgEl"
                                    data-svg="like:before#like-on:before"
                                    data-user="58e37a03cf1e8c4cc16db525"
                                  >
                                    <svg class="svg__like-on">
                                      <use href="#svg__like-on"></use>
                                    </svg>
                                    <svg class="svg__like">
                                      <use href="#svg__like"></use>
                                    </svg>
                                    <span>Favorites</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="pagination">
                          <span class="pagination__item pagination__item--prev pagination__item--delimiter"></span>

                          <a
                            href="/nearby?page=1"
                            class="pagination__item pagination__item--active"
                          >
                            1
                          </a>

                          <a href="/nearby?page=2" class="pagination__item">
                            2
                          </a>

                          <a href="/nearby?page=3" class="pagination__item">
                            3
                          </a>

                          <span class="pagination__item pagination__item--delimiter">
                            ...
                          </span>

                          <a href="/nearby?page=45" class="pagination__item">
                            45
                          </a>

                          <a
                            href="/nearby?page=2"
                            class="pagination__item pagination__item--next"
                          ></a>
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
                        <a href="/terms">Terms of use</a>
                      </div>
                      <div class="footer__list">
                        <a href="/policy">Privacy</a>
                      </div>

                      <div class="footer__list">
                        <a href="/payments">Payment</a>
                      </div>

                      <div class="footer__list">
                        <a href="/contacts">Contact Information</a>
                      </div>
                      <div class="footer__list">
                        <a href="/about">About us</a>
                      </div>
                      <div class="footer__list">
                        <a href="/imprint">Imprint</a>
                      </div>
                      <div class="footer__list">
                        <a href="/help">Support service</a>
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
                    LITHUANIA, <br />
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
