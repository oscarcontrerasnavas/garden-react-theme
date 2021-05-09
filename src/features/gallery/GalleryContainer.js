import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useSelector, useDispatch } from "react-redux";
import { getImages, selectImages } from "./gallerySlice";

const GalleryContainer = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();
  const splideRef = useRef();

  useEffect(() => {
    dispatch(getImages());
    setInterval(() => {
      splideRef.current.splide.go(">");
    }, 4000);
  }, []);

  if (!images) {
    return (
      <div className="container my-5">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  return (
    <section className="container my-8 gallery">
      <h1 className="text-center">Gallery</h1>
      <h4 className="text-center text-primary mb-7">
        ~ More pictures on <a href="https://unsplash.com">unsplash.com</a> ~
      </h4>
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          autoWidth: true,
          gap: "2rem",
          pagination: false,
          pauseOnHover: false,
          pauseObFocus: false,
          arrows: "slider",
        }}
      >
        {images.map((image) => {
          return (
            <SplideSlide key={image.id}>
              <a
                href={image.links.html}
                target="_blanck"
                className="position-relative"
              >
                <span className="badge bg-light text-dark position-absolute fs-3 start-50 translate-middle">
                  {image.likes} Likes
                </span>
                <img
                  src={image.urls.raw + "&w=180&h=180"}
                  alt={image.alt_description}
                />
              </a>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default GalleryContainer;
