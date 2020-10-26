import React from "react";
import "./UserLogin.css";

const UserLogin = React.memo(({ onSubmit }) => {
  const [input, setInput] = React.useState("");

  const inputChange = React.useCallback(e => {
    if(e.target.value.charAt(0) !== " ") {
      setInput(e.target.value)
    }
  }, [setInput]);
  const onClick = React.useCallback(e => {
    if(input && input.trim()) {
      onSubmit(input);
    }
  }, [input, onSubmit]);
  return (
    <div className="u-form">
      <input  className="u-input" type="text" placeholder="Please Enter your Name" onChange={inputChange} value={input}/>
      <button className="u-btn" onClick={onClick}>Submit</button>
    </div>
  );
});

export default UserLogin;