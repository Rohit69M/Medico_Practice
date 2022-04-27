import React from "react";
import "./Gallery.css";
import gallery1 from "../../assets/img/gallery/gallery-1.jpg";
import gallery2 from "../../assets/img/gallery/gallery-2.jpg";
import gallery3 from "../../assets/img/gallery/gallery-3.jpg";
import gallery4 from "../../assets/img/gallery/gallery-4.jpg";
import gallery5 from "../../assets/img/gallery/gallery-5.jpg";

const Gallery = () => {
  return (
    <section className="Gallery_Container">
      <h1>Gallery</h1>
      <div className="Gallery_underline"></div>
      <p className="Gallery_desc">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="Gallery_Pictures">
        <img src={gallery1} alt="gallery1" />
        <img src={gallery2} alt="gallery2" />
        <img src={gallery3} alt="gallery3" />
        <img src={gallery4} alt="gallery4" />
        <img src={gallery5} alt="gallery5" />
      </div>
      <div className="testimonial_image_dots">
        <span className="dot_testimonial"></span>
        <span className="dot_testimonial"></span>
        <span className="dot_testimonial"></span>
        <span className="dot_testimonial"></span>
        <span className="dot_testimonial"></span>
      </div>
    </section>
  );
};

export default Gallery;
