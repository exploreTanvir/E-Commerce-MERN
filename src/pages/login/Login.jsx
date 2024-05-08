import "./login.css"

const Login = () => {
  return (
    <div className="login">
    <div className="lWrapper p-5 w-25 bg-white">
        <h1 className="title">SIGN IN.</h1>
        <form action="">
            <input type="text" placeholder="UserName"/>
            <input type="text" placeholder="Password"/>
            
        <button className="border-0 text-white mb-3 rounded-2 pointer-event">LOGIN</button>
        <a href="/">DO YOU NOT REMEMBER THE PARSSWORD?</a>
        <a href="/">CREATE A NEW ACCOUNT.</a>
        </form>
    </div>
</div>
  )
}

export default Login