import { useRouteError } from "react-router-dom";
import styled from "styled-components"

const Error = styled.div`
  width: 100%;
  margin: 100px auto;
  text-align: center;
  display: block;

  h1 {
    padding: 30px;
  }
  
  p {
    padding: 7px;
    i {
      color: gray;
    }
  }
`

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Error>
      <h1>Sorry!</h1>
      <p>This page is not ready yet. Wait for the update~</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Error>
  )
}