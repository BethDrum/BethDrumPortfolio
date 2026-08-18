import './style.css'

gsap.registerPlugin(ScrollTrigger);

//define variables
const contents = gsap.utils.toArray('#horizontal .section')
const verticalPanels = gsap.utils.toArray('#vertical .sectionV');

//set to level according to start position - (70 * panel number)
gsap.set(verticalPanels, {yPercent: 210});

//scroll horizontal
const timeline = gsap.timeline({
  scrollTrigger:{
    trigger: "#scrollWrap",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=" + window.innerWidth * contents.length
  }
});
//continuation of horizontal scroll
timeline.to(contents, {
  xPercent: -100 * (contents.length -1),
  ease: "none"
});

//labels end of horizontal scroll (for now)
timeline.addLabel("verticalStart")

//animate vertical
timeline.to(verticalPanels, {
  yPercent: -100 * (verticalPanels.length -1),
  ease: "none"
}, "verticalStart");
