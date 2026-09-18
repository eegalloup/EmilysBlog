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

/* Reviews page: show all reviews and sort them */
const allReviews = document.getElementById("all-reviews");
const sortSelect = document.getElementById("sort-reviews");

function displayAllReviews(sortType = "newest") {
  if (!allReviews) return;

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortType === "alphabetical") {
      return a.title.localeCompare(b.title);
    }

    return new Date(b.date) - new Date(a.date);
  });

  allReviews.innerHTML = sortedReviews.map(reviewCard).join("");
}

if (allReviews) {
  displayAllReviews();

  sortSelect.addEventListener("change", function () {
    displayAllReviews(sortSelect.value);
  });
}

/* Individual review page */
const singleReview = document.getElementById("single-review");

if (singleReview) {
  const reviewID = new URLSearchParams(window.location.search).get("id");
  const review = reviews.find(item => item.id === reviewID);

  if (review) {
    singleReview.innerHTML = `
  <div class="review-detail">
    <aside class="review-poster">
      <img src="${review.image}" alt="${review.title}">
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
      ${tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
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