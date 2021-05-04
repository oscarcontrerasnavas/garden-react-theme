window.addEventListener("scroll", (e) => {
  const parallax = document.querySelectorAll(".parallax");
  let i = 0;
  let length = parallax.length;

  for (i; i < length; i++) {
    let position = (window.pageYOffset * parallax[i].dataset.speed) / 10;
    parallax[i].style.transform = `translateY(-${position}%)`;
  }
});
