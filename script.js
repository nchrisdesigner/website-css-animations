document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo")
  const path = document.querySelector(".cls-1")


  path.addEventListener('animationend', () => {
    logo.classList.remove('animate')
    setTimeout(() => {
      logo.classList.add('animate')
    }, 10000)
  })

  const mediaQuery = matchMedia("(prefers-reduced-motion");
  console.log(mediaQuery);
  const checkReducedMotion = () => {
    const videos = document.querySelectorAll('.bg-video')
    if (mediaQuery.matches) {
      videos.forEach((video) => video.pause())
    }
    else {
      videos.forEach((video) => video.play())
    }
  }

  checkReducedMotion()

  mediaQuery.addEventListener('change', checkReducedMotion)
});
