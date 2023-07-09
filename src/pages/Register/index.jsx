import React, { Component } from "react";
import Input from "../../components/Input";

import Style from "./style.module.css";

export default class Register extends Component {
  render() {
    return (
      <div className={Style.register_container}>
        <div className={Style.left_side}>
          <div className={Style.logo_container}>
            <img
              src="/assets/logo_white.svg"
              alt="Logo"
              className={Style.logo}
            />
            <p>Gamers</p>
          </div>
          <div className={Style.quote}>
            <svg
              fill="#00DAF7"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"></path>
              </g>
            </svg>
            <p className={Style.quote_p}>
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </p>
          </div>
          <p className={Style.quote_author}>Hideo Kojima</p>
        </div>
        <div className={Style.form_container}>
          <div className={Style.register_header}>
            <h2>Register Individual Account!</h2>
            <p>
              For the purpose of gamers regulation, your details are required.
            </p>
          </div>

          <div className={Style.form_inputs}>
            <form action="">
              <div>
                <label htmlFor="email">Email address</label>
                <Input type="text" placeholder="Enter email address" />
              </div>
              <div>
                <label htmlFor="password">Create password</label>
                <Input type="password" placeholder="Password" />
              </div>
              <div>
                <label htmlFor="password">Repeat password</label>
                <Input type="password" placeholder="Repeat password" />
              </div>
              <Input type="submit" />

              <p className={Style.or}>Or</p>

              <Input type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
