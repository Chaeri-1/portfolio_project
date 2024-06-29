import styled from "styled-components";
import React, { useEffect, useState} from 'react';
import api from "./api";

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  // let userId = 1;

  const writePost = async () => {
    const access = localStorage.getItem("access");
    const data = {
      title: title,
      body: content,
    };
    try {
      // ${}이거 `blog/`뒤에 있었는데 왜일까...?
      const response = await api.post(`blog/`, data, {headers: {Authorization: `Bearer ${access}`}}
    );
      console.log('응답 완료', response);
      setPosts([...posts, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('에러: ', error);
    }
  }

  return (
    <>
      <h2>새글 작성하기</h2>
      <div id ='new-post'>
        <input
          id='input-title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='제목을 입력하세요.'
        />
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='내용을 입력하세요.'
          id='input-content'
        />
        <button onClick={writePost}>작성</button>
      </div>
    </>
  )
}