import {Outlet} from "react-router-dom"

export default function Root() {
  return (
    <>
      <div id='header'>
        <h1><a href={`/home/`}>HCR</a></h1>
        <ul>
            <li>
              <a href={`/login/`}>login</a>
            </li>
            <li>
              <a href={`/profile`}>About Me</a>
            </li>
            <li>
              <a href={`/blog/post/`}>Posts</a>
            </li>
            <li>
              <a href={`/blog/write/`}>Write</a>
            </li>
        </ul>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}