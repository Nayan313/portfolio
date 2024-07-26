let projectCardMain = [
  {
    img: "nextone.jpg",
    status1: "main",
    status2: "working",
    name: "Nextone Gadget E-Commarce",
    des: "This web is by the MERN stack.",
  },
  {
    img: "infinitymusic.png",
    status1: "side",
    status2: "complete",
    name: "Infinity Music",
    des: "This web is made of Spotify clone using jio savvan Api.",
  },
  {
    img: "imdb.jpg",
    status1: "side",
    status2: "complete",
    name: "Entertainment Data",
    des: "This web is made of IMDB clone using TMDB Api.",
  },
  {
    img: "nscityscrapper.jpg",
    status1: "side",
    status2: "complete",
    name: "NS City Scrapper",
    des: "This web is made of giving the city detail.",
  },
];


let projectCard = "";

for (card of projectCardMain){
    projectCard += `
    <div class="project-card" style="--color: #e5e5e5">
            <div class="pin-pro">
              Pinned 📌
            </div>
            <div class="img-section">
              <img src="./assets/img/${card.img}" >
            </div>
            <div class="detail">
              <div class="status-div">
                <div class="status ${card.status1}-pro">&#9679; ${card.status1} Project</div>
                <div class="status ${card.status2}-pro">&#9679; ${card.status2}</div>
              </div>
              <h1>${card.name}</h1>
              <p>${card.des}</p>
            </div>
          </div>`
}
document.querySelector(".project-section").innerHTML = projectCard;


let certificationArr = [
  {
    "name": "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
    "img": "aws.jpg",
    "company" : "Aws Academy",
  },
  {
    "name": "React Master Class by Scaler",
    "img": "scaler-react.jpg",
    "company" : "Scaler Academy",
  },
  {
    "name": "Introduction to Front End",
    "img": "meta-frontend.jpg",
    "company" : "Coursera",
  },
  {
    "name": "Unlocking Power of Java Script",
    "img": "js-scaler.jpg",
    "company" : "Scaler Academy",
  },
  {
    "name": "CSS Certification",
    "img": "css.jpg",
    "company" : "HackerRank",
  },
]

let CertificationCard = "";

for(card of certificationArr){
CertificationCard += `
<div class="certification-card">
<div class="img-section">
<img src ="assets/certification/${card.img}"></div>
<h3>${card.name}</h3>
<p>${card.company}</p>
</div>`
}
document.querySelector(".certification-card-section").innerHTML = CertificationCard;