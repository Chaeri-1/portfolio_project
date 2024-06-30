import styled from "styled-components";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "./api";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
    margin-bottom: 16px;
    }
  }
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

function PostView() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [posts, setPosts] = useState([]);

  const viewPosts = async () => {
    try {
      const response = await api.get('blog/');
      console.log('글 불러오기 완료', response);
      const foundPost = response.data.find(post => post.id == postId);
      setPost(foundPost);
      // setPosts(posts.filter(post => post.id == postId));
    } catch (error) {
      console.error('에러: ', error);
    }
  }

  const deletePost = async () => {
    const access = localStorage.getItem("access");
    if (window.confirm('Are you sure?')) {
      try {
        const response = await api.delete(`blog/${postId}/`, {
          headers: {Authorization: `Bearer ${access}`}
        })
        console.log('삭제 완료', response);
        navigate(-1);
        setPosts(posts.filter(post => post.id !== postId));
      } catch (error) {
        console.error('에러: ', error);
      }
    }
  }

  const toUpdate = () => {
    navigate('edit/')
  }

  useEffect(() => {
    viewPosts();
  }, [postId]); //postId가 변경될때마다 다시 불러오게 설정

  return (
      <Wrapper>
          <Container>
              <button onClick={() => {
                navigate(-1);
                }}
                >뒤로가기</button>
              <PostContainer>
                  <TitleText>{post.title}</TitleText>
                  <ContentText>{post.body}</ContentText>
                  <button onClick={toUpdate}>수정</button>
                  <button onClick={deletePost}>삭제</button>
              </PostContainer>
          </Container>
      </Wrapper>
  );
}

export default PostView;