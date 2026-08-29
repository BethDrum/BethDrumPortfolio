import './style.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
    ),
    pinType: document.querySelector("#scrollWrap").style.transform ? "transform" : "fixed",
    ignoreMobileResize: true
  }
});

// Horizontal section
tl.to("#horizontal", { 
  opacity: 1, 
  duration: 0,
});
tl.addLabel("aboutMe");


// Horizontal scroll
tl.to(contents, {
  xPercent: -100 * (contents.length - 1),
  ease: "none"
});

// Fade horizontal out slightly (not fully)
tl.to("#horizontal", { 
  opacity: 0.3, 
  duration: 0.4 
});

// Vertical fade-in + float effect
tl.to("#vertical", {
  opacity: 1,
  scale: 1,
  duration: 0.8,
  ease: "power2.out"
}, "<");
tl.addLabel("portfolio")

// Vertical scroll
tl.to(contentsV, {
  yPercent: -100 * (contentsV.length - 1),
  ease: "none"
});

// Vertical fade-out
tl.to("#vertical", {
  opacity: 0,
  scale: 0.95,
  duration: 0.6,
  ease: "power2.in"
});

tl.addLabel("contact");

// Fade next horizontal section in
tl.to("#horizontalF", {
  opacity: 1,
  duration: 0,
  ease: "power2.out"
});

// Final horizontal scroll
tl.to(contentsF, {
  xPercent: -100 * (contentsF.length - 1),
  ease: "none"
});



//link listeners for section links
document.querySelector("#linkOne").addEventListener("click", (e) => {
  e.preventDefault();

  const targetOne = tl.scrollTrigger.labelToScroll("aboutMe");

  gsap.to(window, {
    duration: 1,
    scrollTo: targetOne,
    ease: "power2.out"
  });
});

document.querySelector("#linkTwo").addEventListener("click", (e) => {
  e.preventDefault();

  const targetTwo = tl.scrollTrigger.labelToScroll("portfolio");

  gsap.to(window, {
    duration: 1,
    scrollTo: targetTwo,
    ease: "power2.out"
  });
});

document.querySelector("#linkThree").addEventListener("click", (e) => {
  e.preventDefault();

  const targetThree = tl.scrollTrigger.labelToScroll("contact");

  gsap.to(window, {
    duration: 1,
    scrollTo: targetThree,
    ease: "power2.out"
  });
});