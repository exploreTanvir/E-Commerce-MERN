import "./register.css"

const Register = () => {
  return (
    <div className="register">
        <div className="rWrapper p-5 w-50 bg-white">
            <h1 className="title">CREATE AN ACCOUNT.</h1>
            <form action="">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="UserName"/>
                <input type="text" placeholder="Password"/>
                <input type="text" placeholder="Conform Password"/>
                <label className="agreement"> By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>.</label>
            <button className="border-0 text-white py-3 px-5 rounded-2 pointer-event">CREATE ACCOUNT</button>
            </form>
        </div>
    </div>
  )
}

export default Register