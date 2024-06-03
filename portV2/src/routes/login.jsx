import React, {useState} from "react"
import api from "./api"
import { Cookies } from "react-cookie";
import axios from "axios";

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
      localStorage.setItem("access", response.data.access)
      // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`
    } catch (error) {
      console.error('에러: ', error)
      return error;
    }
  }
  localStorage.getItem("access")
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