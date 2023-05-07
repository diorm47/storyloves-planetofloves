import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./modal.css";

import axios from "axios";
import Autocomplete from "../../autocomplete/autocomplete";
import NeedntCityId from "../../need-city-id/need-city-id";

import { ReactComponent as MaleSvg } from "../../assets/male.svg";
import exit_icon from "../../assets/menu_close.png";
import { ReactComponent as FamaleSvg } from "../../assets/famale.svg";

function Modal({ setModal1 }) {
  const [activeMale, setActiveMale] = useState(false);
  const [activeFaMale, setActiveFamale] = useState(false);
  const [sheekingActiveMale, setSheekingActiveMale] = useState(false);
  const [sheekingActiveFaMale, setSheekingActiveFamale] = useState(false);
  const [myGender, setMyGender] = useState();
  const [seekingGender, setSeekingGender] = useState();
  const [myGenderError, setMyGenderError] = useState(false);
  const [seekingGenderError, setSeekingGenderError] = useState(false);
  const [cityId, setCityId] = useState("");
  const [city, setCity] = useState();
  const [needCityId, setKnow] = useState(true);
  const [locationError, setLocationError] = useState(false);
  const [emailError, setEmailError] = useState(0);
  const [ccode, setCcode] = useState("");
  const [userAge, setUserAge] = useState(18);
  const toggleMyGender = (gender) => {
    if (gender === "male") {
      setActiveMale(true);
      setActiveFamale(false);
      setMyGender("male");
    } else {
      setActiveMale(false);
      setActiveFamale(true);
      setMyGender("famale");
    }
  };
  const toggleSeekingGender = (gender) => {
    if (gender === "male") {
      setSheekingActiveMale(true);
      setSheekingActiveFamale(false);
      setSeekingGender("male");
    } else {
      setSheekingActiveMale(false);
      setSheekingActiveFamale(true);
      setSeekingGender("famale");
    }
  };
  const handleChange = (e) => {
    setUserAge(e.target.value);
  };

  const ref = useRef("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // GetCityId

  const getcityId = async () => {
    let city = ref.current.state.userInput.split(",")[2].trim();
    let headersList = {
      Accept: "*/*",
    };

    let reqOptions = {
      url: `https://api.storyloves.net/suggest/city?ccode=${ccode}&query=${city}`,
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    setCityId(response.data.suggestions[0]._id);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const needCity = async () => {
  //   let headersList = {
  //     Accept: "*/*",
  //   };
  //   let reqOptions = {
  //     url: `https://api.storyloves.net/need_city_id?country=${ccode}`,
  //     method: "GET",
  //     headers: headersList,
  //   };

  //   let response = await axios.request(reqOptions);
  //   setKnow(response.data);
  // };

  let params = new URL(document.location).searchParams;

  useEffect(() => {
    setCcode(params.get("ccode"));

    // getCountry();
    // needCity();
  }, [ params]);

  const checkEmail = async (e) => {
    let headersList = {
      Accept: "*/*",
    };

    let reqOptions = {
      url: `https://api.storyloves.net/registration/check/login/${e.target.value}`,
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    if (response.data.error) {
      setEmailError(1);
    } else {
      setEmailError(2);
    }
  };

  useEffect(() => {
    if (myGender !== undefined) {
      setMyGenderError(false);
    }
    if (seekingGender !== undefined) {
      setSeekingGenderError(false);
    }
  }, [myGender, seekingGender]);

  // submit
  const onSubmit = async (data) => {
    let params = new URL(document.location).searchParams;

    let formdata = new FormData();
    formdata.append("ccode", `${ccode}`);
    formdata.append("age", `${userAge}`);
    if (needCityId) {
      formdata.append("city_id", `${cityId}`);
      formdata.append("city", `${ref.current.state.userInput}`);
    } else {
      formdata.append("city", `${city}`);
    }

    formdata.append("email", `${data.email}`);
    formdata.append("name", `${data.name}`);
    formdata.append("password", `${data.password}`);
    if (params.get("source")) {
      formdata.append("source", `${params.get("source")}`);
      formdata.append("l", `${params.get("I")}`);
      formdata.append("platform", `${params.get("platform")}`);
      formdata.append("extwb", `${params.get("extwb")}`);
      formdata.append("adult", `${params.get("adult")}`);
      formdata.append("ukey", `${params.get("ukey")}`);
      formdata.append("subacc", `${params.get("subacc")}`);
      formdata.append("subid", `${params.get("subid")}`);
      formdata.append("app", `${params.get("app")}`);
      formdata.append("gaid", `${params.get("gaid")}`);
    }

    let bodyContent = formdata;
    let headersList = {
      Accept: "*/*",
      "X-Requested-With": "XMLHttpRequest",
    };

    if (!myGender && !seekingGender) {
      setMyGenderError(true);
      setSeekingGenderError(true);
    } else {
      let reqOptions = {
        url: "https://api.storyloves.net/land-reg",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      await axios.request(reqOptions).then((res) => {
        window.location.assign(
          `https://storyloves.net//land-login?activkey=${res.data.key}&email=${res.data.login}`
        );
      });
    }
  };

  return (
    <div className="modal_wrapper">
      <div className="modal_block">
        <div className="modal_title">
          <h1>Sign up to start meeting people!</h1>
        </div>
        <div className="exit_btn" onClick={() => setModal1(false)}>
          <img src={exit_icon} alt="exit" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name_input">
            <div className="genders_toggles">
              <div className="my_gender_iden">
                <div className="my_genderis">
                  <p>I am a:</p>
                  <div className="my_gender">
                    <MaleSvg
                      className={activeMale ? "male_active_svg" : ""}
                      onClick={() => toggleMyGender("male")}
                    />
                    <FamaleSvg
                      className={activeFaMale ? "famale_active_svg" : ""}
                      onClick={() => toggleMyGender("famale")}
                    />
                  </div>
                </div>
                <div className="error_gender">
                  {myGenderError ? <p>Select your gender</p> : ""}
                </div>
              </div>
              <div className="seeking_gender_iden">
                <div className="sheeking_genderis">
                  <p>Seeking a:</p>
                  <div className="my_gender">
                    <MaleSvg
                      className={sheekingActiveMale ? "male_active_svg" : ""}
                      onClick={() => toggleSeekingGender("male")}
                    />
                    <FamaleSvg
                      className={
                        sheekingActiveFaMale ? "famale_active_svg" : ""
                      }
                      onClick={() => toggleSeekingGender("famale")}
                    />
                  </div>
                </div>
                <div className="error_gender">
                  {seekingGenderError ? <p>Select seeking gender</p> : ""}
                </div>
              </div>
            </div>
            <div className="between_ages">
              <p>Your age:</p>
              <select name="age" onChange={handleChange}>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
                <option value="60">60</option>
                <option value="61">61</option>
                <option value="62">62</option>
                <option value="63">63</option>
                <option value="64">64</option>
                <option value="65">65</option>
                <option value="66">66</option>
                <option value="67">67</option>
                <option value="68">68</option>
                <option value="69">69</option>
                <option value="70">70</option>
                <option value="71">71</option>
                <option value="72">72</option>
                <option value="73">73</option>
                <option value="74">74</option>
                <option value="75">75</option>
                <option value="76">76</option>
                <option value="77">77</option>
                <option value="78">78</option>
              </select>

              {/* <p>
                <span>seeking:</span>
              </p>
              <select name="age">
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
                <option value="60">60</option>
                <option value="61">61</option>
                <option value="62">62</option>
                <option value="63">63</option>
                <option value="64">64</option>
                <option value="65">65</option>
                <option value="66">66</option>
                <option value="67">67</option>
                <option value="68">68</option>
                <option value="69">69</option>
                <option value="70">70</option>
                <option value="71">71</option>
                <option value="72">72</option>
                <option value="73">73</option>
                <option value="74">74</option>
                <option value="75">75</option>
                <option value="76">76</option>
                <option value="77">77</option>
                <option value="78">78</option>
              </select> */}
            </div>
            <input
              type="text"
              placeholder="Username"
              // pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"
              {...register("name", { required: true })}
            />
            {errors.name && <span>* Username is required</span>}
          </div>

          <div className="location_input">
            {needCityId ? (
              <>
                <Autocomplete
                  getcityId={getcityId}
                  ref={ref}
                  setCcode={setCcode}
                  setKnow={setKnow}
                />

                {locationError ? <span>* Se requiere ubicación</span> : ""}
              </>
            ) : (
              <>
                <NeedntCityId setCity={setCity} setCcode={setCcode} />

                {locationError ? <span>* Se requiere ubicación</span> : ""}
              </>
            )}
          </div>

          <div className="email_sign">
            <input
              type="email"
              placeholder="Your Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              {...register("email", { required: true })}
              onChange={(e) => checkEmail(e)}
            />
            {errors.email && <span>* Email is required</span>}
            {emailError === 1 ? (
              <span> Email is already exist or invalid</span>
            ) : (
              ""
            )}
          </div>
          <div className="password_sign">
            <input
              placeholder="Password"
              type="password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span>* Password is required minimum 6 symbols</span>
            )}
          </div>

          <div className="signin_button">
            {emailError === 1 ? (
              <input
                type="submit"
                disabled
                placeholder="Chat Now"
                value="Chat Now"
              />
            ) : (
              <input
                type="submit"
                placeholder="Chat Now"
                value="Chat Now"
                onClick={getcityId}
              />
            )}
          </div>
        </form>

        {/* <div className="agreement_policy">
          <p>
            By clicking "Chat Now" you agree with the
            <span> Terms & Conditions</span> and <span>Privacy Policy </span>
            and <span>Refund and Cancellation Policy</span>.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;
