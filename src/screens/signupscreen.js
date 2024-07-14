import MyButton from "../components/buttonstyle";
import "../css/signupscreen.css"
const SignUp = () => {
    return ( 
    <div className="signupscreen">
        <div className="signuppage">
            <div className="signupheader">
                <h3>Sign Up</h3>
                <p>create an account</p>
            </div>
            <form action="">
                <label htmlFor="">Full Name</label>
                <input type="text" />
                <label htmlFor="">Email Address</label>
                <input type="text" />
                <label htmlFor="">Phone</label>
                <input type="text" />
                <label htmlFor="">State</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
            </form>
            <button className="submitbtn">Sign Up</button>
            or
            <button className="googlebtn">Continue with Google</button>
            <p style={{fontSize:"1vw"}}>Do you have an account? <a href="/">Login</a></p>
        </div>
    </div> );
}
 
export default SignUp;