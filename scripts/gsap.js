let cursor = document.querySelector("#cursor");
let bodyMain = document.querySelector(".bodyMain");

bodyMain.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    x:dets.x,
    y:dets.y,
    duration:0.02,
  })
})


let tl2 = gsap.timeline();
tl2.to(".sideNavbar", {
    duration : 0.55,
    ease: "power3.in",
borderRadius : 0,
  right: 0,
  top: 0,
});
tl2.from(".sideNavbar a", {
  x: 20,
  stagger: 0.12,
  duration: 0.15,
  opacity: 0,
  delay: 0.04,
});
tl2.pause();
let openMenubar = document.querySelector(".hamburger");
let ReverseMenubar = document.querySelector(".cross");

openMenubar.addEventListener("click", function () {
  tl2.play();
});
ReverseMenubar.addEventListener("click", function () {
  tl2.reverse();
});


const projectCards = document.querySelectorAll(".project-card");
const matterContainer = document.querySelector(".matter-container");

matterContainer.addEventListener("mouseenter", () => {
  cursorHover()
  cursor.innerHTML = "<p>Skill</p>";
});

matterContainer.addEventListener("mouseleave", () => {
  cursorHoverOut ()
});

projectCards.forEach(projectCard => {
  projectCard.addEventListener("mouseenter", () => {
    cursorHover()
    cursor.innerHTML = "<p>Click</p>";
  });

  projectCard.addEventListener("mouseleave", () => {
    cursorHoverOut ()
  });
});

function cursorHover () {
  gsap.to(cursor,{
    width:100,
    height:100,
    zIndex:1,
    duration:0.5,
  })
}
function cursorHoverOut () {
  cursor.innerHTML = "";
  gsap.to(cursor,{
    width:20,
    height:20,
    zIndex:200,
    duration:0.5,
  })
}