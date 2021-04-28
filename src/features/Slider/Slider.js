import { useState, useEffect, Children } from "react";
import anime from "animejs/lib/anime.es";
import "./slider.scss";

const Slider = ({ id, children }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Wraps every word in a span
  useEffect(() => {
    let slides = document.querySelectorAll(".slider__slide");
    slides.forEach((slide) => {
      let elements = slide.querySelectorAll("h1,h2,h3,h4,h5,h6");
      elements.forEach((el) => {
        let words = el.textContent.split(" ");
        el.innerHTML = "";
        words.map((word) => {
          el.innerHTML += `<span class="word d-inline-block">${word}</span> `;
        });
      });
    });
  }, []);

  // Animations In
  useEffect(() => {
    const slideShow = anime({
      targets: [".slider__slide.active-slide"],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 1500,
      autoplay: false,
      complete: () => {
        textShow.play();
      },
    });

    const textShow = anime({
      targets: [".slider__slide.active-slide .word"],
      opacity: [0, 1],
      easing: "easeOutExpo",
      autoplay: false,
      delay: (el, i) => 150 * i,
      complete: () => {
        imgShow.play();
        elementsShow.play();
      },
    });

    const elementsShow = anime({
      targets: [
        ".slider__slide.active-slide p",
        ".slider__slide.active-slide button",
      ],
      opacity: [0, 1],
      easing: "easeInQuad",
      autoplay: false,
      duration: 1000,
    });

    const imgShow = anime({
      targets: ".slider__slide.active-slide img",
      opacity: [0, 1],
      translateX: [300, 0],
      easing: "easeOutBounce",
      autoplay: false,
      duration: 1000,
    });

    slideShow.play();
  }, [activeSlide]);

  // Set the slide class according to its position and index
  const slideClass = (slideId) => {
    if (activeSlide === slideId) return "active-slide";
    return "";
  };

  const changeSlide = (direction) => {
    // Animations out
    const imgHidde = anime({
      targets: ".slider__slide.active-slide img",
      opacity: [1, 0],
      translateX: [0, 300],
      easing: "linear",
      autoplay: false,
      duration: 500,
      complete: () => {
        slideHidde.play();
      },
    });

    const slideHidde = anime({
      targets: [".slider__slide.active-slide"],
      opacity: [1, 0],
      easing: "easeInOutSine",
      duration: 1000,
      autoplay: false,
    });

    imgHidde.play();
    slideHidde.finished.then(() => {
      if (direction === "next") {
        setActiveSlide(
          activeSlide === children.length - 1 ? 0 : activeSlide + 1
        );
      } else {
        setActiveSlide(
          activeSlide === 0 ? children.length - 1 : activeSlide - 1
        );
      }
    });
  };

  // Return if there is no children
  if (!children.length) {
    return (
      <div className="slider">
        <div className="slider__slide">{Children.only(children)}</div>
      </div>
    );
  }

  // Output
  return (
    <div id={id} className="slider">
      {children.map((slide, index) => {
        return (
          <div className={`slider__slide ${slideClass(index)}`} key={index}>
            {slide}
          </div>
        );
      })}
      <div className="slider__arrows">
        <button
          className="btn prev fs-1 fw-bold"
          onClick={() => changeSlide("prev")}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          className="btn next fs-1 fw-bold"
          onClick={() => changeSlide("next")}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
