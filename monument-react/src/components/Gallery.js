import React from 'react';

const Gallery = (props) => {
  return (
    <section id="gallery">
      <div className="wrap">
        <h2>Issue Twenty</h2>
        <h3>A visual guide to the Southwest</h3>
        <div className="masonry">
          <img src="/publicImages/gallery_1.jpg" alt="" />
          <img src="/publicImages/gallery_3.jpg" alt="" />
          <img src="/publicImages/gallery_4.jpg" alt="" />
          <img src="/publicImages/gallery_2.jpg" alt="" />
          <img src="/publicImages/gallery_5.jpg" alt="" />
          <img src="/publicImages/gallery_6.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Gallery;
