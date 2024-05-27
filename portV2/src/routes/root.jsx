import {Outlet} from "react-router-dom"

export default function Root() {
  return (
    <>
      <div id='header'>
        <h1><a href={`/home`}>HCR</a></h1>
        <ul>
            <li>
              <a href={`/profile`}>About Me</a>
            </li>
            <li>
              <a href={`/blog/`}>Posts</a>
            </li>
            <li>
              <a href={`/blog/`}>Write</a>
            </li>
        </ul>
      </div>
      <div id="detail">
        <Outlet/>
      </div>
    </>
  )
}