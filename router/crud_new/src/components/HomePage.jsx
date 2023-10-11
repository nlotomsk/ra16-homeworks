import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header/Header"
import '../App.css'

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    
    <div>
      <Header/>
      <div className="post-form">
        <div className="post-form__actions">
          <NavLink className="menu__item btn" to="/posts/new">
            Создать пост
          </NavLink>
          
        </div>
      </div>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="post__content">
              <NavLink className="post__text" to={`/posts/${post.id}`}>
                {post.content}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;