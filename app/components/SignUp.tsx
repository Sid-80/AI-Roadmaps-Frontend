import { useState } from "react";
import Image from "next/image";
export default function SignUp() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const togglePanel = () => {
    setIsSignUpActive(prevState => !prevState);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={`relative w-[850px] h-[500px] bg-white shadow-[25px_30px_55px_#5557] rounded-[13px] overflow-hidden container ${isSignUpActive ? 'right-panel-active':''} `} id="container">
        <div className="absolute w-[60%] h-full px-[40px] transition-all duration-[600ms] ease-in-out opacity-0 z-1 form-container sign-up-container ">
          <form className="h-full flex flex-col items-center justify-center px-[50px]" action="#">
            <h1>Create Account</h1>
            <div className="social-container flex gap-1">
            <a href="#" className="social"><Image
            src="/fb.svg"
            alt=""
            width={30}
            height={16}
          /></a>
              <a href="#" className="social"><Image
            src="/google.svg"
            alt=""
            width={30}
            height={16}
          /></a>
              <a href="#" className="social"><Image
            src="/linkedin.svg"
            alt=""
            width={30}
            height={16}
          /></a>
            </div>
            <span>or use your email for registration</span>
            <div className="infield">
              <input type="text" placeholder="Name" />
              <label></label>
            </div>
            <div className="infield">
              <input type="email" placeholder="Email" name="email" />
              <label></label>
            </div>
            <div className="infield">
              <input type="password" placeholder="Password" />
              <label></label>
            </div>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="absolute w-[60%] h-full px-[40px] transition-all duration-[600ms] ease-in-out z-2 form-container sign-in-container ">
          <form className="h-full flex flex-col items-center justify-center px-[50px]" action="#">
            <h1>Sign in</h1>
            <div className="social-container flex gap-2">
              <a href="#" className="social"><Image
            src="/fb.svg"
            alt=""
            width={30}
            height={16}
          /></a>
              <a href="#" className="social"><Image
            src="/google.svg"
            alt=""
            width={30}
            height={16}
          /></a>
              <a href="#" className="social"><Image
            src="/linkedin.svg"
            alt=""
            width={30}
            height={16}
          /></a>
            </div>
            <span>or use your account</span>
            <div className="infield">
              <input type="email" placeholder="Email" name="email" />
              <label></label>
            </div>
            <div className="infield">
              <input type="password" placeholder="Password" />
              <label></label>
            </div>
            <a href="#" className="forgot">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container" id="overlayCon">
          <div className=" overlay">
            <div className="absolute flex items-center justify-center flex-col px-10 text-center h-full w-[340px] transition duration-600 ease-in-out  overlay-left">
              <h1 className="text-white" >Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="border-none bg-transparent" onClick={togglePanel} >Sign In</button>
            </div>
            <div className="absolute flex items-center justify-center flex-col px-10 text-center h-full w-[340px] transition duration-600 ease-in-out  overlay-right">
              <h1 className="text-white" >Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="border-none bg-transparent" onClick={togglePanel} >Sign Up</button>
            </div>
          </div>
          <button id="overlayBtn" onClick={togglePanel} ></button>
        </div>
      </div>
    </main>
  );
}
