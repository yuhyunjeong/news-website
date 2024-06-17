document.addEventListener("DOMContentLoaded", () => {
  const contentElement = document.getElementById("content");

  document.querySelectorAll("#menu").forEach((button) => {
    button.addEventListener("click", () => {
      const contentUrl = button.getAttribute("data-content");
      loadContent(contentUrl);
      resetScrollPosition();
    });
  });

  // Load initial content (optional)
  loadContent("home.html");

  // Function to reset scroll position
  function resetScrollPosition() {
    window.scrollTo(0, 0);
  }

  function loadContent(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        contentElement.innerHTML = data;
      })
      .catch((error) => {
        contentElement.innerHTML = `<p>Error loading content: ${error.message}</p>`;
      });
  }
});
