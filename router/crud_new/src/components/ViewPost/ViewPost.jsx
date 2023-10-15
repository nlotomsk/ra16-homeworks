import React from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../Header/Header"
import '../ViewPost/ViewPost.css'

const ViewPost = () => {
  const [post, setPosts] = useState([])
  const { id } = useParams()
  let navigate = useNavigate()

    useEffect(() => {
    fetch(`http://localhost:17070/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPosts(data.post)
      });
  },[])


  console.log({post})
  return (
    
    <>
      <Header />

      <div className="article">
        <article className="article-post">
          <header className="article-post__header">
                        <a href="#top" className="article-post__author">User</a>
            <h2 className="article-post__title">
              <a className="article-post__link" href="#top">Текст статьи</a>
            </h2>
          </header>
          <div className='article-post__content'>
            <p className='article-post__text'>
              {post.content}
            </p>
            {/* <a className="btn" href="#">Comment</a> */}
          </div>
          <footer className='article-post__footer'>
            <NavLink className="btn" to={`/posts/${id}/edit`}>
              Редактировать
            </NavLink>
            {/* <a className="btn"
              onClick={() => {
                // AddPost();
              }}>
              Опубликовать
            </a> */}

            <NavLink
              className="btn"
              onClick={() => {
                fetch(`http://localhost:17070/posts/${id}`, {
                  method: "DELETE",
                }).then(data => {
                  console.log(data)
                  navigate("/");
                })
              }}
            >
              Удалить
            </NavLink>
            <NavLink className="btn" to="/">
              Отмена
            </NavLink>
          </footer>
        </article>
      </div>

      {/* <div>

        <div className="post__text">rerw {post.content}</div>
        <div className="post__actions">


        </div>
      </div> */}
    </>
  )


}

export default ViewPost