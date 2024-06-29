import styled from "styled-components";
import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import api from "./api";
import PostList from "./post/postList";

// const PostList = styled.div `
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border: 2px solid #001a41;
//   margin: 20px;

//   p {
//     font-size: 15px;
//     padding: 5px;
//   }
// `
// const PostButton = styled.div `
//   display: flex;

//   button {
//     font-size: 14px;
//     color: #001a41;
//     background-color: #fafdff;
//     margin: 5px 10px;
//     padding: 5px;
//     border: solid #001a41 2px;
//     transition: 273ms;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     cursor: pointer;
//   }
  
//   button:hover{
//     transition: 273ms;
//     padding: 5px;
//     background-color: #001a41;
//     color: #fafdff;
//   }
// `


export default function Post() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const response = await api.get('blog/');
      console.log('글 불러오기 완료');
      setPosts(response.data);
    } catch (error) {
      console.error('에러: ', error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div id="list">
        <h1>Posts</h1>
        <div>
          <button>my posts</button>
          <button>new post</button>
        </div>
        <PostList
          posts={posts}
          onClickItem={(item)=>{
            navigate(`id/${item.id}`);
          }}
        />
      </div>
    </>
  )
}