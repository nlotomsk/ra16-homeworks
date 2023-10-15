import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header"
import '../NewPost/NewPost.css'

const NewPost = () => {
  let navigate = useNavigate()
  const [post, setPost] = useState({
    content: "",
  });

  const AddPost = () => {
    fetch("http://localhost:17070/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(data => {
      console.log(data);
      setPost({ content: "" });
      navigate("/");
    });
  };

  return (
    <>
      <Header />
      <div className="container_post">
        <main>

          <div className="article">
            <article className="article-post">
              <header className="article-post__header">
                <a href="#" className="article-post__author">User</a>
                <h2 className="article-post__title">
                  <a className="article-post__link" href="#">Текст статьи</a>
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
                <a className="btn"
                  onClick={() => {
                    AddPost();
                  }}>
                  Опубликовать
                </a>
                <NavLink className="btn" to="/">
                  Отмена
                </NavLink>
              </footer>
            </article>
          </div>

        </main>
      </div>
    </>
  );
};

export default NewPost;