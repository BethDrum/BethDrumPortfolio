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
    ),
    pinType: document.querySelector("#scrollWrap").style.transform ? "transform" : "fixed",
    ignoreMobileResize: true
  }
});

// Horizontal fade-in
tl.to("#horizontal", { 
  opacity: 1, 
  duration: 0,
});

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


//add variables for tracking buttons/links

//CV button first
const target = document.getElementById("visableCVButton");
const clickB = document.getElementById("cvButton");

function trackButton() {
  //failsafe for if either not present
  if (!target || !clickB ) return;

  const rect = target.getBoundingClientRect();
  
  //set position of current invisable button
  gsap.set(clickB, {
    x: rect.left,
    y: rect.top,
    width: rect.width || 200,
    height: rect.height || 200
  });
}

//trigger trackButton() at any/all parts of the scroll
ScrollTrigger.addEventListener("refresh", trackButton);
ScrollTrigger.addEventListener("scrollStart", trackButton);
ScrollTrigger.addEventListener("scrollEnd", trackButton);
gsap.ticker.add(trackButton)

//add fallbacks for rapid resizing or layout change
window.addEventListener("resize", trackButton);
window.addEventListener("DOMContentLoaded", trackButton);

//initial call to function
trackButton();