import styled from "styled-components"

const PostList = styled.div `
  display: inline-block;
  align-items: center;
  width: 80%;
  height: 10%;
  border: 1px solid;
  margin: 20px
`

export default function Post() {
  return (
    <>
      <div id="list">
        <h1>My Posts</h1>
        <PostList>
          <h3>제목을 입력하세요</h3>
          <p>늦게 내서 죄송합니다....</p>
          <button>전체보기</button>
        </PostList>
        <PostList>
          <h3>제목을 입력하세요2</h3>
          <p>......</p>
          <button>전체보기</button>
        </PostList>
      </div>
      
    </>
  )
}