import React from 'react';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header"
import '../HomePage/HomePage.css'
import imgSrc from './img/logo192.png'

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:17070/posts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="container_post">
        <main>

          <div className="article">
            <article className="article-post">
              <div className='article-post__content'>
                <NavLink className="btn" to="/posts/new">
                  Создать пост
                </NavLink>
              </div>
            </article>
          </div>

          {/* /*<div className="article">
            <article className="article-post">
              <header className="article-post__header">
                <figure className="avatar">
                  <a className="avatar__link" href="#">
                    <picture className="avatar__picture">
                      <img src={imgSrc} width="50" height="50" alt="user" />
                    </picture>
                  </a>
                </figure>
                <a href="#" className="article-post__author">User</a>
                <h2 className="article-post__title">
                  <a className="article-post__link" href="#">Текст статьи</a>
                </h2>
              </header>
              <div className='article-post__content'>
                <p className='article-post__text'>
                  Text comments
                </p>
                <a className="btn" href="#">Comment</a>
              </div>
              <footer className='article-post__footer'>
                <span className='article-post__date'>12.12.2023</span>
                <div className='article-post__info'>
                  <span className='article-post__likes'>7</span>
                  <span className='article-post__commets'>50</span>
                </div>
              </footer>
            </article>
          </div>*/ }

          <div className="article-flex">
            {posts.map(post => (
                <article className="article-post" key={post.id}>
                  <header className="article-post__header">
                    <figure className="avatar">
                      <a className="avatar__link" href="#">
                        <picture className="avatar__picture">
                          <img src={imgSrc} width="50" height="50" alt="user" />
                        </picture>
                      </a>
                    </figure>
                    <a href="#" className="article-post__author">User</a>
                    <h2 className="article-post__title">
                      <a className="article-post__link" href="#">Post name</a>
                    </h2>
                  </header>
                  <div className='article-post__content'>
                    <p className='article-post__text'>
                    {post.content}
                    </p>
                    <NavLink className="btn" to={`/posts/${post.id}`}>
                    Подробнее
                  </NavLink>
                  </div>
                  <footer className='article-post__footer'>
                    <span className='article-post__date'>12.12.2023</span>
                    <div className='article-post__info'>
                      <span className='article-post__likes'>7</span>
                      <span className='article-post__commets'>50</span>
                    </div>
                  </footer>
                </article>              
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;