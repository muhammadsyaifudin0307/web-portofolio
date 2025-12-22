import React from "react";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div>
      This Form
      <p>{username}</p>
      <p>{password}</p>
      <div className="bg-zinc-400 flex flex-col">
        <label htmlFor="full-name">fullname</label>
        <input
          type="text"
          id="full-name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
};

export default Form;
