import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages, selectImages } from "./gallerySlice";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const sliderConfiguration = {
  type: "carousel",
  perView: 6,
  gap: 20,
  autoplay: 4000,
  breakpoints: {
    720: {
      perView: 1,
      gap: 0,
    },
  },
};

const GalleryContainer = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();
  const slider = useMemo(
    () => new Glide(".gallery__glide", sliderConfiguration)
  );

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      slider.mount();
    };
  }, [slider]);

  if (!images) {
    return (
      <div className="container my-5">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  return (
    <section className="container my-7 gallery observed">
      <h1 className="text-center">Gallery</h1>
      <h4 className="text-center text-primary mb-5">
        ~ More pictures on <a href="https://unsplash.com">unsplash.com</a> ~
      </h4>

      {/* Glide slider */}
      <div className="gallery__glide">
        <div
          className="glide__arrows d-flex justify-content-end align-content-center"
          data-glide-el="controls"
        >
          <button
            className="glide__arrow glide__arrow--left btn btn-link"
            data-glide-dir="<"
          >
            <i className="bi bi-arrow-left fs-1"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right btn btn-link"
            data-glide-dir=">"
          >
            <i className="bi bi-arrow-right fs-1"></i>
          </button>
        </div>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {images.map((image, index) => (
              <li className="glide__slide" key={index}>
                <a
                  href={image.links.html}
                  target="_blanck"
                  className="position-relative"
                >
                  <span className="badge bg-light text-dark position-absolute fs-3 start-50 top-50 translate-middle">
                    {image.likes} Likes
                  </span>
                  <img
                    src={image.urls.raw + "&w=360&h=360"}
                    alt={image.alt_description}
                    className="img-fluid"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GalleryContainer;
