const postUsername = document.getElementById("postUsername");
const postArticle = document.getElementById("postArticle");
const publishBtn = document.getElementById("publishBtn");
const postsDisplay = document.getElementById("postsDisplay");
const moreOption = document.getElementById("moreOption");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const post = [
  {
    id: 1,
    username: "@torikulalam",
    profile: "torikulse.png",
    postarticle:
      "Just completed a new UI design project! Feeling accomplished and grateful for the journey.",
    postdate: "2024-12-12",
  },
  {
    id: 2,
    username: "@farhanahmed",
    profile: "torikulse.png",
    postarticle:
      "Excited to share my new blog on frontend development tips. Check it out and let me know your thoughts!",
    postdate: "2024-12-11",
  },
  {
    id: 3,
    username: "@aisharahman",
    profile: "torikulse.png",
    postarticle:
      "Learning never stops! Exploring advanced UX design strategies to enhance user experiences.",
    postdate: "2024-12-10",
  },
  {
    id: 4,
    username: "@rahulkarim",
    profile: "torikulse.png",
    postarticle:
      "Happy weekend, everyone! What's your plan to unwind and recharge?",
    postdate: "2024-12-09",
  },
  {
    id: 5,
    username: "@sumaiyasiddique",
    profile: "torikulse.png",
    postarticle:
      "Pushing boundaries in web development with the latest MERN stack updates. Stay tuned for a demo!",
    postdate: "2024-12-08",
  },
];

function renderPostDisplay(arr) {
  postsDisplay.innerHTML = "";
  arr.map((e, i) => {
    postsDisplay.innerHTML += `
          <div class="border p-4 mb-2">
            <div class="flex gap-4 items-start">
              <img class="w-12 rounded-full" src="${e.profile}" alt="" />
              <div class=" grow">
                <div class="flex items-center mb-2 gap-2">
                  <h2 class="text-neutral-500">${e.username}</h2>
                  <p class="text-neutral-500 text-xs">${e.postdate}</p>
                </div>
                <p class="text-neutral-800">
                  ${e.postarticle}
                </p>
              </div>
              <div>
                <svg
                  id="moreOption"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical cursor-pointer "
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                  />
                </svg>
              </div>
            </div>
          </div>
    `;
  });
}
renderPostDisplay(post);

function addPost() {
  let generatePost = {
    id: `${Math.random()}`,
    username: postUsername.value,
    profile: "torikulse.png",
    postarticle: postArticle.value,
    postdate: `${new Date()}`,
  };
  post.push(generatePost);
  renderPostDisplay(post);
  console.log(generatePost.id);
}

let newArr = [];

function searcPost(arr, params) {
  arr.map((e) => {
    if (
      params.toLowerCase() ==
      e.postarticle.slice(0, params.length).toLowerCase()
    ) {
      newArr.push(e);
    }
  });
}

searchBtn.addEventListener("click", () => {
  searcPost(post, searchInput.value);
  renderPostDisplay(newArr);
  // console.log(newArr);
});
