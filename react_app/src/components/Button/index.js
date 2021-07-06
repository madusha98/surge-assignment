import React from "react";
import './styles.css'

const Button = ({ title, onClick }) => {
  return <button className={'pure-material-button-contained'} onClick={onClick}>{title}</button>;
};

export default Button
