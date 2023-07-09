import React, { Component } from "react";
import Input from "../../components/Input";

import Style from "./style.module.css";

export default class Login extends Component {
  render() {
    return (
      <div className={Style.login_container}>
        <div className={Style.left_side}>
          <div className={Style.logo_container}>
            <img src="/assets/logo.svg" alt="Logo" className={Style.logo} />
            <p>Gamers</p>
          </div>
          <div className={Style.quote}>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#BABABA"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>{" "}
                </g>
              </g>
            </svg>
            <p className={Style.quote_p}>
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </p>
          </div>
          <div className={Style.author_joystick}>
            <p className={Style.quote_author}>Hideo Kojima</p>
            <img
              src="/assets/joystick.svg"
              alt="joystick"
              className={Style.joystick}
            />
          </div>
        </div>
        <div className={Style.form_container}>
          <div className={Style.social_networks}>
            <h2>Join the game!</h2>
            <p>Go inside the best gamers social network!</p>
            <div className={Style.social_networks_icons}>
              <div>
                <img src="/assets/google.svg" alt="Google" />
              </div>
              <div>
                <img src="/assets/twitter.svg" alt="Twitter" />
              </div>
              <div>
                <img src="/assets/linkedin.svg" alt="Linkedin" />
              </div>
              <div>
                <img src="/assets/github.svg" alt="Github" />
              </div>
            </div>
          </div>

          <p className={Style.or}>Or</p>

          <div className={Style.form_inputs}>
            <form action="">
              <div>
                <label htmlFor="email">Your email</label>
                <Input type="text" placeholder="Write your email" />
              </div>
              <div>
                <label htmlFor="password">Enter your password</label>
                <Input type="password" placeholder="•••••••••" />
              </div>
              <Input type="submit" />
              <p className={Style.register}>
                Don’t have an account? <a href="*">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
