import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";

export const Slider = forwardRef(({ options, children, ...props }, ref) => {
  const sliderRef = useRef();

  useImperativeHandle(ref, () => sliderRef.current);

  useEffect(() => {
    const slider = new Glide(sliderRef.current, options);
    slider.mount();

    return () => slider.destroy();
  }, [options]);
  return (
    <div className={`glide ${props.className || ""}`} ref={sliderRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>
    </div>
  );
});

export const Slide = forwardRef(({ children }, ref) => {
  return <li className="glide__slide">{children}</li>;
});
