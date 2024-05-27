import styled from "styled-components"


const Title = styled.div`
  display: flex
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: 400;
`

export default function Home() {
  return(
    <>
      <div>
        <Title>Chaeri's Portfolio</Title>
        <p>last update<span id='date'>24-05-27</span></p>
      </div>
    </>
  )
}