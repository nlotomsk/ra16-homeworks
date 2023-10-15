import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../Header/Header"
import '../EditPost/EditPost.css'

const EditPost = () => {
  let navigate = useNavigate()
  const [post, setPost] = useState({})
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:17070/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data.post)
      })
  }, [])

  const UpdatePost = () => {
    fetch(`http://localhost:17070/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(data => {
      navigate(`/`)
    })
  }
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
            <textarea className='article-post__text'
              placeholder="Введите текст поста"
              value={post.content}
              onChange={event => setPost({ ...post, content: event.target.value })}
            />
          </div>
          <footer className='article-post__footer'>
            <a href="#top" 
            className="btn"
              onClick={() => {
                UpdatePost()
              }}>
              Сохранить
            </a>
            <NavLink className="btn" to="/">
              Отмена
            </NavLink>
          </footer>
        </article>
      </div>
    </>
  )
}

export default EditPost