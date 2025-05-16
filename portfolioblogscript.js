document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loadMoreBtn").addEventListener("click", function () {
    const hiddenPosts = document.querySelectorAll(".post.hidden");
    for (let i = 0; i < 3 && i < hiddenPosts.length; i++) {
      hiddenPosts[i].classList.remove("hidden");
    }

    // Hide button if no more posts
    if (document.querySelectorAll(".post.hidden").length === 0) {
      this.style.display = "none";
    }
  });
});
