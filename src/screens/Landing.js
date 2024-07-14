import "../css/landingpage.css"
import NavBar from "../components/navbar";

const LandingPage = () => {
    return (<div className="landingpage">
        <div style={{textAlign:"center"}} className="welcomeheader">WELCOME TO OUR WEBSITE</div>
        <NavBar />
        <div className="background">
            <div className="backgroundcontent">
                <div className="writeup">Welcome to the E-filing platform, Kindly click the button below to file your case and follow due procedure and we will get back to you shortly</div>
                <button className="actionbtn">File a Case </button>
            </div>

        </div>
    </div>);
}

export default LandingPage;