let deviceFeatures = [
  {"title": "Explore music",
    "des" : "Discover over 10 million songs, albums, and playlists from the JioSaavn API, with lightning-fast access in just 10 milliseconds.",
    "img": "frame (1).png"
  },
  {"title": "Explore music",
    "des" : "Discover over 10 million songs, albums, and playlists from the JioSaavn API, with lightning-fast access in just 10 milliseconds.",
    "img": "frame (2).png"
  },
  {"title": "Explore music",
    "des" : "Discover over 10 million songs, albums, and playlists from the JioSaavn API, with lightning-fast access in just 10 milliseconds.",
    "img": "frame (3).png"
  },
  {"title": "Explore music",
    "des" : "Discover over 10 million songs, albums, and playlists from the JioSaavn API, with lightning-fast access in just 10 milliseconds.",
    "img": "frame (4).png"
  },
  {"title": "Explore music",
    "des" : "Discover over 10 million songs, albums, and playlists from the JioSaavn API, with lightning-fast access in just 10 milliseconds.",
    "img": "frame (5).png"
  },
  {"title": "Explore music",
    "des" : "Discover over 10 million songs, albums, and playlists from the JioSaavn API, with lightning-fast access in just 10 milliseconds.",
    "img": "frame (6).png"
  },
]
let deviceCard = "";
for(card of deviceFeatures){
  deviceCard += `
  <div class="device-design-info" id="card1">
  <div class="img-section">
      <img src="./assets/img/nsmusic/${card.img}" alt="">
  </div>
  <div class="detail">
      <h1 class="title">${card.title}</h1>
      <p class="des">${card.des}</p>
  </div>
</div>`
}
document.querySelector(".device-info-section").innerHTML = deviceCard;