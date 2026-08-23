import './style.css'

gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray('#horizontal .section');
const contentsV = gsap.utils.toArray('#vertical .sectionV');
const contentsF = gsap.utils.toArray('#horizontalF .sectionF');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#scrollWrap",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=" + window.innerWidth * (
      contents.length +
      contentsV.length +
      contentsF.length
    )
  }
});

tl.to("#horizontal", {
  opacity: 1,
  duration: 0,
}, "<");

tl.to(contents, {
  xPercent: -100 * (contents.length - 1),
  ease: "none"
});

tl.to("#horizontal",{
  opacity: 0,
  duration: 0,
});

//vertical portfolio
tl.to("#vertical", {
  opacity: 1,
  duration: 0,
}, "<");

tl.to(contentsV, {
  yPercent: -100 * (contentsV.length - 1),
  ease: "none"
});

tl.to("#vertical",{
  opacity: 0,
  duration: 0
});

tl.to("#horizontalF",{
  opacity: 1,
  duration: 0
});

tl.to(contentsF, {
  xPercent: -100 * (contentsF.length - 1),
  ease: "none"
});
