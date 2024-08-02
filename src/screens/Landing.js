import "../css/landingpage.css"
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";
import StaffProfile from "../components/staffprofile";
import harvey from "../assets/harvey specter.jpg"
import litt from "../assets/litt.jpg"
import pearson from "../assets/jessica pearson.jpg"
import ross from "../assets/mikeross.jpg"

const LandingPage = () => {
    return (<div className="landingpage">
        <div style={{ textAlign: "center" }} className="welcomeheader">FEDERAL REPUBLIC OF NIGERIA</div>
        <NavBar />
        <div className="background">
            <div className="backgroundcontent">
                <div className="writeup">Welcome to the E-filing platform, Kindly click the button below to file your case </div>
                <Link to={"/payment"}><button className="actionbtn">File a Case </button></Link>
            </div>

        </div>
        <div className="landingpagebody">
            <h4 style={{width:"100%", textAlign:"center", color:"white", fontSize:"130%"}}>Meet our Senior Lawyers</h4>
            <div className="staffprofilecontainer">
                <StaffProfile name={"Harvey Spectre"} position={"Senior Partner"} expertise={"Coperate Law"} image={harvey} />
                <StaffProfile name={"Louis Litt"} position={"Senior Partner"} expertise={"Financial Law"} image={litt}/>
                <StaffProfile name={"Jessica Pearson"} position={"Major Partner"} expertise={"Litigation"}
                image={pearson}/>
                <StaffProfile name={"Mike Ross"} position={"Associate"} expertise={"criminal Law"} image={ross}/>
            </div>
        </div>
    </div>);
}

export default LandingPage;