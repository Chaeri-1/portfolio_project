import styled from "styled-components"

const InfoInput = styled.div`
  justify-content: center;
  align-items: center;
  p{
    font-size: 15px;
  }
`

export default function Register() {
  return(
    <div id="register-space">
      <h2>Create Account</h2>
      <div id="register-window">
        <InfoInput>
          <p>Name</p>
          <input
            type="text"
          />
        </InfoInput>
        <InfoInput>
          <p>E-Mail</p>
          <input
            type="text"
          />
        </InfoInput>
        <InfoInput>
          <p>Major</p>
          <input
            type="text"
          />
        </InfoInput>
        <InfoInput>
          <p>Id</p>
          <input
            type="text"
          />
        </InfoInput>
        <InfoInput>
          <p>Password</p>
          <input
            type="password"
          />
        </InfoInput>
        <button>Register</button>
      </div>
    </div>
  )
}