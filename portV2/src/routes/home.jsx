import styled from "styled-components"

const BlogTittle = styled.div`
  width: 80%;
  margin: 100px auto;
  padding: 20px;
  text-align: center;
  display: block;
  border: 1px solid #b0e2ff;

  h1 {
    font-size: 3rem;
    color: #08354f;
  }

  p {
    font-size: 15px;
    color: #41525b;
  }
`

export default function Home() {
  return(
    <>
      <BlogTittle>
        <h1>Chaeri's Portfolio</h1>
        <p>last update: <span>24-06-03</span></p>
      </BlogTittle>
    </>
  )
}