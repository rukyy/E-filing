import "../css/signinscreen.css"

const SignIn = () => {
    return (
        <div className="signinscreen">
            <div className="signinpage">
                <div className="signinheader">
                    <div className="profilephoto"><i class="fa-solid fa-user"></i></div>
                    <h3>Sign In</h3>
                    <p>create an account</p>
                </div>
                <form action="">
                <label htmlFor="">Email Address</label>
                <input type="email" />
                <label htmlFor="">Password</label>
                <input type="text" />
            </form>
            <button className="submitbtn">Continue with email</button>
            or
            <button className="googlebtn"><i class="fa-brands fa-google"></i> Continue with Google</button>
            <p style={{fontSize:"70%"}}>You don't have an account?<a href="/signup">Sign up</a></p>
            </div>
        </div>);
}

export default SignIn;