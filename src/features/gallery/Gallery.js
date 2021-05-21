import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages, selectImages } from "./gallerySlice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Gallery = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  if (!images) {
    return (
      <section className="container my-7 gallery observed">
        <h1 className="text-center">Gallery</h1>
        <h4 className="text-center text-primary mb-5">
          ~ More pictures on <a href="https://unsplash.com">unsplash.com</a> ~
        </h4>
        <div className="container text-center pt-5">loading...</div>
      </section>
    );
  }

  return (
    <section className="container my-7 gallery observed">
      <h1 className="text-center">Gallery</h1>
      <h4 className="text-center text-primary mb-5">
        ~ More pictures on <a href="https://unsplash.com">unsplash.com</a> ~
      </h4>

      <div className="container">
        <Splide
          className="gallery-carousel"
          options={{
            type: "loop",
            perPage: 5,
            perMove: 1,
            gap: "1rem",
            pagination: false,
            arrowPath:
              "M1.15 20a2.4 2.4 0 0 1 2.4-2.4h27.806L21.051 7.299a2.4 2.4 0 1 1 3.398-3.398l14.4 14.4a2.4 2.4 0 0 1 0 3.398l-14.4 14.4a2.4 2.4 0 0 1-3.398-3.398L31.357 22.4H3.55A2.4 2.4 0 0 1 1.15 20z",
          }}
        >
          {images.map((image) => {
            return (
              <SplideSlide key={image.id}>
                <a href={image.links.html}>
                  <div className="gallery-hover">{image.likes} Likes</div>
                  <img
                    className="img-fluid"
                    src={`${image.urls.raw}&w=250&h=250`}
                    alt=""
                  />
                </a>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Gallery;
