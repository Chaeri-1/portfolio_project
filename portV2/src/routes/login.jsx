import React, {useState} from "react"
import api from "./api"
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value) => {
  return cookies.set(name, value);
};
export const getCookie = (name) => {
  return cookies.get(name);
};

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const login = async () => {
    try {
      const response = await api.post("dj/login/", {
        username: username,
        password: password,
      })
      console.log('로그인 성공', response.data)
      setUsername("")
      setPassword("")
      setCookie("token", response.data.token);
    } catch (error) {
      return error;
    }
  }
  console.log(localStorage.getItem("token"))
  return(
    <div id='login-space'>
      <h1>Sign in</h1>
      <div id="login-window">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ID"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={login}>Login</button>
      </div>
      <div id='login-help'>
        <a href= {`/find/`}>Forgot ID/PW</a>
        <a href={`/reiginstration/`}>Create Account</a>
      </div>
    </div>
  )
}