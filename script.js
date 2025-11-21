const users = [
  {
    name: "Nastasha Romanoff",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1619031777353-e3de2db485b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "I'm a Brand Designer who focuses on clarity & emotional connection.",
    rating: 4.8,
    earned: "$45K+",
    rate: "$50/hr",
    button: {
      icon: "ri-chat-1-fill",
      text: "Get In Touch",
    },
  },
  {
    name: "Liam Carter",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1531500671540-547909785601?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Full Stack Developer crafting real-world experiences for the web.",
    rating: 4.7,
    earned: "$60K+",
    rate: "$65/hr",
    button: {
      icon: "ri-cloud-off-fill",
      text: "Let's Connect",
    },
  },
  {
    name: "Sophia Mendes",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1633600360735-079535249d6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "UI Designer helping businesses craft modern digital identities.",
    rating: 4.9,
    earned: "$89K+",
    rate: "$55/hr",
    button: {
      icon: "ri-chat-1-fill",
      text: "Get In Touch",
    },
  },
];
const cardContainer = document.querySelector(".card");

users.forEach((user) => {
  cardContainer.innerHTML += `
    <div class="container">
      <img src="${user.image}" alt="Profile Image" />

      <div class="icon">
        <i class="ri-bookmark-line"></i>
      </div>

      <div class="content">
        <h2>${user.name}</h2>
        ${user.verified ? `<i class="ri-verified-badge-fill"></i>` : ""}
      </div>

      <p>${user.bio}</p>

      <div class="session">
        <div class="rating">
          <i class="ri-star-fill"></i>
          <span>${user.rating}</span>
          <h6>Rating</h6>
        </div>

        <div class="earned">
          <span>${user.earned}</span>
          <h6>Earned</h6>
        </div>

        <div class="rate">
          <span>${user.rate}</span>
          <h6>Rate</h6>
        </div>
      </div>

      <div class="btn">
        <i class="${user.button.icon}"></i>
        <h6>${user.button.text}</h6>
      </div>
    </div>
  `;
});
