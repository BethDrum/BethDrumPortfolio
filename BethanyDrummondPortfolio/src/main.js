import './style.css'

// gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("load", () => {
//   const horizontalSections = gsap.utils.toArray('section.horizontal');

//   horizontalSections.forEach((sec) => {  
//     const pinWrap = sec.querySelector(".pin-wrap");
//     const animWrap = pinWrap.querySelector(".animation-wrap");

//     const getDistance = () =>
//       Math.max(0, animWrap.scrollWidth - window.innerWidth);

//     gsap.fromTo(
//       animWrap,
//       {
//         x: () =>
//           animWrap.classList.contains("to-right") ? 0 : -getDistance(),
//       },
//       {
//         x: () =>
//           animWrap.classList.contains("to-right") ? -getDistance() : 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sec,
//           start: "top top",
//           end: () => "+=" + getDistance(),
//           pin: pinWrap,
//           invalidateOnRefresh: true,
//           scrub: true,
//         },
//       }
//     );
//   });
// });





//define variables
// const contents = gsap.utils.toArray('#horizontal .section')
// const verticalPanels = gsap.utils.toArray('#vertical .sectionV');
// const finalHorizontal = gsap.utils.toArray('#fHorizontal .sectionH')
// const finalHorizontalFull = document.querySelector('#fHorizontal')

//set to level according to start position - (70 * panel number)
//gsap.set(verticalPanels, {yPercent: -230});

// contents.forEach(function (sec, i){
//   var pinSection = sec.querySelector('.pin-wrap');
//   var animateSection = pinSection.querySelector('.animation-wrap');
//   var getVal = () => -(animateSection.scrollWidth - window.innerWidth);

//   gsap.fromTo(animateSection, {
//     x: () => animateSection.classList.contains('right') ? 0 : getToValue()
//   },{
//     x: () => animateSection.classList.contains('right') ? 
//     getToValue() : 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: sec,
//       start: 'top top',
//       end: () => "+=" + (animateSection.scrollWidth - window.innerWIdth),
//       pin: pinSection,
//       invalidateOnRefresh: true,
//       scrub: true,
//     }

//   });
// });



//scroll horizontal
// gsap.to(contents, {
//   xPercent: -100 * (contents.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#horizontal",
//     pin: true,
//     scrub: true,
//     end: "+=" + window.innerWidth * contents.length
//   },
// });

// const timeline = gsap.timeline({
//   scrollTrigger:{
//     trigger: "#scrollWrap",
//     pin: true,
//     scrub: true,
//     markers: true,
//     start: "top top",
//     end: "+=" + window.innerWidth * 10
//   }
// });
// //continuation of horizontal scroll
// timeline.to(contents, {
//   xPercent: -100 * (contents.length -1),
//   ease: "none"
// });

// tl.from(".card:nth-child(1)", {
//   x: () => window.innerWidth,
//   duration: 1,
// });

// tl.from(".card:nth-child(2)", {
//   x: () => window.innerWidth,
//   duration: 1,
// });

// tl.from(".card:nth-child(3)", {
//   y: () => window.innerWidth,
//   duration: 1,
// });

//labels end of horizontal scroll (for now)
// timeline.addLabel("verticalStart")

//animate vertical
// timeline.to(verticalPanels, {
//   yPercent: "+=230", // 100 * (verticalPanels.length -1),
//   ease: "none"
// }, "verticalStart");

//timeline.addLabel("verticalEnd");

// timeline.to(finalHorizontalFull, {
//   xPercent: -100 * (finalHorizontal.length -1),
//   ease: "none",
// }, ">>");