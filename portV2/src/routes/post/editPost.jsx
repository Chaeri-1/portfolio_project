import React, {useEffect, useState, useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const EditPost = async() => {
  const navigate = useNavigate();
  const {postId} = useParams();
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState();
  const [content, setContent] = useState()

  // const getPosts = async () => {
  //   const resp = await (await api.get(`/blog/${postId}/`)).data
  //   setPost(resp.data);
  // }

  const updatePost = async () => {
    const data = {
      title: title,
      body: content
    }
    try {
      const response = await api.get('blog/');
      console.log('글 불러오기 완료', response);
      setPosts(response.data);
      const res = await api.put(`/blog/${postId}/`, data, {
        headers: {Authorization: `Bearer ${access}`}
      })
      console.log('수정 완료', res);
      setPosts(posts.map(post => post.id === postId ? res.data : post))
      navigate(-1)
    } catch (error) {
      console.error('에러: ', error);
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" value={title}
        onChange={(e) => setTitle(e.target.value)} />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={updatePost}>수정</button>
        {/* <button onClick={backToDetail}>취소</button> */}
      </div>
    </div>
  );
}

export default EditPost;
// function EditPost({}) {
//   const[title, setTitle] = useState('');
//   const[content, setContent] = useState('');
//   const [post, setPost] = useState([]);
//   const {editId} = useParams();
  
//   const handleEdit = async () => {
//     const access = localStorage.getItem("access");
//       try {
//       const response = await api.put(`/blog/${editId}`, {
//         id: editId,
//         user: 34,
//         title: title,
//         body: content,
//       }, {
//         headers: {Authorization: `Bearer ${access}`}
//       })
//       console.log('수정 완료', response);
//       setPosts(post.map(post => post.id === editId ? response.data : post))
//       setTitle('');
//       setContent('');
//     } catch(error){
//       console.error('에러:', error);
//     }
//   };
  
//   return (
//     <div>
//       <input
//         type='text'
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <button onClick={handleEdit}>Save</button>
//       <button onClick={() => onSave(null)}>Cancel</button>
//     </div>
//   );
// }

// export default EditPost;