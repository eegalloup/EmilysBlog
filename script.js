function makeStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  let stars = "★".repeat(fullStars);

  if (halfStar) {
    stars += "½";
  }

  return stars;
}

function formatDate(date) {
  return new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  }).toUpperCase();
}

function reviewCard(review) {
  return `
    <article class="review-card">
      <a class="review-image-link" href="post.html?id=${review.id}">
        <img src="${review.image}" alt="${review.title}">
      </a>

      <div class="review-copy">
        <p class="meta">${formatDate(review.date)}</p>

        <h3>
          <a class="review-title-link" href="post.html?id=${review.id}">
            ${review.title}
          </a>
        </h3>

        <p class="rating">${makeStars(review.rating)}</p>
      </div>
    </article>
  `;
}

/* Homepage: show the four newest reviews */
const recentReviews = document.getElementById("recent-reviews");

if (recentReviews) {
  const newestFour = [...reviews]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  recentReviews.innerHTML = newestFour.map(reviewCard).join("");
}

/* Reviews page: show all reviews, sort, and filter */
const allReviews = document.getElementById("all-reviews");
const sortSelect = document.getElementById("sort-reviews");
const genreFilter = document.getElementById("filter-genre");

function displayAllReviews() {
  if (!allReviews) return;

  const sortType = sortSelect.value;
  const selectedGenre = genreFilter.value;

  let displayedReviews = [...reviews];

  /* Only filter when a genre is selected */
  if (selectedGenre !== "all") {
    displayedReviews = displayedReviews.filter(review =>
      review.tags && review.tags.includes(selectedGenre)
    );
  }

  displayedReviews.sort((a, b) => {
    if (sortType === "oldest") {
      return new Date(a.date) - new Date(b.date);
    }

    if (sortType === "rating") {
      /* If ratings match, newest review appears first */
      return b.rating - a.rating || new Date(b.date) - new Date(a.date);
    }

    /* Default: newest first */
    return new Date(b.date) - new Date(a.date);
  });

  if (displayedReviews.length === 0) {
    allReviews.innerHTML = `
      <p class="no-results">
        No reviews match this genre yet.
      </p>
    `;
    return;
  }

  allReviews.innerHTML = displayedReviews.map(reviewCard).join("");
}

if (allReviews) {
  displayAllReviews();

  sortSelect.addEventListener("change", displayAllReviews);
  genreFilter.addEventListener("change", displayAllReviews);
}

if (allReviews) {
  displayAllReviews();

  sortSelect.addEventListener("change", function () {
    displayAllReviews(sortSelect.value);
  });
}

const genreTags = [
  "Shounen",
  "Romance",
  "Horror",
  "Fantasy",
  "Comedy",
  "Cyberpunk",
  "Psychological Thriller",
  "Drama",
  "Mecha",
  "Action",
  "Crime",
  "Supernatural"
];

function relatedReviews(currentReview) {
  const currentGenres = (currentReview.tags || []).filter(tag =>
    genreTags.includes(tag)
  );

  const matches = reviews
    .filter(review => review.id !== currentReview.id)
    .map(review => {
      const sharedGenres = (review.tags || []).filter(tag =>
        currentGenres.includes(tag)
      );

      return {
        ...review,
        sharedGenres
      };
    })
    .filter(review => review.sharedGenres.length > 0)
    .sort((a, b) => {
      /* Most shared genres first, then newest review */
      if (b.sharedGenres.length !== a.sharedGenres.length) {
        return b.sharedGenres.length - a.sharedGenres.length;
      }

      return new Date(b.date) - new Date(a.date);
    });

  if (matches.length === 0) {
    return "";
  }

  return `
    <section class="similar-reviews">
      <h2>Similar Shows</h2>

      <div class="similar-review-scroll">
        ${matches.map(review => `
          <a class="similar-review-card" href="post.html?id=${review.id}">
            <img src="${review.image}" alt="${review.title}">
            <div class="similar-review-copy">
              <h3>${review.title}</h3>
              <p>${review.sharedGenres.join(" · ")}</p>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

/* Individual review page */
const singleReview = document.getElementById("single-review");

if (singleReview) {
  const reviewID = new URLSearchParams(window.location.search).get("id");
  const review = reviews.find(item => item.id === reviewID);

  if (review) {
    singleReview.innerHTML = `
  <div class="review-detail">
    <aside class="review-sidebar">
      <a class="back" href="reviews.html">← Back to all reviews</a>

      <div class="review-poster">
        <img src="${review.image}" alt="${review.title}">
      </div>
    </aside>

    <div class="review-content">
      <p class="meta">${formatDate(review.date)}</p>

      <h1>${review.title}</h1>

      <p class="rating large-rating">${makeStars(review.rating)}</p>

      ${displayTags(review.tags)}

      <div class="review-body">
        ${review.review}
      </div>
    </div>
  </div>

  ${relatedReviews(review)}

`;
  } else {
    singleReview.innerHTML = "<h1>Review not found.</h1>";
  }

  function displayTags(tags) {
  if (!tags || tags.length === 0) {
    return "";
  }

  return `
    <div class="tag-list">
      ${tags.map(tag => `
  <span class="tag tag-${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}">
    ${tag}
  </span>
`).join("")}
    </div>
  `;
    }

}

const favoriteReviews = document.getElementById("favorite-reviews");

if (favoriteReviews) {
  const favorites = reviews.filter(review =>
    review.tags && review.tags.includes("Favorite")
  );

  favoriteReviews.innerHTML = favorites.map(review => `
    <a class="favorite-poster" href="post.html?id=${review.id}">
      <img src="${review.image}" alt="${review.title}">
      <div class="favorite-info">
        <h3>${review.title}</h3>
        <p>${makeStars(review.rating)}</p>
      </div>
    </a>
  `).join("");
}

/* Hide the fixed hero arrow after the hero has been scrolled past */
const hero = document.querySelector(".hero");
const scrollArrow = document.querySelector(".scroll-arrow");

if (hero && scrollArrow) {
  function updateScrollArrow() {
    const heroBottom = hero.getBoundingClientRect().bottom;

    scrollArrow.classList.toggle(
      "is-hidden",
      heroBottom < 100
    );
  }

  updateScrollArrow();
  window.addEventListener("scroll", updateScrollArrow);
}

/* Mobile navigation menu */
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  function closeMenu() {
    menuToggle.classList.remove("is-open");
    siteNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");

    menuToggle.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  siteNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
