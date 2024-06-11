# news-website

## 💻 Process

## ✅ What I Learned

### transition to border on hover

```
.nav a {

  transition: border-top 0.3s ease; /* Adjust the duration and timing function as needed */
}
```

- border-top: Specifies that the transition effect applies to the border-top property
- 0.3s: Duration of the transition effect. You can adjust this value to make the transition faster or slower
- ease: Timing function for the transition. This can be changed to other timing functions like linear, ease-in, ease-out

<hr>

### dynamically loads and displays content from different HTML files

```
document.addEventListener("DOMContentLoaded", () => { ... });
```

the script runs only after the HTML document has been completely loaded and parsed

```
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
```

fetch(url)

- Sends an HTTP request to the specified URL
- fetch returns a promise that resolves to the response of the request

.then((response) => { return response.text(); })

- Processes the response by converting it to text
- response.text() also returns a promise that resolves to the response body as a string

.then((data) => { contentElement.innerHTML = data; })

- When the response text is ready, it updates the innerHTML of contentElement with the fetched data
- This effectively replaces the content of the content element with the new data

## 🛠️ Trouble shooting

### different heights for the elements

Cause: the difference in the content of the divs

Solution:
Set a Fixed Height

```
.article {
  height: 400px;

  margin: 0px;

  display: grid;
  grid-template-rows: auto auto; /* allow both rows to automatically adjust */
}
.image {
  height: 400px;
}

.text {
  height: 93px;
  box-sizing: border-box; /* Ensure padding and border are included in the height,  preventing unexpected changes in size */

}

```
