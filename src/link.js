import {gsap} from "gsap"
gsap.registerPlugin(ScrollTrigger);

//CV button first
const targetCV = document.getElementById("visableCVButton");
const clickCV = document.getElementById("cvButton");

function trackCV() {
  //failsafe for if either not present
  if (!targetCV || !clickCV ) return;

  const rect = targetCV.getBoundingClientRect();
  
  //set position of current invisable button
  gsap.set(clickCV, {
    x: rect.left,
    y: rect.top,
    width: rect.width || 200,
    height: rect.height || 200
  });
}

//LinkedIn link
const targetLinked = document.getElementById("visableLinkedInLink");
const clickLinked = document.getElementById("linkedInLink");

function trackLinkedIn() {
  //failsafe for if either not present
  if (!targetLinked || !clickLinked ) return;

  const rect = targetLinked.getBoundingClientRect();
  
  //set position of current invisable button
  gsap.set(clickLinked, {
    x: rect.left,
    y: rect.top,
    width: rect.width || 200,
    height: rect.height || 200
  });
}

//GitHub link
const targetGit = document.getElementById("visableGithubLink");
const clickGit = document.getElementById("githubLink");

function trackGithub() {
  //failsafe for if either not present
  if (!targetGit || !clickGit ) return;

  const rect = targetGit.getBoundingClientRect();
  
  //set position of current invisable button
  gsap.set(clickGit, {
    x: rect.left,
    y: rect.top,
    width: rect.width || 200,
    height: rect.height || 200
  });
}

//INTRO PAGE SECTION LINKS
const targetQuickLink = document.getElementById("visableIntroQuickLinks");
const clickQuickLink = document.getElementById("introQuickLinks");

function trackQuickLinks() {
  //failsafe for if either not present
  if (!targetQuickLink || !clickQuickLink ) return;

  const rect = targetQuickLink.getBoundingClientRect();
  
  //set position of current invisable button
  gsap.set(clickQuickLink, {
    x: rect.left,
    y: rect.top,
    width: rect.width || 200,
    height: rect.height || 200
  });
}

//triggers to call all trackers throughout any use of website
ScrollTrigger.addEventListener("refresh", () => {
  trackCV();
  trackLinkedIn();
  trackGithub();
  trackQuickLinks()
});
ScrollTrigger.addEventListener("scrollStart", () => {
  trackCV();
  trackLinkedIn();
  trackGithub();
  trackQuickLinks()
});
ScrollTrigger.addEventListener("scrollEnd", () => {
  trackCV();
  trackLinkedIn();
  trackGithub();
  trackQuickLinks()
});
gsap.ticker.add(trackCV)
gsap.ticker.add(trackLinkedIn)
gsap.ticker.add(trackGithub)
gsap.ticker.add(trackQuickLinks)

//add fallbacks for rapid resizing or layout change
window.addEventListener("resize", () => {
  trackCV();
  trackLinkedIn();
  trackGithub();
  trackQuickLinks()
});
window.addEventListener("DOMContentLoaded", () => {
  trackCV();
  trackLinkedIn();
  trackGithub();
  trackQuickLinks()
});

//initial call to function
trackCV();
trackLinkedIn();
trackGithub();
trackQuickLinks();