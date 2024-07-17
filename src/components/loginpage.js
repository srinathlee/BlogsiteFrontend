import React from 'react'
import google from "../assets/search.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"


const LoginPage = () => {
  return (
    <div className=''>
        <div>
            <img src=""/>
            <div>
                <h1>Welcome Back</h1>
                <p>Please enter your details to sign in.</p>
                <div>
                    <div><img src={google}/></div>
                    <div><img src={twitter}/></div>
                    <div><img src={facebook}/></div>
                </div>
                <div>
                    <hr/>
                    <p>OR</p>
                    <hr/>
                </div>

                <div>
                    <label>E-Mail Address</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div>
                    <div>
                        <input type="checkbox"/>
                        <lable>Remember me</lable>
                    </div>
                    <p>Forgot password ?</p>
                </div>
                <button>Sign in</button>
                <p>Dont have an account yet? Sign Up</p>
            </div>
        </div>
      
    </div>
  )
}

export default LoginPage
