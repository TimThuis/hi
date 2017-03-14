let skills = document.querySelector("#skills");

// event listener for hover and leave on skills element and calling animation
skills.addEventListener("mouseenter", function() {
  skillsTimeline.restart();
  skillsTimeline.timeScale(1)
});
skills.addEventListener("mouseleave", function() {
  skillsTimeline.reverse();
  skillsTimeline.timeScale(3)
})

//making the skills timeline and setting default to paused
const skillsTimeline = new TimelineMax();
skillsTimeline.pause();

// skills timeline start animation
skillsTimeline
  .staggerTo(".skills-container", 0.5, {
    height: "100%",
  }, 0.25, "start")
  .staggerFrom(".skills-container li", 0.25, {
    opacity: 0,
  }, 0.1, "start")
  .staggerFrom(".process-bar", 0.25, {
    width: "0%",
    ease: Back.easeOut
  }, 0.1, "start+=0.25")

// loading columns animation
TweenMax.staggerTo(".col", 1, {
  height: "100vh"
}, 0.25);

// smooth scroll function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
