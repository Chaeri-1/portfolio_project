import styled from "styled-components"
import React, {useState} from "react"
import api from "./api"

const InfoInput = styled.div`
  justify-content: center;
  align-items: center;
  p{
    font-size: 15px;
  }
`

export default function Register() {
  const [username, setUsername] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [nickname, setNickname] = useState("")
  const [university, setUniversity] = useState("")
  const [location, setLocation] = useState("")
  
  const register = async () => {
    const data = {
      username: username,
      password1: password1,
      password2: password2,
      nickname: nickname,
      university: university,
      location: location,
    }
    try {
      const response = await api.post("dj/registration/", data)
      console.log('회원가입 성공', response.data)
      setUsername("")
      setPassword1("")
      setPassword2("")
      setNickname("")
      setUniversity("")
      setLocation("")
      setCookie("access", response.data.access);
    } catch (error) {
      return error;
    }
  }
  
  return(
    <div id="register-space">
      <h2>Create Account</h2>
      <div id="register-window">
        <InfoInput>
          <p>UserName</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InfoInput>
        <InfoInput>
          <p>Password</p>
          <input
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </InfoInput>
        <InfoInput>
          <p>Password Confrim</p>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </InfoInput>
        <InfoInput>
          <p>NickName</p>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </InfoInput>
        <InfoInput>
          <p>University</p>
          <input
            type="text"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </InfoInput>
        <InfoInput>
          <p>University Location</p>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </InfoInput>
        <button onClick={register}>Register</button>
      </div>
    </div>
  )
}