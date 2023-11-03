"use client";

import "react";
import SocialIcons from "@/components/social-icons";
import "../styles/Login.css";

export default function Login() {
  const handleSignIn = () => {
    const container = document.querySelector("#container") as HTMLElement;
    container.classList.add("right-panel-active");
  };

  const handleSignUp = () => {
    const container = document.querySelector("#container") as HTMLElement;
    container.classList.remove("right-panel-active");
  };

  return (
    <div className="container text-black" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <SocialIcons />
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign In</h1>
          <SocialIcons />
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot yout password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              onClick={() => handleSignUp()}
              id="signIn"
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal info and start journey with us</p>
            <button
              className="ghost"
              onClick={() => handleSignIn()}
              id="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
