import { useEffect } from "react";
import "../css/caseform.css"
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Swiper from "swiper/bundle";
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from "swiper/modules";
const Caseform = () => {

    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: 'horizontal',
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: "progressbar"
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
    console.log(Swiper)
    useEffect(() => {
        swiper.init()
    }, [])


    return (
        <div className="formcontainer">

            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div className="pagestyl">
                            <h4>CIVIL CASE - FILING FORM</h4>
                            <form action="">
                                <label htmlFor="">Name</label>
                                <input type="text" />
                                <span className="specialinputs">


                                    <select className="specialinput" name="sex" id="">
                                        <option value="" disabled selected>sex</option>
                                        <option value="male">Male</option>
                                        <option value="female">Fema</option>
                                    </select>



                                    <input className="specialinput" placeholder="age" type="number" />

                                </span>

                                <label htmlFor="">Address</label>
                                <input type="text" />
                                <label htmlFor="">Email</label>
                                <input type="email" />
                                <label htmlFor="subject">Subject</label>
                                <input type="text" />
                                <label htmlFor="">Phone</label>
                                <span>
                                    <select style={{ width: "20%" }} name="countrycode" id="">
                                        <option value="+234">+234</option>
                                    </select>
                                    <input style={{ width: "80%" }} type="numbers" />
                                </span>
                                <select className="casetypeselector" name="casetype" id="">
                                    <option value="casetype" disabled selected > Case Type</option>
                                    <option value="Housing">Housing Affairs</option>
                                    <option value="Land">Land Dispute</option>
                                    <option value="Family">Family Dispute</option>
                                    <option value="Others">Others</option>
                                </select>
                            </form>
                        </div>
                    </div>


                    <div class="swiper-slide">
                        <div className="pagestyl">
                            <h3>RESPONDANT DETAILS</h3>
                            <form action="">
                                <label htmlFor="">Name</label>
                                <input type="text" />
                                <span className="specialinputs">
                                    <select className="specialinput" name="sex" id="">
                                        <option value="" disabled selected>sex</option>
                                        <option value="male">Male</option>
                                        <option value="female">Fema</option>
                                    </select>
                                    <input className="specialinput" placeholder="age" type="number" />
                                </span>
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                                <label htmlFor="address">Address</label>
                                <input type="text" />
                                <label htmlFor="phone">Phone</label>
                                <span>
                                    <select style={{ width: "20%" }} name="countrycode" id="">
                                        <option value="234" selected>+234</option>
                                    </select>
                                    <input style={{ width: "80%" }} type="numbers" />
                                </span>
                                <span style={{ marginTop: "6%" }}>
                                    <input style={{ width: "30%", fontSize: "80%" }} placeholder="Advocate code" type="text" />
                                    <input style={{ width: "70%", fontSize: "80%" }} placeholder="Advocate" type="text" />
                                </span>
                            </form>
                            <button className="submitform">Submit</button>
                        </div>
                    </div>
                    {/* <div style={{backgroundColor:"white"}} class="swiper-slide">Slide 3</div> */}
                    ...
                </div>
                {/* <div class="swiper-pagination"></div> */}
                <div style={{ color: "white", fontSize: "2px", display: "" }} class="swiper-button-prev"></div>
                <div style={{ color: "white" }} class="swiper-button-next"></div>
                <div style={{ backgroundColor: "white" }} class="swiper-scrollbar"></div>
            </div>
        </div>
    );
}

export default Caseform;