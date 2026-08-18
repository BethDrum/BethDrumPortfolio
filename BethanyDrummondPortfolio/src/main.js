import './style.css'

gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray('#horizontal .section')
const horizontalSec = gsap.to(contents, {
  xPercent: -100 * (contents.length -1),
  ease: "none",
  scrollTrigger: {
    trigger: "#scrollWrap",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=" + window.innerWidth * contents.length
  }
});

const vertical = gsap.utils.toArray('#vertical .sectionV')
gsap.to(vertical, {
  yPercent: -100 * (vetical.length -1),
  ease: "none",
  scrollTrigger:{
    trigger:"#verticalSec",
    containerAnimation: horizontalSec,
    start: "left right",
    end: "+=" + window.innerHeight * vertical.length,
    pin: true,
    scrub: 1,
  }
});

// const horizontalEnd = gsap.utils.toArray('#horizontalEnd .section')
// gsap.to(horizontalEnd, {
//   xPercent: -100 * (horizontalEnd.length -1),
//   scrollTrigger: {
//     trigger: "#horizontalEnd",
//     pin: true,
//     scrub: 1,
//   }
// })