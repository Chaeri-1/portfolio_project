import styled from "styled-components";
import React, { useEffect, useState} from 'react';
import api from "./api";

const PostList = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #001a41;
  margin: 20px;

  p {
    font-size: 15px;
    padding: 5px;
  }
`
const PostButton = styled.div `
  display: flex;

  button {
    font-size: 14px;
    color: #001a41;
    background-color: #fafdff;
    margin: 5px 10px;
    padding: 5px;
    border: solid #001a41 2px;
    transition: 273ms;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
  
  button:hover{
    transition: 273ms;
    padding: 5px;
    background-color: #001a41;
    color: #fafdff;
  }
`


export default function Post() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await api.get('blog/');
      console.log('글 불러오기 완료');
      setPosts(response.data);
    } catch (error) {
      console.error('에러: ', error);
    }
  }
  const updatePost = async () => {
    try {
      const response = await api.put(`blog/`, posts);
      console.log('수정 완료', response);
      setPosts(posts.map(post => post.id === 100 ? response.data : post));
      setTitle('')
      setContent('');
    } catch (error) {
      console.error('에러 : ', error);
    }
  }
  const deletePost = async () => {
    try {
        const response = await api.delete(`/blog/100`);
        console.log('삭제 완료', response);
        // getPosts();
        setPosts(posts.filter(post => post.id !== 100));
    } catch (error) {
      return error;
    }
}

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div id="list">
        <h1>Posts</h1>
          {posts.map((post) => (
            <PostList key={post.id}>
              <h3>제목: {post.title}</h3>
              <p>{post.body}</p>
              <PostButton>
                <button onClick={updatePost}>수정</button>
                <button onClick={deletePost}>삭제</button>
              </PostButton>
            </PostList>
          ))}
      </div>
    </>
  )
}