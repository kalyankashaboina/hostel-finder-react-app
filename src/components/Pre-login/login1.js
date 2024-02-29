import React from 'react'
import "./loginOne.css"
import { Link, useNavigate } from 'react-router-dom'

function LogInOne() {



  const Homes=useNavigate()

  const clickers=(e)=>{
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    console.log(storedUsers)
  }

       
  const handlClick=(e)=>{
   e.preventDefault()
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    // alert(JSON.stringify(storedUsers))
    console.log("inlogin",storedUsers)
    if(Object.keys(storedUsers).length>0){
    const userName=storedUsers.email
    // alert(userName)
    const Password=storedUsers.password

    const LUserName=document.getElementById("username").value
    alert(LUserName)
    const LPassword=document.getElementById("password").value
    console.log(LUserName+" login name")
    console.log(userName+" register name")
    console.log(LPassword+" login password")
    console.log(Password+" register pasword")
    console.log(userName==LUserName," logins")
    console.log(LPassword===Password," paswords")

    if(LUserName===userName && LPassword===Password){
      alert("your entered correct name")
      Homes("/home")
      
    }
    else{
      alert("wrong data")
      console.log("wrong")
    }
  }

  }




  return (
    <>
    
    
    
    <div className="container">
  <div className="drop">
    <div className="content">
      <h2>Sign in</h2>
      <form>
        <div className="inputBox">
          <input type="text" placeholder="Username"  id='username'/>
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Password"  id="password" />
        </div>
        <div className="inputBox">
          {/* <input type="submit" defaultValue="Login"  /> */}
          <button onClick={handlClick}>
            Login 
          </button>
        </div>
      </form>
    </div>
  </div>
  <Link to={"/forgetpassword"} href="#" className="btns">
    Forget Password drop
  </Link>
  <Link to={"/"} href="#" className="btns signup">
    Signup
  </Link>
  <button onClick={clickers}>cliocke</button>
  
</div>

    
    
    
    
    </>
  )
}

export default LogInOne