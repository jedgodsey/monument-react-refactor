import React from 'react';
import Article from './Article';
import articleData from '../models/articleData.js';

const Archive = (props) => {
  return (
    <section>
      <h2>From the Archive</h2>
      <div className="grid-wrapper articles">
        {articleData.map((item, index) => {
          return <Article article={item} key={item.title} />
        })}
      </div>
    </section>
  )
}

export default Archive;
