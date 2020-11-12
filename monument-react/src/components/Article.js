import React from 'react';

const Article = (props) => {
  return (
    <article id={props.title} className="col-third">
      <img src={props.article.image} alt="Archive Pic" />
      <div>
        <h3>{props.article.title}</h3>
        <p>{props.article.content}</p>
        <button>Read More</button>
      </div>
    </article>
  )
}

export default Article;
