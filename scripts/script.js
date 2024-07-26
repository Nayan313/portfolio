const welcomeMessages = [
  "Welcome",
  "નમસ્તે",
  "Willkommen",
  "Benvenuto",
  "स्वागत है",
  "સ્વાગત છે",
];
const loaderGreet = document.querySelector(".loaderGreet");
let currentIndex = 0;
function changeWelcomeMessage() {
  loaderGreet.innerHTML = "&#9679; " + welcomeMessages[currentIndex];
  currentIndex = (currentIndex + 1) % welcomeMessages.length;
}
changeWelcomeMessage();
setInterval(changeWelcomeMessage, 1000);

const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

tl.set(".topBg,.header", { opacity: 0, y: "-100%" });
tl.set(".gsapHero", { opacity: 0, y: "100%" });
tl.to(".loaderGreet", { delay: 5, opacity: 0, duration: 1.5 });
tl.to(".bar", {
  duration: 0.7,
  height: 0,
  stagger: 0.2,
});

tl.to(".gsapHero ,.topBg", {
  duration: 0.5,
  opacity: 1,
  y: 0,
  stagger: 0.5,
});
tl.to(".header",{
    opacity: 1,
    y: 0,
})
tl.eventCallback("onComplete", function () {
  document.querySelector(".pageLoader").style.display = "none";
});
tl.play();
