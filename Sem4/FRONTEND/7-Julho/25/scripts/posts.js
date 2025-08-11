const token = localStorage.getItem("authToken");
if (!token) {
  window.location.href = "login.html";
}

const postsContainer = document.getElementById("postsContainer");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("authToken");
  window.location.href = "login.html";
});

let posts = [];

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await res.json();
  displayPosts(posts);
}

function displayPosts(postList) {
  postsContainer.innerHTML = "";
  postList.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = post.title;
    card.addEventListener("click", () => showPost(post));
    postsContainer.appendChild(card);
  });
}

function showPost(post) {
  modalTitle.textContent = post.title;
  modalBody.textContent = post.body;
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

searchInput.addEventListener("input", () => {
  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  displayPosts(filtered);
});

fetchPosts();
