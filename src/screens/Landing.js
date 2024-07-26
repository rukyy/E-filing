import "../css/landingpage.css"
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (<div className="landingpage">
        <div style={{textAlign:"center"}} className="welcomeheader">FEDERAL REPUBLIC OF NIGERIA</div>
        <NavBar />
        <div className="background">
            <div className="backgroundcontent">
                <div className="writeup">Welcome to the E-filing platform, Kindly click the button below to file your case </div>
                <Link to={"/payment"}><button className="actionbtn">File a Case </button></Link>
            </div>

        </div>
    </div>);
}

export default LandingPage;