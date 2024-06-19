document.addEventListener("DOMContentLoaded", () => {
  const contentElement = document.getElementById("content");

  document.querySelectorAll("#menu").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      const contentUrl = button.getAttribute("data-content");
      console.log(contentElement);

      loadContent(contentUrl);
      resetScrollPosition();
    });
  });

  // attach event listeners to sub-menu items
  function attachSubMenuListeners() {
    document.querySelectorAll("#subMenu").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        const contentUrl = button.getAttribute("data-content");

        console.log("click");

        const containerElement = document.getElementById("container");

        // load content into the container element
        function loadContainer(url) {
          fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error(
                  `Network response was not ok ${response.statusText}`
                );
              }
              return response.text();
            })
            .then((data) => {
              if (containerElement) {
                containerElement.innerHTML = data;
              } else {
                console.error("Container element not found");
              }
            })
            .catch((error) => {
              containerElement.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            });
        }

        console.log(containerElement);
        loadContainer(contentUrl);
        resetScrollPosition();
      });
    });
  }

  // Load initial content (optional)
  loadContent("home.html");

  // reset scroll position
  function resetScrollPosition() {
    window.scrollTo(0, 0);
  }

  // load content into the main content area
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
        attachSubMenuListeners(); // Attach sub-menu listeners after loading content
      })
      .catch((error) => {
        contentElement.innerHTML = `<p>Error loading content: ${error.message}</p>`;
      });
  }
});
