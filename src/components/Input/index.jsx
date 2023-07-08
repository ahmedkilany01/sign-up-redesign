import React, { Component } from "react";

import Style from "./style.module.css";

export default class Input extends Component {
  render() {
    const { type, placeholder, value } = this.props;
    return (
      <input
        className={Style.input}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    );
  }
}

// return type === "submit" ? (
//   <input
//     className={Style.input}
//     type={type}
//     placeholder={placeholder}
//     value={value}
//   />
// ) : (
//   <input
//     className={Style.submit}
//     type={type}
//     placeholder={placeholder}
//     value={value}
//   />
// );
