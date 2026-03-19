import { HttpServerResponse } from "@effect/platform";

export const start = HttpServerResponse.html(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>NATS Event Sourced Bookshelf</title>
</head>
<body>
  <header>
    <h1>Add a book</h1>
  </header>
  <nav>
    <a href="/">Home</a>
  </nav>
  <main>
    <form action="/add-book/start" method="post">
      <label for="bookTitle">Book Title:</label>
      <input type="text" id="bookTitle" name="bookTitle" required><br><br>

      <label for="bookAuthor">Author:</label>
      <input type="text" id="bookAuthor" name="bookAuthor" required><br><br>

      <button type="submit">Add book to shelf</button>
    </form>
  </main>
</body>
</html>`);
