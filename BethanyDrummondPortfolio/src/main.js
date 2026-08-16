import './style.css'

gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray('#horizontal .section')
gsap.to(contents, {
  xPercent: -100 * (contents.length -1),
  scrollTrigger: {
    trigger: "#horizontal",
    pin: true,
    scrub: 1,
  }
})