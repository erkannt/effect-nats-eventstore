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
    <p>to be implemented</p>
  </main>
</body>
</html>`);
