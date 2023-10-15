import './style.css'


const Header = () => {
    return (
      <>
      <header className='header'>
        <div className='header__container'>
          <h1 className='header__title'>Blog for DevOps</h1>
        </div>
        
      </header>
      <div className="gradient"></div>
      {/* <div className="container_post">
        <main>
          <div className="article">
            <div className="article-post">
              <header className="article-post__header">
                <figure className="avatar">
                  <a className="avatar__link" href="#">
                    <picture className="avatar__picture">
                      <img src={require("./img/free-icon-user.png").default} alt="user" />
                    </picture>
                  </a>
                </figure>
                <a href="#" className="article-post__author">User</a>
                <h2 className="article-post__title">
                  <a className="article-post__link" href="#">Текст статьи</a>
                </h2>
              </header>
              <div className="article-post__content">
                <p className="article-post__text">
                  Text comments
                </p>
                <a className="btn" href="#">Comment</a>
              </div>
              <footer className="article-post__footer">
                <span className="article-post__date">12.12.2023</span>
                <div>
                  <span className="article-post__likes">7</span>
                  <span className="article-post__commets">50</span>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div> */}
      </>
    );
  };
  
  export default Header;


// https://www.youtube.com/watch?v=Ly0U1Yy2OHI&t=825s